import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import Item from "./Item";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "5869sasf-3da1-471f-bd96-145571e29d72",
    title: "Fourth Item",
  },
];

export default class WhereToEatScreen extends React.Component {
  constructor(props) {
    //<get restaurants>
    super(props);
  }

  generateIds() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +S4() +"-" +S4() +"-" +S4() +"-" +S4() +"-" +S4() +S4() +S4()
    );
  }

  state = {
    loading: false,
    data: DATA,
    error: null,
    selectedId: null,
    search: "",
  };
  filterItem = (query, element) => {
    if (element.title.toLowerCase().includes(query.toLowerCase())) {
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
    DATA.forEach((element) => {
      let contains = this.filterItem(formattedQuery, element);
      console.log("checking " + formattedQuery + " with " + element.title);

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

  renderItem = ({ item }) => {
    const backgroundColor =
      item.id === this.state.selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === this.state.selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => this.setState({ selectedId: item.id })}
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
