import{ADD_PLAYER,DELETE_PLAYER} from './types'


export function addPlayer(name,index){
    return{
        type:ADD_PLAYER,
        name:name,
        index:index,
    }
}

export function deletePlayer(index){
    return{
        type:DELETE_PLAYER,
        index:index,
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