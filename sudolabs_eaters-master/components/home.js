import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import * as Google from "expo-google-app-auth";

import styles from "../styles/home_css";
import { TextInput } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const [isLoading, setLoadingState] = React.useState(false);

  const { width, height } = Dimensions.get("window");

  const [text, onChangeText] = React.useState("Name");


    let state = {
    name: "",
    photoUrl: "",
    isSigned: false,
  };

  const signIn = async () => {
    // navigation.navigate("Loader");
    // try {
    //   const result = await Google.logInAsync({
    //     androidClientId:
    //       "270904747305-p3ufg9mekflt2cu0frs3og8g2r7ha0os.apps.googleusercontent.com",
    //     scopes: ["profile", "email"],
    //   });
    //   if (result.type === "success") {
    //     state = {
    //       name: result.user.name,
    //       photoUrl: result.user.photoUrl,
    //       isSigned: true,
    //     };
    //     navigation.navigate("Profile", {
    //       name: state.name,
    //       photo: state.photoUrl,
    //     });
    //   }
    // } catch (e) {
    //   console.log("error", e);
    // }
          navigation.navigate("Profile", {
          name: text,
          photo: 'https://picsum.photos/200/300',
        });
  };

  return (
    <SafeAreaView style={styles.section}>
      <SafeAreaView style={styles.title}>
        <Text style={styles.title_text}>Welcome</Text>
      </SafeAreaView>
      <View style={styles.about_little}>
        <Text style={styles.about_little_text}>
          please, sign in with your {"\n"}
          Google account {"\n"}
        </Text>
      </View>
      <View style={styles.inputs}>
      

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

        <TouchableNativeFeedback onPress={() => signIn()}>
          <View style={styles.nextBTN}>
            <Text
              style={{
                color: "white",
                fontSize: 14,
              }}
            >
              Sign In
            </Text>
          </View>
        </TouchableNativeFeedback>

        <View
          style={{
            height: (height - width) / 4,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>or</Text>
        </View>

        <TouchableWithoutFeedback onPress={() => navigation.navigate("About")}>
          <View style={{ height: (height - width) / 4 }}>
            <Text
              style={{
                color: "#ff985a",
                fontSize: 18,
              }}
            >
              About
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

// {() => {
//   if (!isLoading) {
//   return (<TouchableWithoutFeedback onPress={() => signIn()}>
//   <View style={styles.nextBTN}>
//     <Text style={{
//       color: "white",
//       fontSize: 14
//     }}>Sign In With Google</Text>
//   </View>
// </TouchableWithoutFeedback>)
//   } else {
//     return (<LottieView
//     source={require("../assets/checked.json")}
//     autoPlay loop/>)
//   }
// }}
