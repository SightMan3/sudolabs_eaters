import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import Item from "./Item";

export default class WhereToEatScreen extends React.Component {
  res = [];
  DATA = [];
  constructor(props) {
    super(props);
    const { res , getRes} = props.route.params;
    
    this.navigation = props.navigation;
    console.log(res);
    this.res = res;
    this.getRes = getRes;
  }
  componentDidMount() {
    this.fillDATA();
  }

  fillDATA() {
    this.DATA = [];
    this.res.forEach((element) => {
      this.DATA.push({ id: this.generateIds(), title: element });
    });
    console.log(this.DATA);
    this.setState({ data: this.DATA });
  }

  generateIds() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }

  state = {
    loading: false,
    data: this.DATA,
    error: null,
    selectedId: null,
    search: "",
  };
  filterItem = (query, element) => {
    if (
      element.title.toLowerCase().trim().includes(query.toLowerCase().trim())
    ) {
      return true;
    }
    return false;
  };
  updateSearch = (search) => {
    this.setState({ search: search });
  };

  handleSearch = (text) => {
    this.updateSearch(text);
    const formattedQuery = text.toLowerCase();
    let numberOfItems = 0;
    let result = [];
    this.DATA.forEach((element) => {
      let contains = this.filterItem(formattedQuery, element);
      //console.log("checking " + formattedQuery + " with " + element.title);

      if (contains) {
        result.push(element);
        numberOfItems++;
      }
    });

    if (numberOfItems === 0 && result.length === 0) {
      result.push({ id: "addNew", title: "ADD NEW REST" });
    }
    this.setState({ data: result, search: text });
  };

  sendChosenRestaurant = (restaurant) => {
    console.log("you want " + restaurant);
    this.getRes(restaurant);
    this.navigation.goBack();
  };


  renderItem = ({ item }) => {
    const backgroundColor =
      item.id === this.state.selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === this.state.selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => {
          this.setState({ selectedId: item.id });
          this.sendChosenRestaurant(item.title);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  render() {
    const { search } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.handleSearch}
          value={search}
        ></SearchBar>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          extraData={this.state.selectedId}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
