import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import store from './store';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
//资源缓存插件 在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
import registerServiceWorker from './registerServiceWorker';

//热更新实现
const render = Component => {
    ReactDOM.render(
        //绑定redux、热加载
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
}

render(Router);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router', () => {
        render(Router);
    })
}

registerServiceWorker();
