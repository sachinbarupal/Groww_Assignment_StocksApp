import { data } from "@/api_data";
import { StockItemCard } from "@/components/StockItemCard";
import { Stock } from "@/types";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    fetchGainers();
  }, []);

  const fetchGainers = async () => {
    const res = await fetch(
      "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=OHEFTTH4A7JWLUNR"
    );
    const { top_gainers }: { top_gainers: Stock[] } = await res.json();
    // console.log(top_gainers);
    setStocks(top_gainers);
    // setStocks(data.top_gainers);
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
