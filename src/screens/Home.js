import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { actions } from "../actions/hackerNews";
import StoryList from "../components/storiesList";
import TypeSelector from "../components/storyTypeSelector";
import Header from "../components/header";
import { CenteredSubHeader } from "../components/fonts";

class Home extends React.Component {
  componentDidMount() {
    this.props.loadTopStories();
  }

  openWebView = url => {
    this.props.navigation.navigate("Article", {
      url: url
    });
  };

  render() {
    const { topStoriesLoading, loadingMoreStories, storiesData } = this.props;

    return (
      <View style={styles.screen}>
        <Header title={"Hacker News"} />
        <TypeSelector />

        {// show loader if data is loading
        topStoriesLoading && loadingMoreStories ? (
          <View style={{ marginTop: 32 }}>
            <ActivityIndicator size="large" />
            <CenteredSubHeader> Fetching stories </CenteredSubHeader>
          </View>
        ) : (
          <StoryList data={storiesData} openWebView={this.openWebView} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#222222"
  }
});

const mapStateToProps = state => {
  return {
    topStoriesLoading: state.data.topStoriesLoading,
    loadingMoreStories: state.data.loadingMoreStories,
    storiesData: state.data.loadedStories
  };
};

export default connect(
  mapStateToProps,
  { ...actions }
)(Home);
