import React from "react";
// import for routing/navigating
import { View,Dimensions,StyleSheet, Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WhoOrdersScreen from "./WhoOrdersScreen";
import EatTimeScreen from "./EatTimeScreen";
import WhereToEatScreen from "./WhereToEatScreen";

import options from "./ScreenOptions";

const { width, height } = Dimensions.get("window");

export default function ThreeQuestions(props) {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="EatTime">
        <Stack.Screen 
          name="WhoOrders" 
          component={WhoOrdersScreen}
        />
        <Stack.Screen 
          name="WhereToEat" 
          component={WhereToEatScreen}
          options={options.scr_scr} />
        <Stack.Screen 
          name="EatTime" 
          component={EatTimeScreen}
          options={options.scr_scr} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: height,
  },
});
