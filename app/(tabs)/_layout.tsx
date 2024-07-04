import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Link, router, Tabs } from "expo-router";
import { Pressable } from "react-native";
const img = "../../assets/images/download.png";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { TextInput } from "react-native-paper";
import { Image } from "expo-image";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) {
  return <MaterialIcons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: useClientOnlyValue(false, true),
        tabBarIconStyle: { display: "none" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabelStyle: {
            position: "absolute",
            bottom: 0,
            textAlignVertical: "center",
            fontSize: 20,
          },
          tabBarItemStyle: {
            borderRightWidth: 1,
            borderRightColor: "gray",
            // borderRadius: 5,
            marginTop: 10,
          },
          title: "Top Gainers",
          // tabBarIcon: ({ color }) => (
          //   // <TabBarIcon name="home" color={color} />,
          //   <Image
          //     source={require("../../assets/images/trending.png")}
          //     style={{ width: 30, height: 30 }}
          //   />
          // ),
          header: () => (
            <Pressable
              onPress={() => router.push("/search")}
              style={{ width: "100%", paddingHorizontal: 20, paddingTop: 50 }}
            >
              <TextInput
                placeholder="Search Stocks...."
                disabled
                mode="outlined"
                // left={<TextInput.Icon icon={"magnify"} />}
                onPressIn={() => router.push("/search")}
              />
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="topLosers"
        options={{
          tabBarLabelStyle: {
            position: "absolute",
            bottom: 0,
            textAlignVertical: "center",
            fontSize: 20,
          },
          tabBarItemStyle: {
            borderRightWidth: 1,
            borderRightColor: "gray",
            // borderRadius: 5,
            marginTop: 10,
          },
          title: "Top Losers",
          // tabBarIcon: ({ color }) => (
          //   // <TabBarIcon name="home" color={color} />,
          //   <Image
          //     source={require("../../assets/images/trending.png")}
          //     style={{ width: 30, height: 30 }}
          //   />
          // ),
          header: () => (
            <Pressable
              onPress={() => router.push("/search")}
              style={{ width: "100%", paddingHorizontal: 20, paddingTop: 50 }}
            >
              <TextInput
                placeholder="Search Stocks...."
                disabled
                mode="outlined"
                // left={<TextInput.Icon icon={"magnify"} />}
                onPressIn={() => router.push("/search")}
              />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
