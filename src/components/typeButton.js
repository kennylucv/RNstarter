import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

import { CenteredHeader, CenteredSubHeader } from "./fonts";
import styled from "styled-components";

const Button = ({ onPress, title, selected }) => {
  // if not selected it button will not be highlighted and will call its onpress when pressed,
  // otherwise it will be highlighted and not call its onPress
  return (
    <Container onPress={selected ? () => {} : onPress}>
      {selected ? (
        <CenteredHeader> {title}</CenteredHeader>
      ) : (
        <CenteredSubHeader> {title}</CenteredSubHeader>
      )}
    </Container>
  );
};

export const Container = styled.TouchableOpacity`
  padding: 4px;
  flex: 1;
`;

export default Button;
