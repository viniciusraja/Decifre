import{ADD_PLAYER,DELETE_PLAYER} from './types'


export function addPlayer( player){
    return{
        type:'ADD_PLAYER',
        player,
    }
}

export function deletePlayer(player){
    return{
        type:'DELETE_PLAYER',
        player,
       
    }
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