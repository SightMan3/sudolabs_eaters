import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Button, Modal } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const data = [
  { id: 1, txt: "MONDAY", isChecked: false },
  { id: 2, txt: "TUESDAY", isChecked: false },
  { id: 3, txt: "WEDNESDAY", isChecked: false },
  { id: 4, txt: "THURSDAY", isChecked: false },
  { id: 5, txt: "FRIDAY", isChecked: false },
  { id: 6, txt: "SATURDAY", isChecked: false },
  { id: 7, txt: "SUNDAY", isChecked: false },
];

export default function WhoOrdersScreen({navigation}) {
  const [products, setProducts] = useState(data);

  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };

  let selected = products.filter((product) => product.isChecked);

  const renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <View style={{ margin: 5 }}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "space-between",
                }}
              >
                <CheckBox
                  value={item.isChecked}
                  onChange={() => {
                    handleChange(item.id);
                  }}
                />
                <Text>{item.txt}</Text>
              </View>
            </View>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>CANT ORDER IN: </Text>
      <View style={{ flex: 1 }}>{renderFlatList(products)}</View>

      {/* <View style={{ flex: 1 }}>{renderFlatList(selected)}</View> */}
      <Button title="NEXT" onPress = {() =>{
          navigation.navigate("EatTime")
      }}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },

  card: {
    padding: 10,
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize:20,
    textAlign: "center",
    fontWeight: "bold",
  }, textHeader: {
    fontWeight: "bold",
    fontSize: 36,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});


