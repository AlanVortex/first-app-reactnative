import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../../modules/auth/screens/Login";
import CreateAccount from "../../modules/auth/screens/CreateAccount";
import { Icon } from "@rneui/base"; 
const Tab = createBottomTabNavigator();

function getTabBarIcon(route, active) {
    let iconName = '';
    switch (route.name) {
        case 'Login':
            iconName = active ? 'login' : 'login';
            break;
        case 'CreateAccount':
            iconName = active ? 'person' : 'person-outline';
            break;
        default:
            iconName = active ? 'help-circle' : 'help-circle-outline';
    }
    return {
        iconName,
        type: 'material-community'
    };
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#029575',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderTopWidth: 0,
                        elevation: 0,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        const { iconName } = getTabBarIcon(route, focused);
                        return <Icon name={iconName} size={size} color={color} />;
                    }
                })}
            >
                <Tab.Screen 
                    name="Login"
                    component={Login}
                    options={{title:'Iniciar sesión'}}
                />
                <Tab.Screen 
                    name="CreateAccount"
                    component={CreateAccount}
                    options={{title:'Crear cuenta'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}