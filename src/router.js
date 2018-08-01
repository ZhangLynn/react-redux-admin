import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';
//配置antd组件的中文
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
//路由的按需加载
import AsyncComponent from './utils/AsyncLoad/AsyncComponent';
import Loadable from 'react-loadable';
import MyLoadingComponent from './utils/MyLoadingComponent';
const BasicLayout = Loadable({
    loader: () => import("./layouts/BasicLayout"),
    loading: MyLoadingComponent
});
// const BasicLayout = AsyncComponent(() => import("./layouts/BasicLayout"));
const page404 = ()=>(
    <div>404</div>
)
const login=()=>(
    <h1>登录页</h1>
)
class Router extends Component {
    render() {
        return (
            // 将antd组件配置为中文
            <LocaleProvider locale={zhCN}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login"  component={login}/>
                        <Route path='/404' component={page404}/>
                        <Route path="/"  component={BasicLayout}/>
                    </Switch>
                </BrowserRouter>
            </LocaleProvider>
        )
    }
}
export default Router