import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgppknCFV8KqHFuk3NZ3_qJ5ClHKOAQr4",
  authDomain: "sudolabs-e08ef.firebaseapp.com",
  projectId: "sudolabs-e08ef",
  storageBucket: "sudolabs-e08ef.appspot.com",
  messagingSenderId: "186052300477",
  appId: "1:186052300477:web:ea5e990300e848f69e71d4",
  measurementId: "G-7QLGEZ18P0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// sytles
import styles from "../styles/Profile_css";

export default function Profile(props) {
  const [isOrdering, setOrdererState] = React.useState("");
  const [eat_time, setEat_time] = React.useState("");
  const [numberOfEaters, setNumberOfEaters] = React.useState(0);
  const [orderCount, setOrderCount] = React.useState(0);

  const { width, height } = Dimensions.get("window");

  const { name, photo } = props.route.params;

  const navigation = props.navigation;

  let eatingTime = 0;

  let summary_res = "";

  const handleDB = async () => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    let finalDate = `${date}-${month}-${year}`;
    const db = firebase.firestore();

    const setUser = await db.collection(name).doc("data").get();
    if (!setUser.exists) {
      db.collection(name).doc("data").set({
        orderCount: 0,
      });
    } else {
      setOrderCount(setUser.data().orderCount);
    }

    const snapshot = await db.collection("finalData").doc("data").get();
    const snap = await db.collection(finalDate).get();

    setOrdererState(snapshot.data().orderer);
    setEat_time(snapshot.data().time);
    setNumberOfEaters(snap.size);
  };

  useEffect(() => {
    handleDB();
  }, []);

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
      <View style={styles.profile_thingies}>
        <Image
          style={styles.icon}
          source={{
            uri: photo,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            padding: "2%",
            color: "#ff985A",
            paddingBottom: "8%",
          }}
        >
          {name}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          width: "75%",
          height: 1,
          marginBottom: "3%",
        }}
      ></View>

      <View style={styles.stats}>
        <View style={styles.eating}>
          <Image
            style={styles.time_icon}
            source={require("../assets/time.png")}
          />
          <Text style={{ color: "white", padding: "5%" }}>
            {eatingTime} average eating time
          </Text>
        </View>
        <View style={styles.orders}>
          <Image
            style={styles.order_icon}
            source={require("../assets/orders.png")}
          />
          <Text style={{ color: "white", padding: "5%" }}>
            {orderCount} number of orders
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: "5%",
          backgroundColor: "white",
          width: "75%",
          height: 1,
        }}
      ></View>

      <View style={styles.about_todays_order}>
        <Text style={styles.title}>Today is ordering</Text>
        <Text style={styles.orderer}>{isOrdering}</Text>
      </View>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate("Summary", {
            res: numberOfEaters,
            time: eat_time,
            name: isOrdering,
          });
        }}
      >
        <View style={styles.summary}>
          <Text style={{ color: "white" }}>see summary</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate("VotingScreen", {
            name: name,
          });
        }}
      >
        <View style={styles.startVoting}>
          <Text style={{ color: "white" }}>start voting</Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}
