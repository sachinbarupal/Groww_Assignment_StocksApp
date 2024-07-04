import { Stock } from "@/types";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet, Platform } from "react-native";
import { Text } from "react-native-paper";
import { PriceChange } from "./PriceChange";
import { useColorScheme } from "@/components/useColorScheme";
import { theme } from "@/theme";

export function StockItemCard(stock: Stock) {
  const colorScheme = useColorScheme();

  const currentTheme =
    colorScheme === "light" ? theme.light.colors : theme.dark.colors;
  return (
    <Pressable
      style={[styles.item, { backgroundColor: currentTheme.background }]}
      onPress={() => router.push(`/${stock.ticker}`)}
    >
      <Image
        source={
          "https://icon2.cleanpng.com/20240216/ikb/transparent-google-logo-google-logo-with-multicolored-g-and-1710875587855.webp"
        }
        style={{ height: 70, width: 70, borderRadius: 50 }}
        contentFit="contain"
      />
      <Text variant="titleSmall" style={{ marginVertical: 10 }}>
        {stock.ticker}
      </Text>
      <Text variant="bodyLarge">$ {stock.price}</Text>
      <PriceChange percentage={parseFloat(stock.change_percentage)} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    padding: 10,
    paddingBottom: 0,
    // height: 150,
    borderRadius: 4,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
