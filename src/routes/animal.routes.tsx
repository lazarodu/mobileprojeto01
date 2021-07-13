import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Animal, Castra } from "../pages";

const Stack = createStackNavigator();

export default function AnimalRoute() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animal" component={Animal} />
      <Stack.Screen name="Castra" component={Castra} />
    </Stack.Navigator>
  );
}
