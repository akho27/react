import React from "react";
import { View, Text } from "react-native";

// Functional component
const Detail = props => (
  <View>
    <Text>Detail for item {props.navigation.getParam("id", "N/A")}</Text>
  </View>
);

Detail.navigationOptions = ({ navigation }) => ({
  title: `Item ${navigation.getParam("id")}`,
  headerStyle: {
    backgroundColor: "red"
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 24
  }
});

export default Detail;
