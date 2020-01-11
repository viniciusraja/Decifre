import React from 'react';

import {StatusBar} from 'react-native';

import Router from './navigation/navigations'


const App = () =>{
    return(
        <>
        <StatusBar hidden={true}/>
        <Router/>
        
         </>
    )
}

  

export default App;
