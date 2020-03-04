import {ADD_PLAYER, DELETE_PLAYER} from '../actions/types'

const initialState={
  playersList:[
  
  ]
}

const playerReducer =(state=initialState, action)=>{
    switch(action.type){
        case 'ADD_PLAYER':
          return {
            ...state,
            playersList:[ ...state.playersList,
                          {id:action.player.id,playerName:action.player.playerName},
                        ]
          }
        case 'DELETE_PLAYER':
          
            return{
              ...state,
              playersList:[ 
                 ...state.playersList.filter((item => item.playerName !== action.player.playerName))
                ]
                }
        default:
            return state;

        
    }
}

export default playerReducer;