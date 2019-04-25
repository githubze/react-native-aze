/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {DrawerNavigator,TabNavigator,StackNavigator} from 'react-navigation';
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from './Component/HomePage/Home';
import DetailScreen from './Component/HomePage/DetailScreen';
import Mine from './Component/MinePage/Mine';

export const Stack = createStackNavigator(
    {
      Home: { screen: HomeScreen },
      Details: { screen: DetailScreen },
    },
);

export const Stack1 = createStackNavigator(
    {
      Home: { screen: Mine },
    },
    {
       headerMode:'screen',
        navigationOptions: {
         headerStyle: {
            backgroundColor: '#000000',
         },
        }
    },
);

export const Tabs = createBottomTabNavigator(
    {
  TabA: {
    screen: Stack,
    navigationOptions: {
      tabBarLabel: '任务',
      tabBarIcon: ({tintColor, focused}) => {
        if(focused){
          return <Image source={require('./Images/HomeImage1.png')} style={styles.imageStyle} />;
        } else {
          return <Image source={ require('./Images/HomeImage0.png')} style={styles.imageStyle}/>;
        }
      },
    },
  },
  TabB: {
    screen: Stack1,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => {
        if(focused){
          return <Image source={require('./Images/MineImage1.png')} style={styles.imageStyle} />;
        } else {
          return <Image source={ require('./Images/MineImage0.png')} style={styles.imageStyle}/>;
        }
      },
    },
    }
  },
    {
      order: ['TabA', 'TabB'],
      tabBarOptions:{
        labelStyle: {
          fontSize: 11,
          bottom:4
        },
        style: {
          backgroundColor: 'white',
        },
        activeTintColor:'#EA7B00',
        inactiveTintColor:'#D1D1D1',
        showIcon:true,

      },

    },

)

export const RootStack = createAppContainer(
    createDrawerNavigator({
      // Stack: { screen: Stack },
      Tabs: { screen: Tabs },
    })
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  imageStyle:{
    width:20,
    height:20,
  },

});