import {ADD_PLAYER, DELETE_PLAYER} from '../actions/types'

const initialState={
    playersList:[
        {
          pos: 0,
          id: "1",
          playerName: "",
          color: "#300066"
        },
        {
          pos: 1,
          id: "2",
          playerName: "Viníciu",
          color: "#5900b3"
        },
        {
          pos: 2,
          id: "3",
          playerName: "",
          color: "#8c1aff"
        },
        {
          pos: 3,
          id: "4",
          playerName: "",
          color: "#b366ff"
        },
        {
          pos: 4,
          id: "5",
          playerName: "sdv",
          color: "#bb80ff"
        }
      ]
}

const playerReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_PLAYER:
            return{...state,
            playersList:{...state.playersList,
                         ...state.playersList[action.index].playersName=action.name,
            }}
        case DELETE_PLAYER:
            return{...state,
                playersList:{...state.playersList,
                             ...state.playersList[action.index].playersName="",
                }}
        default:
            return state;

        
    }
}

export default playerReducer;