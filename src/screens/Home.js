import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect, Provider } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
