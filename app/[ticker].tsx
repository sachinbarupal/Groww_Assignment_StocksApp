import { overview } from "@/api_data";
import Chart from "@/components/Chart";
import DetailBlock from "@/components/DetailBlock";
import { PriceChange } from "@/components/PriceChange";
import { theme } from "@/theme";
import { StockOverView } from "@/types";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useColorScheme, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { Text } from "react-native-paper";

const ptData = [
  { value: 160, date: "1 Apr 2022" },

  { value: 180, date: "2 Apr 2022" },

  { value: 190, date: "3 Apr 2022" },

  { value: 180, date: "4 Apr 2022" },

  { value: 140, date: "5 Apr 2022" },

  { value: 145, date: "6 Apr 2022" },

  { value: 160, date: "7 Apr 2022" },

  { value: 200, date: "8 Apr 2022" },

  { value: 220, date: "9 Apr 2022" },

  {
    value: 240,

    date: "10 Apr 2022",

    label: "10 Apr",

    labelTextStyle: { color: "lightgray", width: 60 },
  },

  { value: 280, date: "11 Apr 2022" },

  { value: 260, date: "12 Apr 2022" },

  { value: 340, date: "13 Apr 2022" },

  { value: 385, date: "14 Apr 2022" },

  { value: 280, date: "15 Apr 2022" },

  { value: 390, date: "16 Apr 2022" },

  { value: 370, date: "17 Apr 2022" },

  { value: 285, date: "18 Apr 2022" },

  { value: 295, date: "19 Apr 2022" },

  {
    value: 300,

    date: "20 Apr 2022",

    label: "20 Apr",

    labelTextStyle: { color: "lightgray", width: 60 },
  },

  { value: 280, date: "21 Apr 2022" },

  { value: 295, date: "22 Apr 2022" },

  { value: 260, date: "23 Apr 2022" },

  { value: 255, date: "24 Apr 2022" },

  { value: 190, date: "25 Apr 2022" },

  { value: 220, date: "26 Apr 2022" },

  { value: 205, date: "27 Apr 2022" },

  { value: 230, date: "28 Apr 2022" },

  { value: 210, date: "29 Apr 2022" },

  {
    value: 200,

    date: "30 Apr 2022",

    label: "30 Apr",

    labelTextStyle: { color: "lightgray", width: 60 },
  },

  { value: 240, date: "1 May 2022" },

  { value: 250, date: "2 May 2022" },

  { value: 280, date: "3 May 2022" },

  { value: 250, date: "4 May 2022" },

  { value: 210, date: "5 May 2022" },
];

export default function TickerScreen() {
  const params: {
    ticker?: string;
    price?: string;
    change_percentage?: string;
  } = useLocalSearchParams();
  // console.log(ticker);
  const colorScheme = useColorScheme();

  const currentTheme =
    colorScheme === "light" ? theme.light.colors : theme.dark.colors;
  // const stock = selectStock(ticker as string);

  const [stock, setStock] = useState<StockOverView | null>(null);

  useEffect(() => {
    // const overview = async () => {
    //   const res = await fetch(
    //     "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" +
    //       ticker +
    //       "&apikey=0ZDCNLWTQPW9V8Q0"
    //   );
    //   const data: StockOverView = await res.json();
    //   setStock(data);
    //   // console.log(data);
    // };
    // overview();
    setStock(overview);
  }, []);

  // useee;

  if (!stock) return <Text>Loading....</Text>;

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 50 }}
            contentFit="contain"
            source={
              "https://icon2.cleanpng.com/20240216/ikb/transparent-google-logo-google-logo-with-multicolored-g-and-1710875587855.webp"
            }
          />
          <View style={{ paddingLeft: 10, width: "60%" }}>
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
              {stock.Symbol}
            </Text>
            <Text variant="labelMedium">{stock.Name}</Text>
          </View>
        </View>

        <View>
          <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
            $ {params.price}
          </Text>
          <PriceChange
            percentage={
              params.change_percentage
                ? parseFloat(params.change_percentage)
                : 0
            }
          />
        </View>
      </View>

      {/* HERERER  */}
      {/* <View
        style={{
          paddingVertical: 20,
          marginTop: 20,
          paddingBottom: 50,
          borderRadius: 20,
          paddingLeft: 20,
          overflow: "hidden",
          backgroundColor: "#1C1C1C",
        }}
      >
        <LineChart
          areaChart
          data={ptData}
          rotateLabel
          width={250}
          hideDataPoints
          spacing={10}
          color="#00ff83"
          thickness={2}
          startFillColor="rgba(20,105,81,0.3)"
          endFillColor="rgba(20,85,81,0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
          noOfSections={6}
          maxValue={600}
          yAxisColor="white"
          yAxisThickness={0}
          rulesType="solid"
          rulesColor="gray"
          yAxisTextStyle={{ color: "gray" }}
          xAxisColor="lightgray"
          pointerConfig={{
            pointerStripHeight: 160,

            pointerStripColor: "lightgray",

            pointerStripWidth: 2,

            pointerColor: "lightgray",

            radius: 6,

            pointerLabelWidth: 100,

            pointerLabelHeight: 90,

            activatePointersOnLongPress: true,

            autoAdjustPointerLabelPosition: false,
          }}
        />
      </View> */}
      <Chart ticker={stock.Symbol} />

      <View
        style={{
          marginTop: 20,
          marginLeft: 10,
          borderWidth: 1,
          borderColor: currentTheme.background,
          // borderColor: "white",
          padding: 4,
          paddingLeft: 10,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <Text variant="titleLarge" style={{ fontWeight: "700" }}>
          About {stock.Name}
        </Text>
      </View>
      <View
        style={{
          marginLeft: 10,
          borderWidth: 1,
          borderColor: currentTheme.background,
          borderTopWidth: 0,
          padding: 4,
          paddingLeft: 10,
        }}
      >
        <Text variant="bodyMedium">{stock.Description}</Text>

        <View
          style={{
            width: "100%",
          }}
        >
          <View>
            <Text>Industry : {stock.Industry}</Text>
          </View>
          <View>
            <Text>
              Sector {"   "}: {stock.Sector}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <DetailBlock
            label={"52-Week-Low"}
            value={"$ " + stock["52WeekLow"]}
          />
          <View
            style={{
              borderWidth: 1,
              height: 1,
              flex: 1,
              marginHorizontal: 10,
            }}
          ></View>
          <DetailBlock
            label={"52-Week-High"}
            value={"$ " + stock["52WeekHigh"]}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            // gap: 5,
          }}
        >
          <DetailBlock
            label={"Market Cap"}
            value={
              stock.MarketCapitalization !== "None"
                ? "$ " + stock.MarketCapitalization
                : "-"
            }
          />
          <DetailBlock label={"P/E Ratio"} value={stock.PERatio} />
          <DetailBlock label={"Beta"} value={stock.Beta} />
          <DetailBlock label={"Dividend Yeild"} value={stock.DividendYield} />
          <DetailBlock label={"Profit Margin"} value={stock.ProfitMargin} />
        </View>
      </View>
    </View>
  );
}
