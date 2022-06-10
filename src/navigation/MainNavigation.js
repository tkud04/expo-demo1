import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { mainRoutes } from "./routes";
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

const MainNavigation = () => {
    return (
        <Stack.Navigator
          initialRouteName="Welcome"
        >
         {
           mainRoutes.map(route => renderScreen(route))
         }
        </Stack.Navigator>
    );
}

export default MainNavigation;