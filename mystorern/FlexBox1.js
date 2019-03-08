import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap:"wrap",
    backgroundColor: "grey",
    flexDirection: "row" // column by default
  },

  dimension: {
    width: 150,
    height: 80
  },

  box1: {
    backgroundColor: "red"
  },
  box2: {
    backgroundColor: "yellow"
  },
  box3: {
    backgroundColor: "blue"
  },
  box4: {
    backgroundColor: "teal"
  },
  box5: {
    backgroundColor: "cyan"
  }
});

class FlexBox1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.dimension, styles.box1]} />
        <View style={[styles.dimension, styles.box2]} />
        <View style={[styles.dimension, styles.box3]} />
        <View style={[styles.dimension, styles.box4]} />
        <View style={[styles.dimension, styles.box5]} />
      </View>
    );
  }
}

export default FlexBox1;
