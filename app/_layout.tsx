import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import { PaperProvider, TextInput } from "react-native-paper";
import { darkTheme, lightTheme } from "@/theme";
import { View } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      {/* <ThemeProvider value={DarkTheme}> */}
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="search"
            options={{
              header: () => (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginLeft: "auto",
                    paddingHorizontal: 20,
                    paddingTop: 50,
                    backgroundColor: "black",
                  }}
                >
                  <Ionicons
                    name="arrow-back"
                    size={30}
                    color={colorScheme === "dark" ? "white" : "black"}
                    onPress={() => router.back()}
                  />
                  <TextInput
                    autoFocus
                    mode="outlined"
                    placeholder="Search Stocks...."
                    right={<TextInput.Icon icon={"magnify"} />}
                    style={{ width: "90%" }}
                    outlineColor="transparent"
                    activeOutlineColor="transparent"
                    dense
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen name="[ticker]" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </PaperProvider>
  );
}
