// Navigation
import { NavigationActions } from 'react-navigation'

let _navigator

function setTopLevelNavigator (navigatorRef) {
  _navigator = navigatorRef
}

// navigate to route
function navigate (routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}

// back
function goBack () {
  _navigator.dispatch(
    NavigationActions.back()
  )
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack
}
