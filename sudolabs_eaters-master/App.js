import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";
// import for routing/navigating
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import components for navigator
import Home from "./components/home";
import About from "./components/about";
import Loader from "./components/loader";
import Profile from "./components/Profile";
import WhereToEatScreen from "./components/WhereToEatScreen";
import EatTimeScreen from "./components/EatTimeScreen";
import VoteScreen from "./components/VoteScreen";
import Summary from "./components/Summary";

// import options for Stack.Navigator and its childs
import options from "./styles/stackScreenOpts";

const { width, height } = Dimensions.get("window");

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={options.scr_navg} initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={options.scr_scr} />
        <Stack.Screen
          name="About"
          component={About}
          options={options.scr_scr}
        />
        <Stack.Screen
          name="Loader"
          component={Loader}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={options.scr_scr}
        />
        <Stack.Screen
          name="EatTime"
          component={EatTimeScreen}
          options={options.scr_scr}
        />
        <Stack.Screen
          name="WhereEat"
          component={WhereToEatScreen}
          options={options.scr_scr}
        />
        <Stack.Screen
          name="VotingScreen"
          component={VoteScreen}
          options={options.scr_scr}
        />
        <Stack.Screen
          name="Summary"
          component={Summary}
          options={options.scr_scr}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );

  //return <Summary></Summary>;
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
