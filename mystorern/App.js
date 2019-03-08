import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FlexBox1 from "./FlexBox1";
import Item from "./Item";
import List from "./List";
import { Provider } from "react-redux";
import store from "./store";
import Store from "./components/Store";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Detail from "./components/Detail";

import {
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <List {...this.props} />
        </View>
      </Provider>
    );
  }
}

const HomeStackNavigator = createStackNavigator(
  {
    appHome: {
      screen: App
    },
    Detail: {
      screen: Detail
    }
  },
  {
    defaultNavigationOptions: {
      title: "myStore"
    }
  }
);

const StoreStackNavigator = createStackNavigator(
  {
    storeHome: {
      screen: Store
    }
  },
  {
    defaultNavigationOptions: {
      title: "Stores"
    }
  }
);

const RootNavigator = createBottomTabNavigator(
  {
    Home: HomeStackNavigator,
    Stores: StoreStackNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = AntDesign;
        let iconName;
        if (routeName === "Home") {
          iconName = focused ? "home" : "home-outline";
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = focused ? MaterialIcons : MaterialCommunityIcons;
        } else if (routeName === "Stores") {
          iconName = focused ? "appstore1" : "appstore-o";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(RootNavigator);

// Three styling - Inline, Object, StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: "center",
    // justifyContent: "space-around"
  },
  text: {
    color: "#fff",
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "red",
    fontSize: 70,
    fontWeight: "bold",
    fontStyle: "italic"
  }
});
