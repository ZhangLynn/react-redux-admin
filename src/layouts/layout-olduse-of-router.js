import React,{Component} from 'react';
import { Menu,Layout } from 'antd';
import {Link} from 'react-router-dom';
import style from './BasicLayout.less'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

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
                    <div className={style.red}>{this.props.children}</div>
                </Layout>
            </Layout>
        )
    }
}