import {ADD_PLAYER, DELETE_PLAYER} from '../actions/types'

const initialState={
    playersList:[
      {
        playerName: "",
      },
      {
        playerName: "Viníciu",
      },
      {
        playerName: "juaou",
      },
      {
        playerName: "alogalera",
      },
      {
        playerName: "sdv",
      }
    ]
}

const playerReducer =(state=initialState, action)=>{
  console.log(playerReducer)
    switch(action.type){
        case 'ADD_PLAYER':
            return{...state,
            playersList:state.playersList.concat( {playerName:'ssda'})
                         
            }
        case 'DELETE_PLAYER':
            return{...state,
                playersList:{...state.playersList,
                             ...state.playersList[action.index].playersName="",
                }}
        default:
            return state;

        
    }
}

export default playerReducer;