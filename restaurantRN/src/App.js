import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Restaurant from 'screens/Restaurant/Restaurant'
import RestaurantDetails from 'screens/Restaurant/RestaurantDetails'
import NavigationService from 'Navigation'

const AppNavigator = createStackNavigator(
  {
    HomeScreen: Restaurant,
    RestaurantDetails: RestaurantDetails
  },
  {
    initialRouteName: 'HomeScreen'
  }
)
const AppContainer = createAppContainer(AppNavigator)

class App extends Component {
  render () {
    return <AppContainer
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef)
    }}
    />
  }
}

export default App
