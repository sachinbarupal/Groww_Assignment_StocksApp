// import { stocks } from "@/data";
import { data } from "@/api_data";
import { StockItemCard } from "@/components/StockItemCard";
import { Stock } from "@/types";
import axios from "axios";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function TopLosersScreen() {
  // const stocks = data.top_losers;
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    fetchGainers();
  }, []);

  const fetchGainers = async () => {
    const res = await fetch(
      "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=OHEFTTH4A7JWLUNR"
    );
    const { top_losers }: { top_losers: Stock[] } = await res.json();
    console.log(top_losers);
    setStocks(top_losers);
    // setStocks(data.top_losers);
  };

  return (
    <View style={{ flex: 1, paddingTop: 10, paddingHorizontal: 10 }}>
      <Text
        variant="titleLarge"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 5,
        }}
      >
        Available Stocks
      </Text>

      {/* <View style={styles.app}> */}
      <FlatList
        data={stocks}
        keyExtractor={(Item) => Item.ticker}
        numColumns={2}
        renderItem={({ item }) => <StockItemCard {...item} />}
      />
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
