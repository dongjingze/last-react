import { combineReducers , createStore } from 'redux';
import shopList from './reducer/store.js'


const reducer = combineReducers({
    shopList
})
const store = createStore(reducer);

export default store