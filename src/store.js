import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';
const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);

export default store
