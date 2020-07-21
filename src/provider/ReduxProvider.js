import React from 'react'
import { Provider } from 'react-redux';
import store from "../store/store";


export default ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}