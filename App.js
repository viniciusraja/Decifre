import React from 'react';

import { StatusBar} from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './src/ducks/store/store'

const store=configureStore()

import Router from './src/navigation/navigations'
const App = () =>{
    return(
        <Provider store={store}>
        <StatusBar hidden />
        <Router/>
        
         </Provider>
    )
}

export default App;
