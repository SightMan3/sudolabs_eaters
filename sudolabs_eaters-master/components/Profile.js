import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Dimensions,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

// sytles
import styles from "../styles/Profile_css"

export default function Profile(props) {

    const [ isOrdering, setOrdererState ] = React.useState(true);

    const { width, height } = Dimensions.get("window");

    const { name, photo }= props.route.params

    const navigation = props.navigation;

    let eatingTime = 0;
    let orders = 0.0;

    let orderer = "Lucifer Tortelini"

  return (
    <SafeAreaView style={{
        backgroundColor: '#222222',
        alignItems: "center",
        justifyContent: "center",
        width: width,
        height: height,
        flexDirection: "column"
    }}>
      <View style={styles.profile_thingies}>
        <Image 
          style={styles.icon}
          source={{
            uri: photo
          }}
        />
        <Text style={{ 
          fontSize: 18, 
          padding: "2%",
          color: "#ff985A",
          paddingBottom: "8%"
        }}>{name}</Text>
      </View>

      <View style={{
        backgroundColor: "white",
        width: "75%",
        height: 1,
        marginBottom: "3%"
      }}></View>

      <View style={styles.stats}>
        <View style={styles.eating} >
          <Image 
            style={styles.time_icon}
            source={require("../assets/time.png")}
          />
          <Text style={{color:"white", padding: "5%"}}>
            {eatingTime}    average eating time
          </Text>
        </View>
        <View style={styles.orders}>
          <Image 
            style={styles.order_icon}
            source={require("../assets/orders.png")}
          />
          <Text style={{color:"white", padding: "5%"}}>
            {orders}    number of orders
          </Text>
        </View>
      </View>

      <View style={{
        marginTop: "5%",
        backgroundColor: "white",
        width: "75%",
        height: 1
      }}></View>

      <View style={styles.about_todays_order}>
        <Text style={styles.title}>
          Today is ordering
        </Text>
        <Text style={styles.orderer}>
          {orderer}
        </Text>
      </View>
      <TouchableNativeFeedback onPress ={() =>{ navigation.navigate("Summary")}}>
        <View style={styles.summary}>
          <Text style={{color: "white"}}>
            see summary
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress ={() =>{ 
        console.log("Press"); 
        navigation.navigate("VotingScreen", {
          name: name
        })
      }}>
        <View style={styles.startVoting}>
          <Text style={{color: "white"}}>
            start voting
          </Text>
        </View>
      </TouchableNativeFeedback>


    </SafeAreaView>
  );
}


