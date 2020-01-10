import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Header from '../components/Header'
import HomeScreen from '../screens/HomeScreen'
import CreateLobby from '../screens/CreateLobby'
import SignInLobby from '../screens/SignInLobby'
import Instructions from '../screens/Instructions'
import CreateTeams from '../screens/CreateTeams'

const AppNavigator= createStackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            headerShown: false
        },
        
    },
    CreateLobby:{
        screen:CreateLobby,
        navigationOptions:{
            title: 'Criar Sala',
        },
    }, 
    SignInLobby:{
        screen:SignInLobby,
        navigationOptions:{
            title: 'Entrar Na Sala',
        },
    }, 
    Instructions:{
        screen:Instructions,
        navigationOptions:{
            title: 'Como Jogar',
        },
    }, 
    CreateTeams:{
        screen:CreateTeams,
        navigationOptions:{
            header:(navigation,screenprops)=><Header {...navigation} {...screenprops}/>
        }
    }, 
})

export default Router= createAppContainer(AppNavigator)