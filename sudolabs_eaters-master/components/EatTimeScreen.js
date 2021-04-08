import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Dimensions
} from "react-native";
import RangeSlider, { Slider } from "react-native-range-slider-expo";

const { width, height } = Dimensions.get("window");

//import RangeSlider from 'rn-range-slider';
function EatTimeScreen(props) {
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState("00:00");
  const navigation = props.navigation;


  const numToString = (num) => {
    num += 600;
    let hours = Math.floor(num / 60);
    let minutes = (num - hours * 60) * 100;

    hours = hours.toString().length < 2 ? '0' + hours : hours;
    minutes = minutes.toString().length < 2 ?  minutes + '0'  : minutes;
    return hours + ":" + minutes.toString().substring(0, 2);
  };

  const setEatingTime = () => {
    let fromTime = numToString(fromValue);
    let toTime = numToString(toValue);
    props.getEatingTime(fromTime, toTime);
  }

  return (
    <View style={styles.base}>
      <View>
        <Text style={styles.textHeader}>When Eat</Text>
      </View>

      <View style={styles.container}>
        <View>
          <View style={styles.rangeSlider}>
            <RangeSlider
              style={styles.rangeSlider}
              showRangeLabels={false}
              showValueLabels={false}
              min={0}
              max={360}
              fromKnobColor="#FF985A"
              toKnobColor="#FF985A"
              inRangeBarColor="#fff"
              fromValueOnChange={(value) => setFromValue(value)}
              toValueOnChange={(value) => setToValue(value)}
              initialFromValue={12}
            />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textData}>from: {numToString(fromValue)}</Text>
            <Text style={styles.textData}>to: {numToString(toValue)}</Text>
          </View>
        </View>

        <TouchableNativeFeedback onPress={setEatingTime}>
          <View style={styles.setTime}>
            <Text style={{
              color: "white"
            }}>
              set Time
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      {/* <View style={styles.buttonContainer}>
      <TouchableNativeFeedback  onPress ={() =>{ console.log("Press"); navigation.navigate("WhereEat")}}>
        <View style={styles.startVoting}>
          <Text style={{color: "white",justifyContent:"center" }}>
            start voting
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View> */}

     
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#222222",
  },
  container: {
    height: 200,
    justifyContent: "center",
  },
  textData: {
    fontSize: 24,
    alignSelf: "center",
    color: "#fff",
  },
  textHeader: {
    paddingTop: 10,
    fontSize: 36,
    color: "#fff",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  button: {
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
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
  textContainer: {
    height: 50,
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "10%",
  },
  buttonContainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
  rangeSlider: {
    marginHorizontal: "10%",
  },
  setTime: {
    backgroundColor: "#ff985A",
    width: "30%",
    height: "15%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  }
});

export default EatTimeScreen;
