import React from "react";
import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";
import DateHeader from "./DateHeader";
import Line from "./Line";

function Summary(props) {
  
  let name = "janko popoluška";
  let eaters = 22;
  let time = "12:13";
  
  return (
    <View style={styles.container}>
      <DateHeader heading={"Summary"} />

      <Text style={styles.subtitles}>Ordering</Text>
      <Text style={styles.dataText}>{props.route.params.name}</Text>

      <Line />

      <Text style={styles.subtitles}>Number Of Eaters</Text>

      <Text style={styles.dataText}>{props.route.params.res}</Text>
      <TouchableNativeFeedback>
        <View style={styles.startVoting}>
          <Text style={{ color: "#fff" }}>List</Text>
        </View>
      </TouchableNativeFeedback>

      <Line />

      <Text style={styles.subtitles}> Order Time</Text>
      <Text style={styles.dataText}>{props.route.params.time}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subtitles: {
    color: "#fff",
    fontSize: 36,
  },
  container: {
    backgroundColor: "#222222",
    justifyContent:'space-around',
    alignItems: "center",
    flex: 1,
  },
  startVoting: {
    color: "white",
    backgroundColor: "#ff985A",
    width: "40%",
    alignItems: "center",
    height: "5%",
    justifyContent: "center",
    borderRadius: 50,
  },
  dataText: {
    color: "#fff",
    fontSize: 24,
  },
});
export default Summary;