import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


import Header from '../components/Header'
import HomeScreen from '../screens/HomeScreen'
import CreateLobby from '../screens/CreateLobby'
import SignInLobby from '../screens/SignInLobby'
import Instructions from '../screens/Instructions'
import CreateTeams from '../screens/CreateTeams'
import Game from '../screens/Game'

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
            header:(navigation,screenprops)=><Header name="back" screen="Criar Sala"  {...navigation} {...screenprops}/>,
        },
    
    }, 
    SignInLobby:{
        screen:SignInLobby,
        navigationOptions:{
            header:(navigation,screenprops)=><Header name="back" screen="Entrar Na Sala"  {...navigation} {...screenprops}/>,
        },
    }, 
    Instructions:{
        screen:Instructions,
        navigationOptions:{
            header:(navigation,screenprops)=><Header name="back" screen="Instruções"  {...navigation} {...screenprops}/>,
        },
    }, 
    CreateTeams:{
        screen:CreateTeams,
        navigationOptions:{
            header:(navigation,screenprops)=><Header name="back" screen="Jogadores" nameIcon2="adduser" {...navigation} {...screenprops} />,
        },
    }, 
    Game:{
        screen:Game,
        navigationOptions:{
            header:(navigation,screenprops)=><Header name="back" screen="Jogadores" nameIcon2="adduser" {...navigation} {...screenprops} />,
        },
    }, 
})

export default Router= createAppContainer(AppNavigator)