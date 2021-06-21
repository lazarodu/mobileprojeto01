import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimalStack from "./animal.routes";
import colors from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function HomeRoute() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.brown,
        inactiveBackgroundColor: colors.brownLight,
        activeTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Home"
        component={AnimalStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <FontAwesome5 name="dog" size={24} color={colors.white} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
