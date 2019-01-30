import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import Article from "../screens/ArticleView";

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Article: {
      screen: Article
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(RootNavigator);
