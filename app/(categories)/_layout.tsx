import React from "react";
import { Stack } from "expo-router";
import { useAppContext } from "../../context/AppContext";
import { colors } from "@/constants/colors";
import { View } from "react-native";

const _layout = () => {
  const { darkMode } = useAppContext();
  return (
    <View style={{ backgroundColor: darkMode ? "black" : "white", flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: true,
          animation: "simple_push",
          navigationBarColor: darkMode ? "black" : "white",
          headerStyle: {
            backgroundColor: darkMode ? "black" : "white",
          },
          headerTitleStyle: {
            color: darkMode ? "white" : colors.accent,
          },
          headerTintColor: darkMode ? "white" : colors.accent,
        }}
      >
        <Stack.Screen
          name="CategoriesScreen"
          options={{
            headerShown: false,
            title: "Categories",
          }}
        />
      </Stack>
    </View>
  );
};

export default _layout;
