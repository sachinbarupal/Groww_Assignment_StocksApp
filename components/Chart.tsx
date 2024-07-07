import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
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

export default function Chart({ ticker }: { ticker: string }) {
  const [index, setIndex] = useState<number>(0);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, [index, ticker]);

  const fetchData = async () => {
    // const res = await fetch(
    //   "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" +
    //     ticker +
    //     "&apikey=OHEFTTH4A7JWLUNR"
    // );
    // const data = await res.json();
    // console.log(data["Time Series (Daily)"]);
    // const tmp_data: any[] = [];
    // Object.entries(data["Time Series (Daily)"]).map((entry) => {
    //   let key = entry[0];
    //   let value: any = entry[1];

    //   tmp_data.push({
    //     value: parseFloat(value["4. close"]),
    //     date: key,
    //   });
    //   //   console.log(key, value);
    // });
    // console.log(tmp_data);
    setData(ptData);
  };

  const changeIndex = (idx: number) => {
    if (index === idx) return;
    setIndex(idx);
  };

  return (
    <View>
      <View
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
          data={data}
          rotateLabel
          width={250}
          hideDataPoints
          color="#00ff83"
          thickness={2}
          startFillColor="rgba(20,105,81,0.3)"
          endFillColor="rgba(20,85,81,0.01)"
          startOpacity={0.9}
          endOpacity={0.2}
          initialSpacing={0}
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
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "auto",
            justifyContent: "center",
            gap: 10,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 20,
            padding: 5,
          }}
        >
          <Pressable onPress={() => changeIndex(0)}>
            <Text
              style={[
                styles.text,
                { backgroundColor: index === 0 ? "orange" : "transparent" },
              ]}
            >
              1 D
            </Text>
          </Pressable>
          <Pressable onPress={() => changeIndex(1)}>
            <Text
              style={[
                styles.text,
                { backgroundColor: index === 1 ? "orange" : "transparent" },
              ]}
            >
              1 W
            </Text>
          </Pressable>
          <Pressable onPress={() => changeIndex(2)}>
            <Text
              style={[
                styles.text,
                { backgroundColor: index === 2 ? "orange" : "transparent" },
              ]}
            >
              1 M
            </Text>
          </Pressable>
          <Pressable onPress={() => changeIndex(3)}>
            <Text
              style={[
                styles.text,
                { backgroundColor: index === 3 ? "orange" : "transparent" },
              ]}
            >
              6 M
            </Text>
          </Pressable>
          <Pressable onPress={() => changeIndex(4)}>
            <Text
              style={[
                styles.text,
                { backgroundColor: index === 4 ? "orange" : "transparent" },
              ]}
            >
              1 Y
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    borderRadius: 50,
    padding: 5,
    fontWeight: "700",
  },
});
