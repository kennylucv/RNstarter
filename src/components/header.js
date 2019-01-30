import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { CenteredHeader, CenteredSubHeader } from "./fonts";

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    height: 64,
    backgroundColor: "#333333"
  },
  title: {
    flexDirection: "row",
    height: 128,
    backgroundColor: "#333333"
  }
});

const Header = ({ title, back }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.component}>
        {back ? (
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            onPress={() => {
              back();
            }}
          >
            <CenteredSubHeader>Back</CenteredSubHeader>
          </TouchableOpacity>
        ) : (
          <View style={{ flex: 1 }} />
        )}
        <View
          style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
        >
          <CenteredHeader>{title}</CenteredHeader>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
};

export default Header;
