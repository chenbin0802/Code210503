import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home/Home';
import RestaurantDetails from './screens/Home/RestaurantDetails.js';
import NavigationService from './navigation'

const AppNavigator = createStackNavigator(
  {
      HomeScreen : Home,
      RestaurantDetails : RestaurantDetails,
  },
  {
      initialRouteName: "HomeScreen"
  }
)
const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return <AppContainer 
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
    />;
  }
}

export default App;