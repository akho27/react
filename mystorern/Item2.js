import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class Item extends React.Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Image
          style={styles.image}
          source={{ uri: "https://dummyimage.com/100X150/000/fff" }}
        />
        <View style={[styles.infoContainer]}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.addintionalInfo}>4GB RAM</Text>
          <View style={[styles.ratingContainer]}>
            <Text>4.3</Text>
            <FontAwesome
              name="star"
              size={10}
              color="white"
              style={{ marginLeft: 5 }}
            />
          </View>
          <Text style={styles.price}>1999</Text>
        </View>
        <FontAwesome name="heart-o" size={32} color="green" />
      </View>
    );
  }
}

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between"
  },
  image: {
    width: 100,
    height: 150
  },
  infoContainer: {
    flex: 8,
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 10,
    marginRight: 10,
    padding: 5
  },
  title: {
    fontSize: 16,
    color: "blue",
    fontWeight: "bold"
  },
  ratingContainer: {
    paddingLeft: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "green",
    color: "white",
    width: "auto",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black"
  }
});
