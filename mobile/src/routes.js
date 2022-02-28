import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';

const AppStack = createNativeStackNavigator();

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import EditProfile from './pages/Profile/EditProfile';
import RegisterForm from './pages/Register/RegisterForm';
import { Icon } from 'react-native-elements';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
            >
                <AppStack.Screen
                name="Home" 
                component={Home}
                options={({ navigation }) => {
                    return {
                        headerRight: () => (
                            <Button
                            onPress={() => navigation.navigate("RegisterForm")}
                            type="clear"
                            color="#121113"
                            icon={<Icon name="add" size={30}/>}
                            />
                        )
                    }
                }}
                />
                <AppStack.Screen name="RegisterForm" component={RegisterForm}/>
                <AppStack.Screen name="Profile" component={Profile}/>
                <AppStack.Screen name="EditProfile" component={EditProfile}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: "#899878",
    },
    headerTintColor: '#121113',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}