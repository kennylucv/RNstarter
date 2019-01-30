import { Text, View, TouchableOpacity, StatusBar } from "react-native";
import styled from "styled-components";

export const HeaderText = styled.Text`
  font-size: 16px;
  color: #eeeeee;
  font-weight: bold;
`;

export const SubHeaderText = styled.Text`
  font-size: 14px;
  color: #dddddd;
`;

export const CenteredHeader = styled(HeaderText)`
  text-align: center;
`;

export const CenteredSubHeader = styled(SubHeaderText)`
  text-align: center;
`;
