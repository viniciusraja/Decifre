import {createStore, combineReducers} from 'redux'
import playerReducer from '../reducers/playerReducer'

const rootReducer= combineReducers({
    playerReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore;
