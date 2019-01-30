import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
  ScrollView
} from "react-native";
import StoryItem from "./storyItem";
import { actions } from "../actions/hackerNews";
import { connect } from "react-redux";
import { HeaderText, SubHeaderText, CenteredSubHeader } from "./fonts";

class StoryList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderStoryItem = ({ item, index }) => {
    let lastItem = false;
    if (index + 1 === this.props.loadedStories.length) {
      lastItem = true;
    }
    const { openWebView } = this.props;
    return (
      <StoryItem story={item} openWebView={openWebView} lastItem={lastItem} />
    );
  };

  onRefresh = () => {
    this.props.loadTopStories();
  };

  onScroll = e => {
    let paddingToBottom = 50;
    paddingToBottom += e.nativeEvent.layoutMeasurement.height;
    if (
      e.nativeEvent.contentOffset.y >=
      e.nativeEvent.contentSize.height - paddingToBottom
    ) {
      if (!this.props.loadingMoreStories) {
        if (this.props.storiesLoaded !== this.props.story_ids.length) {
          this.props.loadFiftyStoryItems();
        }
      }
    }
  };

  render() {
    const { data } = this.props;
    if (!data || data.length === 0) {
      return null;
    }
    return (
      <ScrollView
        scrollEventThrottle={1}
        onScroll={this.onScroll}
        style={{ paddingBottom: 50 }}
        refreshControl={
          <RefreshControl
            refreshing={this.props.topStoriesLoading}
            onRefresh={this.onRefresh}
          />
        }
      >
        <FlatList
          bounces={false}
          style={styles.list}
          data={data}
          renderItem={this.renderStoryItem}
        />
        {this.props.storiesLoaded !== this.props.story_ids.length ? (
          <View style={{ paddingBottom: 32 }}>
            <ActivityIndicator size="large" />
            <CenteredSubHeader> Loading more stories</CenteredSubHeader>
          </View>
        ) : (
          <View style={{ paddingBottom: 32 }}>
            <CenteredSubHeader> End of stories</CenteredSubHeader>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    margin: 8,
    backgroundColor: "#222222"
  }
});

const mapStateToProps = state => {
  return {
    loadedStories: state.data.loadedStories,
    storiesLoaded: state.data.storiesLoaded,
    story_ids: state.data.story_ids,
    loadingMoreStories: state.data.loadingMoreStories,
    topStoriesLoading: state.data.topStoriesLoading
  };
};

export default connect(
  mapStateToProps,
  { ...actions }
)(StoryList);
