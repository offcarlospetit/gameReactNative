import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from "../screens/Home/Home";
import GameOver from "../screens/GameOver/GameOver";
import Game from "../screens/Game/Game";
import Clear from "../screens/ClearGame/Clear";


const Stack = createStackNavigator()



export default function MainStackNavigator() {
    const platform = Platform.OS
    const mode = platform === "ios" ? "modal" : "card"
    const scOptions = platform === "ios" ? {
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
        cardOverlayEnabled: true,
    } : {}
    return (
        <Stack.Navigator mode={mode} screenOptions={scOptions}>
            <Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="Clear" component={Clear} />
            <Stack.Screen name="GameOver" component={GameOver} />
        </Stack.Navigator>
    )
}
