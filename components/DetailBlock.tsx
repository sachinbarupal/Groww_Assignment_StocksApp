import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function DetailBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View>
      <Text variant="bodySmall">{label}</Text>
      <Text style={{ textAlign: "center" }}>{value}</Text>
    </View>
  );
}
