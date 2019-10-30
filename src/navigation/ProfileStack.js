// @flow

import {
  createStackNavigator,
  type NavigationState,
  type NavigationNavigator,
  type NavigationRouteConfigMap,
} from 'react-navigation';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Routes } from '@kiwicom/margarita-navigation';

import { ProfileScreen,SigninScreen } from '../screens';

type NavigationOptions = {};
type NavigationProps = {};

const StackNavigator: NavigationNavigator<
  NavigationState,
  NavigationOptions,
  NavigationProps,
> = createStackNavigator(
  ({
    [Routes.PROFILE]: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
      },
    },
    [Routes.SIGNUP]: {
      screen: SigninScreen,
      navigationOptions: {
        title: 'Sign In',
      },
    },
    
  }: NavigationRouteConfigMap),
  {
    defaultNavigationOptions: {
      headerTintColor: '#00B9FF',
    },
  },
);

export default StackNavigator;
