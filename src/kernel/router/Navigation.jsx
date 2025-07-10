import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateAccount from '../../modules/auth/screens/CreateAccount';
import Login from '../../modules/auth/screens/Login';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{ title: 'Inicia sesión' }} />
                <Tab.Screen name="CreateAccount" component={CreateAccount} options={{ title: 'Registra una cuenta' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}