import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import store from './store';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
//资源缓存插件 在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//     <Provider store={store}>
//         <AppContainer>
//             <Router />
//         </AppContainer>
//     </Provider>, document.getElementById('root')
// );
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
// ReactDOM.render(
//     <Provider store={store}>
//         <AppContainer>
//             <Router />
//         </AppContainer>
//     </Provider>, document.getElementById('root')
// );
// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router', () => {
        render(Router);
    })
}
// if (module.hot) {
//     module.hot.accept('./router', () => { // 当我们热更新的代码出现的时候，把App重新加载
//         const NextApp = require('./router').default //因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上
//         render(NextApp) // 重新渲染到 document 里面
//     })
// }

registerServiceWorker();
