import { ADD_PASSWORD_ROUND, ADD_GUESS_ANSWER, TRY_INTERCEPT_ENEMY } from "../actions/types";

const initialState = {
  teamA: [
      {
        roundNumber:1,
        passwords:{},
        answers:{},
        interceptTeamBCode:{},
      },
      {
        roundNumber:2,
        passwords:{},
        answers:{},
        interceptTeamBCode:{},
      },
      {
        roundNumber:3,
        passwords:{},
        answers:{},
        interceptTeamBCode:{},
      },
      {
        roundNumber:4,
        passwords:{},
        answers:{},
        interceptTeamBCode:{},
      },
      {
        roundNumber:5,
        passwords:{},
        answers:{},
        interceptTeamBCode:{},
      },
      {
        roundNumber:6,
        passwords:{},
        answers:{},
        interceptTeamBCode:{},
      },
      {
        roundNumber:7,
        passwords:{},
        answers:{},
        interceptTeamBCode:{},
      },
      {
        roundNumber:8,
        passwords:{},
        answers:{},
        interceptTeamBCode:{},
      },
  ],
};

const teamAReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PASSWORD_ROUND:
      console.log(state);
      return {
        ...state,
        teamA: [
          ...state.teamA.map((item, index) => {
            if (item.roundNumber!== action.round.roundNumber) {
              // This isn't the item we care about - keep it as-is
               console.log(item.roundNumber)
              return item;
            }
            // Otherwise, this is the one we want - return an updated value
            return {  
              ...item,     
              passwords:{
                password1:{codeId:action.round.codeId1,password:action.round.password1},
                password2:{codeId:action.round.codeId2,password:action.round.password2},
                password:{codeId:action.round.codeId,password:action.round.password},
              }
            }
          })
        ]
      };
    case ADD_GUESS_ANSWER:
      console.log(state)
      
      return {
        ...state,
        teamA: [
            ...state.teamA.map((item, index) => {
            if (item.roundNumber!== action.round.roundNumber) {
              // This isn't the item we care about - keep it as-is
              return item;
            }
            // Otherwise, this is the one we want - return an updated value
            return { 
                ...item,
              answers:{
                guessAnswer1:action.round.guessAnswer1,
                guessAnswer2:action.round.guessAnswer2,
                guessAnswer3:action.round.guessAnswer3
              }
            }
          })
        ]
      };
    case TRY_INTERCEPT_ENEMY:
      console.log(action.round)
      
      return {
        ...state,
       
      };
    default:
      return state;
  }
};

export default teamAReducer;
