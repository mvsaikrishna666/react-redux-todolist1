import {createStore} from 'redux'
import todos from '../Redux/Reducers/Reducers'
import {combineReducers} from 'redux'

const rootReducer=combineReducers({todos,})
const store =createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;