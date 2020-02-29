import React from 'react';

import { StatusBar, View} from 'react-native';
import {Provider} from 'react-redux'
import configureStore from './src/ducks/store/store'
import * as Font from 'expo-font';


const store=configureStore()

import Router from './src/navigation/navigations'
class App extends React.Component{
  
        state = {
            fontLoaded: false,
          };

        async componentDidMount() {
            await Font.loadAsync({
                'orbitron-regular': require('./assets/fonts/Orbitron-Regular.ttf')
            });
        
            this.setState({ fontLoaded: true });
          }

   

    render(){
        return(
            this.state.fontLoaded? 
     <Provider store={store}>
        <StatusBar hidden />
        <Router/>
         </Provider>:<View/>
        )
    }
}

export default App;
