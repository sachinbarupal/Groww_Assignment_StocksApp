import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Avatar({ text }: { text: string }) {
  return (
    <View
      style={{
        width: 70,
        height: 70,
        borderWidth: 0.5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: "gray",
      }}
    >
      <Text style={{ color: "white" }}>{text[0]}</Text>
    </View>
  );
}
