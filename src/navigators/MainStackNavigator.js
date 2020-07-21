import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from "../screens/Home/Home";
import GameOver from "../screens/GameOver/GameOver";
import Game from "../screens/Game/Game";
import Clear from "../screens/ClearGame/Clear";
import GameNavigator from "./GameNavigator";



const Stack = createStackNavigator()



export default function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Game" component={GameNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
