import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect, Provider } from "react-redux";
import configStore from "./config/store";
import Navigator from "./config/routes";

class App extends Component<Props> {
  componentDidMount() {
    console.disableYellowBox = true;
  }

  render() {
    return <Navigator />;
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const AppWithRedux = connect(
  mapStateToProps,
  null
)(App);

export default () => {
  const { store } = configStore();

  return (
    <Provider store={store}>
      <AppWithRedux />
    </Provider>
  );
};
