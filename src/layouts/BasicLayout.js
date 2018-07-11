import React,{Component} from 'react';
import { Menu,Layout } from 'antd';
import {Link} from 'react-router-dom';
import TableDemo from 'bundle-loader?lazy&name=[name]!../testComponent/tableDemo'
import TodoApp from 'bundle-loader?lazy&name=[name]!../pages/todoapp';
import FormDemo from '../testComponent/formDemo'
import lazyLoad from '../utils/lazyLoad/lazyLoad';
import {
    Route,
    Switch
} from 'react-router-dom';
import style from './layout.less'
const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;

export default class MyLayout extends Component{
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <Menu theme="dark"
                          openKeys={["sub1"]}
                          mode="inline">
                        <SubMenu key="sub1" title={<span><span>菜单栏</span></span>}>
                            <Menu.Item key="formDemo"><Link to='/todoApp'>TodoApp</Link></Menu.Item>
                            <Menu.Item key="tableDemo"><Link to='/tableDemo'>Table</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={lazyLoad(TodoApp)} />
                        <Route exact path="/todoApp" component={lazyLoad(TodoApp)} />
                        <Route path="/tableDemo" component={lazyLoad(TableDemo)} />
                    </Switch>
                </Layout>
            </Layout>
        )
    }
}