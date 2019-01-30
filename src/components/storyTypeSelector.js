import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ActivityIndicator
} from "react-native";
import Separator from "./separator";
import { HeaderText, SubHeaderText, CenteredSubHeader } from "./fonts";
import { RowContainer } from "./genericComponents";
import styled from "styled-components";
import TypeButton from "./typeButton";
import { connect } from "react-redux";
import { actions } from "../actions/hackerNews";
import { STORY_TYPES } from "../utils/enums";

class TypeSelector extends React.Component {
  render() {
    const { storyType } = this.props;
    return (
      <View>
        <RowContainer>
          <TypeButton
            title={"Top"}
            selected={storyType === STORY_TYPES.TOP}
            onPress={() => {
              this.props.changeStoryType(STORY_TYPES.TOP);
            }}
          />
          <TypeButton
            title={"New"}
            selected={storyType === STORY_TYPES.NEW}
            onPress={() => {
              this.props.changeStoryType(STORY_TYPES.NEW);
            }}
          />
          <TypeButton
            title={"Best"}
            selected={storyType === STORY_TYPES.BEST}
            onPress={() => {
              this.props.changeStoryType(STORY_TYPES.BEST);
            }}
          />
        </RowContainer>
        <Separator />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    storyType: state.data.storyType
  };
};

export default connect(
  mapStateToProps,
  { ...actions }
)(TypeSelector);
