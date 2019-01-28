import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RootNavigator);
