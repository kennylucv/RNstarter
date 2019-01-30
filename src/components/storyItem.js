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
import styled from "styled-components";

class StoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  expandListItem = () => {
    this.setState(prevState => {
      return {
        expanded: !prevState.expanded
      };
    });
  };

  openInBrowser = url => {
    Linking.openURL(url);
  };

  render() {
    const { story, openWebView } = this.props;
    if (!story) {
      return null;
    }
    return (
      <ListItem>
        <ContentContainer>
          <TouchableOpacity
            onPress={() => {
              this.expandListItem();
            }}
            style={styles.item}
          >
            <HeaderText> {story.title} </HeaderText>
            <SubHeaderText> by: {story.by} </SubHeaderText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebView(story.url);
            }}
            style={styles.open}
          >
            <HeaderText> > </HeaderText>
          </TouchableOpacity>
        </ContentContainer>
        {this.state.expanded ? (
          <View>
            <Separator />
            <ExpandedView>
              <CenteredSubHeader style={{ flex: 1 }}>
                {"Comments: " + story.descendants}{" "}
              </CenteredSubHeader>
              <TouchableOpacity
                onPress={() => {
                  this.openInBrowser(story.url);
                }}
                style={styles.openInBrowser}
              >
                <CenteredSubHeader> Open in browser </CenteredSubHeader>
              </TouchableOpacity>
            </ExpandedView>
          </View>
        ) : null}
        <Separator />
      </ListItem>
    );
  }
}

const ContentContainer = styled.View`
  flex-direction: row;
`;

const ExpandedView = styled.View`
  flex-direction: row;
  padding: 8px;
`;

const ListItem = styled.View`
  flex-direction: column;
`;

const styles = StyleSheet.create({
  item: {
    flex: 6,
    flexDirection: "column",
    padding: 8,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "#222222"
  },
  open: {
    flex: 1,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center"
  },
  openInBrowser: {
    flex: 1,
    backgroundColor: "#222222",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default StoryItem;
