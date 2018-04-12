import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import MyLayout from '../layout/layout'
import TableDemo from '../testComponent/tableDemo'
import FormDemo from '../testComponent/formDemo'
import TodoApp from '../pages/todoapp'

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
                                <Route path="/" exact component={TodoApp}/>
                                <Route path="/tableDemo"  component={TodoApp}/>
                                <Route path="/formDemo"  component={FormDemo}/>
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