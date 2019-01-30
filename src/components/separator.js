import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  component: {
    height: 1,
    backgroundColor: "#000000"
  }
});

const Separator = () => {
  return <View style={styles.component} />;
};

export default Separator;
