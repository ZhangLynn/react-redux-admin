import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import store from './store'
import { Provider } from 'react-redux';
//资源缓存插件 在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
