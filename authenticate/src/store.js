import {combineReducers} from 'redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { getAllPokemonsReducer } from './reducers/pokemonReducer'
import {registerReducer} from './reducers/userReducer'
import { loginReducer } from './reducers/userReducer'
import { addPokemonReducer } from './reducers/pokemonReducer'

const finalReducer = combineReducers({
    getAllPokemonsReducer : getAllPokemonsReducer,
    registerReducer: registerReducer,
    loginReducer : loginReducer,
    addPokemonReducer : addPokemonReducer
})


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const initialState = {
    loginReducer:{
        currentUser: currentUser
    }
}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer,initialState, composeEnhancers(applyMiddleware(thunk)))

export default store