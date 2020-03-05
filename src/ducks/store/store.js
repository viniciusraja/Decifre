import {createStore, combineReducers} from 'redux'
import playerReducer from '../reducers/playerReducer'
import teamAReducer from '../reducers/teamAReducer'

const rootReducer= combineReducers({
    playerReducer,
    teamAReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore;
