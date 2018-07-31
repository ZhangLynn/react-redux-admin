import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderMenu from '../components/SiderMenu'
import AsyncComponent from '../utils/AsyncLoad/AsyncComponent';
const TodoApp = AsyncComponent(() => import("../pages/todoapp"));
const TableDemo = AsyncComponent(() => import("../testComponent/tableDemo"));
import {
    Route,
    Switch
} from 'react-router-dom';
import style from './BasicLayout.less'
import singleMenuData from '../menu/singleMenu'
export default class BasicLayout extends Component {
    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <SiderMenu
                    menuData={singleMenuData}
                />
                <Layout>
                    <Switch>
                        <Route exact path="/" component={TodoApp}/>
                        <Route exact path="/todoApp" component={TodoApp}/>
                        <Route path="/tableDemo" component={TableDemo}/>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}