import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import MyLayout from 'bundle-loader?lazy&name=[name]!../layout/layout'
import lazyLoad from '../utils/lazyLoad/lazyLoad';
const page404 = ()=>(
    <div>404</div>
)
const login=()=>(
    <h1>登录页</h1>
)
class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login"  component={login}/>
                    <Route path='/404' component={page404}/>
                    <Route path="/"  component={lazyLoad(MyLayout)}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routes