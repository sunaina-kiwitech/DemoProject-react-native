import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import DashBoard from './components/dashboard/DashBoard';
import LoginPage from './components/authentication/LoginPage';
import Navigationservice from './Navigationservice';

//screens with go back stack will go here
const Navigator  = createStackNavigator(
  {
    "Login": { screen: LoginPage },
    "Dashboard": { screen: DashBoard },
  }
);

// left drawer screens will go here
const AppDrawer = createDrawerNavigator(
  {
    "Login": {
      screen: Navigator,
    },
    "Dashboard": {
      screen: Navigator,
    },
  },
);

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppDrawer,
  },
  {
    initialRouteName: 'App'
  }
));

export default class Main extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          Navigationservice.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
