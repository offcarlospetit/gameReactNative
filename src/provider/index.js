import React from 'react'
import MainStackNavigator from '../navigators/MainStackNavigator';
import ReduxProvider from "./ReduxProvider";


export default function Provider() {
    return (
        <ReduxProvider>
            <MainStackNavigator />
        </ReduxProvider>
    );
}
