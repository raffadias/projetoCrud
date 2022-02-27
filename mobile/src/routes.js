import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator();

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Profile" component={Profile}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}