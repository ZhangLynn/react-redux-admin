import React, {Component} from 'react';
import {Layout} from 'antd';
import {Link} from 'react-router-dom';
import SiderMenu from '../components/SiderMenu'
import TableDemo from 'bundle-loader?lazy&name=[name]!../testComponent/tableDemo'
import TodoApp from 'bundle-loader?lazy&name=[name]!../pages/todoapp';
import FormDemo from '../testComponent/formDemo'
import lazyLoad from '../utils/lazyLoad/lazyLoad';
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
                        <Route exact path="/" component={lazyLoad(TodoApp)}/>
                        <Route exact path="/todoApp" component={lazyLoad(TodoApp)}/>
                        <Route path="/tableDemo" component={lazyLoad(TableDemo)}/>
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}