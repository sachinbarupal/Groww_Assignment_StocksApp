import { Text } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View } from "./Themed";

export function PriceChange({ percentage }: { percentage: number }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "transparent",
      }}
    >
      {percentage >= 0 ? (
        <>
          <Text variant="bodyLarge" style={{ color: "green" }}>
            +{percentage.toFixed(2)}%
          </Text>
          <MaterialIcons name="arrow-drop-up" color={"green"} size={30} />
        </>
      ) : (
        <>
          <Text variant="bodyLarge" style={{ color: "red" }}>
            {percentage.toFixed(2)}%
          </Text>
          <MaterialIcons name="arrow-drop-down" color={"red"} size={30} />
        </>
      )}
    </View>
  );
}
