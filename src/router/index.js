import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import MyLayout from 'bundle-loader?lazy&name=[name]!../layout/layout'
import TableDemo from 'bundle-loader?lazy&name=[name]!../testComponent/tableDemo'
import TodoApp from 'bundle-loader?lazy&name=[name]!../pages/todoapp';
import FormDemo from '../testComponent/formDemo'
import createRouterComponent from '../utils/async/createRouterComponent';
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
                    <Route path="/" render={({history,location}) => (
                        <MyLayout history={history} location={location}>
                            <Switch>
                                <Route path="/" exact component={createRouterComponent(TodoApp)}/>
                                <Route path="/todoApp"  component={createRouterComponent(TodoApp)}/>
                                <Route path="/tableDemo"  component={TableDemo}/>
                                <Redirect to='/404'/>
                            </Switch>
                        </MyLayout>
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Routes