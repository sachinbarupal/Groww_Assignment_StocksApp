import { useContext, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SearchContext } from "./_layout";
import { Text } from "react-native-paper";
import { StockItemCard } from "@/components/StockItemCard";

export default function SearchScreen() {
  const { searchQuery, setSearchQuery, searchedStocks, setSearchedStocks } =
    useContext(SearchContext);

  useEffect(() => {
    setSearchQuery("");
    setSearchedStocks([]);
  }, []);

  if (!searchQuery && searchedStocks.length === 0)
    return (
      <View style={styles.container}>
        <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
          Search Stocks...
        </Text>
      </View>
    );
  if (searchedStocks.length === 0)
    return (
      <View style={styles.container}>
        <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
          No Stocks Found...
        </Text>
      </View>
    );

  return (
    <FlatList
      data={searchedStocks}
      keyExtractor={(Item) => Item.ticker}
      numColumns={2}
      renderItem={({ item }) => <StockItemCard {...item} />}
    />
  );
}

const styles = StyleSheet.create({
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
