import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axiosMiddleware from './utils/middleWare/axiosMiddleware'
import reducers from './reducers';
/**
    使用中间件的写法
 */
const store = createStore(
    reducers,
    applyMiddleware(thunk, logger, axiosMiddleware)
);

export default store
