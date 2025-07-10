import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={() => <Text>Log in</Text>} options={{ title: 'Inicia sesión' }} />
                <Tab.Screen name="CreateAccount" component={() => <Text>Register</Text>} options={{ title: 'Registra una cuenta' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}