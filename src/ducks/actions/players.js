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
        players
    };
}