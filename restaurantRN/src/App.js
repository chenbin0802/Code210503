// React
import React, { Component } from 'react'

// Navigation
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import NavigationService from 'Navigation'

// Screens
import Restaurant from 'screens/Restaurant/Restaurant'
import RestaurantDetails from 'screens/Restaurant/RestaurantDetails'


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
