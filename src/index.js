import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './router';
import store from './store'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
