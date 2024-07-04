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

export default function HomeScreen() {
  const stocks = data.top_gainers;

  useEffect(() => {
    // fetchGainers();
  }, []);

  // const fetchGainers = async () => {
  //   const res = await fetch(
  //     "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=OHEFTTH4A7JWLUNR"
  //   );
  //   const data: any = await res.json();
  //   // console.log(data);
  //   setStocks(data.top_gainers);
  // };

  return (
    <View style={{ flex: 1, paddingTop: 30, paddingHorizontal: 10 }}>
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
