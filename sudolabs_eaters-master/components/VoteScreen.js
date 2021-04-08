import React, { Component, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  TouchableNativeFeedback,
  LogBox
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import * as firebase from "firebase"
import "firebase/firestore"

// components
import EatTimeScreen from "./EatTimeScreen";
import WhoOrdersScreen from "./WhoOrdersScreen";
import DateHeader from "./DateHeader";
import Line from "./Line";

const firebaseConfig = {
  apiKey: "AIzaSyCgppknCFV8KqHFuk3NZ3_qJ5ClHKOAQr4",
  authDomain: "sudolabs-e08ef.firebaseapp.com",
  projectId: "sudolabs-e08ef",
  storageBucket: "sudolabs-e08ef.appspot.com",
  messagingSenderId: "186052300477",
  appId: "1:186052300477:web:ea5e990300e848f69e71d4",
  measurementId: "G-7QLGEZ18P0"
};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app();
}

LogBox.ignoreLogs(["Setting a timer for a long period of time"])


function VoteScreen(props) {
  const [eat, setEatState] = useState(false);

  const db = firebase.firestore();

  let fromTime = "";
  let toTime = "";

  const getEatingTime = (timeFrom, timeTo) => {
    fromTime = timeFrom;
    toTime = timeTo;
    console.log(fromTime + " " + toTime);
  }

  const _sendData = async () => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    let finalDate = `${date}-${month}-${year}`

    db.collection(finalDate)
    .doc(props.route.params.name)
    .set({
      fromTime: fromTime,
      toTime: toTime,
      isEating: eat ? "true" : "false",
      restaurant: "bistro mango"
    })

    // const users = await db.collection("daco").doc("haha")

    // users.get().then((doc) => {
    //   if (doc.exists) {
    //     console.log(doc.data());
    //   } else {
    //     console.log("No such document");
    //   }
    // }).catch((err) => {
    //   console.log(err)
    // })

      
  }

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: "#222222" }}>
      <ScrollView>
        <View style={{ height: "60%" }}>
          <DateHeader heading={'Vote'} />

          <View style={styles.container}>
            <Text style={styles.textHeader}>Eating License</Text>
            <View style={styles.card}>
              <CheckBox
                tintColors={{ true: "#ff985A", false: "#fff" }}
                style={{
                  transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
                  fillColor: "#fff",
                }}
                disabled={false}
                value={eat}
                onValueChange={(newValue) => setEatState(newValue)}
              />

              <Text
                style={{ 
                  paddingHorizontal: "5%", 
                  fontSize: 24, 
                  color: "#fff",
                  marginBottom: "5%" 
                }}
              >
                I will eat
              </Text>
            </View>
          </View>

          <Line />

          <EatTimeScreen getEatingTime={getEatingTime}/>


        </View>


      </ScrollView>

      <TouchableNativeFeedback onPress={_sendData}>
        <View style={styles.temp_send_data}>
          <Text style={{color: "white"}}>
            send data
          </Text>
        </View>
      </TouchableNativeFeedback>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#222222",
  },

  card: {
    padding: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  textHeader: {
    fontSize: 36,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    color: "#fff",
  },
  temp_send_data: {
    color: "white",
    backgroundColor: "#ff985A",
    width: "40%",
    alignItems: "center",
    height: "6%",
    justifyContent: "center",
    borderRadius: 50,
  }
});
export default VoteScreen;
