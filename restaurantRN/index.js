import { registerRootComponent } from 'expo';

import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";

import App from './src/App';
import { name as appName } from "./app.json";
import configureStore from "./src/store/configureStore";

const store = configureStore();
const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RNRedux);
