import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginRoutes from "./login.route";

export default function Routes() {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  );
}
