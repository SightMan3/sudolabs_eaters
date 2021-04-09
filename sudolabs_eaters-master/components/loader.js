import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Dimensions, View } from "react-native";
import LottieView from "lottie-react-native";

export default function Loader() {
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#222222",
        alignItems: "center",
        justifyContent: "center",
        width: width,
        height: height,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: "#222222",
        }}
      >
        <LottieView
          source={require("../assets/animations/coloredballs.json")}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
}
