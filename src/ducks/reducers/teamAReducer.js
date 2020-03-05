import {ADD_PASSWORD_ROUND, ADD_GUESS_ANSWER} from '../actions/types'

const initialState={
  teamAList:[
  
  ]
}

const teamAReducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_PASSWORD_ROUND:
          console.log(state)
          return {
            ...state,
            teamAList:[ ...state.teamAList,
                          {
                           roundNumber:action.round.roundNumber, 
                           password1:action.round.password1,
                           password2:action.round.password2,
                           password3:action.round.password3}
                        ]
          }
        case  ADD_GUESS_ANSWER:
              console.log(state)
            return{
              ...state,
              teamAList:[ ...state.teamAList,
                            {
                             roundNumber:action.round.roundNumber, 
                             guessAnswer1:action.round.guessAnswer1,
                             guessAnswer2:action.round.guessAnswer2,
                             guessAnswer3:action.round.guessAnswer3,
                            }
                          ]
            }
        default:
            return state;

        
    }
}

export default teamAReducer