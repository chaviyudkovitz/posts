import {createStore,combineReducers} from 'redux';
import userReducer from './userReducer'

const store = createStore(combineReducers({userReducer}));

window.store = store;
export default store;




