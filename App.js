import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from './screens/HomeScreen';
import OptionsScreen from './screens/OptionsScreen';
import ParameterScreen from './screens/ParemeterScreen';
import CustomHeaderScreen from './screens/CustomHeaderScreen';
import ButtonInHeaderScreen from './screens/ButtonInHeaderScreen';
import DrawerScreen from './screens/DrawerScreen';

import FirstTab from './screens/FirstTab';
import SecondTab from './screens/SecondTab';

const StackNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Options: { screen: OptionsScreen },
  Parameters: { screen: ParameterScreen },
  CustomHeader: { screen: CustomHeaderScreen },
  ButtonInHeader: { screen: ButtonInHeaderScreen },
}, {
  initialRouteName: 'Home',
});

const TabNavigator = createBottomTabNavigator({
  FirstTab,
  SecondTab,
});

const DrawerNavigator = createDrawerNavigator({
  FirstDrawer: { screen: DrawerScreen, params: { content: 'First Drawer' } },
  SecondDrawer:  { screen: DrawerScreen, params: { content: 'Second Drawer' } },
});

const AppNavigator = createSwitchNavigator({
  Stack: StackNavigator,
  Tab: TabNavigator,
  Drawer: DrawerNavigator,
}, {
  initialRouteName: 'Stack',
})

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
