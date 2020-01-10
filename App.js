import React from 'react';

import { StatusBar,} from 'react-native';

import Router from './src/navigation/navigations'
const App = () =>{
    return(
        <>
        <StatusBar hidden />
        <Router/>
        
         </>
    )
}

export default App;
