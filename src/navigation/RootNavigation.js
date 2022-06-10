import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { rootRoutes } from './routes';

const Stack = createStackNavigator();

export function renderScreen({name, component, options}){
    return (
        <Stack.Screen
         name={name}
         key={name}
         component={component}
         options={options}
        />
    );
}

const RootNavigation = () => {
    return (
        <Stack.Navigator
          initialRouteName="Main"
        >
         {
           rootRoutes.map(route => renderScreen(route))
         }
        </Stack.Navigator>
    );
}

export default RootNavigation;