import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, WebView } from "react-native";
import { connect, Provider } from "react-redux";
import Header from "../components/header";

class Article extends React.Component {
  componentDidMount() {}

  render() {
    const url = this.props.navigation.getParam("url") || "";

    return (
      <View style={{ flex: 1 }}>
        <Header back={this.props.navigation.goBack} title={url} />
        <WebView source={{ uri: url }} style={{ marginTop: 20 }} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    storiesData: state.data.loadedStories
  };
};

export default connect(
  mapStateToProps,
  null
)(Article);
