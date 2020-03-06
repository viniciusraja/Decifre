import { ADD_PASSWORD_ROUND, ADD_GUESS_ANSWER } from "../actions/types";

const initialState = {
  teamAList: [
    {
      roundNumber: 1
    },
    {
      roundNumber: 2
    },
    {
      roundNumber: 3
    },
    {
      roundNumber: 4
    },
    {
      roundNumber: 5
    },
    {
      roundNumber: 6
    },
    {
      roundNumber: 7
    },
    {
      roundNumber: 8
    }
  ]
};

const teamAReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PASSWORD_ROUND:
      console.log(state);
      return {
        ...state,
        teamAList: [
          ...state.teamAList,
         

          /* {
                           roundNumber:action.round.roundNumber, 
                           password1:action.round.password1,
                           password2:action.round.password2,
                           password3:action.round.password3} */
        ]
      };
    case ADD_GUESS_ANSWER:
      console.log(state)
      
      return {
        ...state,
        teamAList: [
            ...state.teamAList.map((item, index) => {
            if (item.roundNumber!== action.round.roundNumber) {
              // This isn't the item we care about - keep it as-is
               console.log(item.roundNumber)
              console.log(action.round.guessAnswer1) 
              return item;
            }
            // Otherwise, this is the one we want - return an updated value
            return {       
              roundNumber:item.roundNumber,
              guessAnswer1:action.round.guessAnswer1,
              guessAnswer2:action.round.guessAnswer2,
              guessAnswer3:action.round.guessAnswer3
            }
          })
        ]
      };
    default:
      return state;
  }
};

export default teamAReducer;
