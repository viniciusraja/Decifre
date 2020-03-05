import{ADD_PASSWORD_ROUND,ADD_GUESS_ANSWER,CHECK_ANSWER} from './types'


export function addPassword(round){
    return{
        type:ADD_PASSWORD_ROUND,
        round,
    }
}

export function addGuessAnswer(round){
    return{
        type:ADD_GUESS_ANSWER,
        round,
       
    }
}


export function checkAnswer(bool) {
    return {
        type: CHECK_ANSWER,
        isCorrect: bool
    };
}
export function playersHasErrored(bool) {
    return {
        type: 'PLAYERS_HAS_ERRORED',
        hasErrored: bool
    };
}export function playersIsLoading(bool) {
    return {
        type: 'PLAYERS_IS_LOADING',
        isLoading: bool
    };
}export function playersFetchDataSuccess(players) {
    return {
        type: 'PLAYERS_FETCH_DATA_SUCCESS',
        players:players,
    };
}