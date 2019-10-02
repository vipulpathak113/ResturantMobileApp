import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },

  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }
);

export default createAppContainer(navigator);
