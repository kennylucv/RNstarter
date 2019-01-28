import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect, Provider } from "react-redux";
import configStore from "./config/store";
import { actions } from "./actions/actions";
import Navigator from "./config/routes";

class App extends Component<Props> {
  componentDidMount() {
    this.props.testAction();
  }

  render() {
    console.log(this.props.state);
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
  { ...actions }
)(App);

export default () => {
  const { store } = configStore();

  return (
    <Provider store={store}>
      <AppWithRedux />
    </Provider>
  );
};
