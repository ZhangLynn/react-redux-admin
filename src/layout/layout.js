import React,{Component} from 'react';
import { Menu,Layout } from 'antd';
import {Link} from 'react-router-dom';
import style from './layout.less'
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class MyLayout extends Component{
    render(){
        return(
            <Layout style={{height:"100%"}}>
                <Sider>
                    <Menu theme="dark"
                          openKeys={["sub1"]}
                          mode="inline">
                        <SubMenu key="sub1" title={<span><span>菜单栏</span></span>}>
                            <Menu.Item key="tableDemo"><Link to='/tableDemo'>Table</Link></Menu.Item>
                            <Menu.Item key="formDemo"><Link to='/formDemo'>Form</Link></Menu.Item>
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