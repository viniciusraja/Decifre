import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


import Header from '../components/Header'
import HomeScreen from '../screens/HomeScreen'
import CreateLobby from '../screens/CreateLobby'
import SignInLobby from '../screens/SignInLobby'
import Instructions from '../screens/Instructions'
import CreateTeams from '../screens/CreateTeams'
import TeamAScreen from '../screens/TeamAScreen'

const AppNavigator= createStackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            headerShown: false,
        },
    },
    CreateLobby:{
        screen:CreateLobby,
        navigationOptions:{
            header:(navigation,screenprops)=><Header name="back" screen="Jogadores" nameIcon2="adduser" {...navigation} {...screenprops} />,
        },
    
    }, 
    SignInLobby:{
        screen:SignInLobby,
        navigationOptions:{
            headerShown: false,

        },
    }, 
    Instructions:{
        screen:Instructions,
        navigationOptions:{
            headerShown: false,

        },
    }, 
    CreateTeams:{
        screen:CreateTeams,
        navigationOptions:{
            headerShown: false,
            
        },
    }, 
    TeamAScreen:{
        screen:TeamAScreen,
        navigationOptions:{
            headerShown: false,
            
        },
    }, 
})

export default Router= createAppContainer(AppNavigator)