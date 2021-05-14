import React, { Component } from 'react';
import Home from './HomeComponent';
import Business from "./BusinessComponent";
import Personal from './PersonalComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Business: { screen: Business },
        Personal: { screen: Personal }
    },
 
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Personal: { screen: Personal },
        Business: { screen: Business},
        
    },
    {
        drawerBackgroundColor: '#ADD8E6'
    }
)

const AppNavigator = createAppContainer(MainNavigator)

class Main extends Component { 
    
    render() {
        return (
            <View style={{flex: 1, 
                          paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}> 
                <AppNavigator /> 
            </View> 
        )
    }
}

export default Main;