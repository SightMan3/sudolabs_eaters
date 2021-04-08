import React from "react";
import {
  View, 
  Text, 
  StyleSheet,
  StatusBar, 
  Dimensions 
} from "react-native";

const { width, height } = Dimensions.get("window");

function DateHeader(props) {
  let heading = props.heading;

  let dayState = "";

  let date = new Date;
  let day = date.getDay();
  let dayNum = date.getDate();

  if (day == 1) {
    dayState = "monday";
  } else if (day == 2) {
    dayState = "tuesday";
  } else if (day == 3) {
    dayState = "wednesday"
  } else if (day == 4) {
    dayState = "thursday"
  } else if (day == 5) {
    dayState = "friday"
  } else if (day == 6) {
    dayState = "saturday"
  }

  return (
    <View style={styles.container}>
      <Text style={styles.dateNum}>{dayNum}</Text>
      <Text style={styles.day}>{dayState}</Text>
      <Text style={styles.day}>{heading}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "15%",
    backgroundColor: "#FF985A",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    borderRadius: 15
    
  },
  dateNum: {
    fontSize: 30,
    color: "#fff",
    marginLeft: "5%"
  },
  day: {
    fontSize: 25,
    color: "#fff",
    flex: 1,
    marginLeft:20,
  },
});
export default DateHeader;
