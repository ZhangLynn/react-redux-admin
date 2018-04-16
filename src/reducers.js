// import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import {reducer as todoReducer} from './components/todos';
import {reducer as filterReducer} from './components/filter';

export default combineReducers({
    todos: todoReducer,
    filter: filterReducer
});