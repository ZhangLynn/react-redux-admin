/**
 * Created by ZhangLynn on 2018/7/11
 **/
import React,{Component} from 'react';
import {Menu, Layout} from 'antd';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const {Sider} = Layout;

export default class SiderMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            collapsed: false,
        };
    }
    onCollapse = (collapsed) => {
        this.setState({collapsed});
    }
    render(){
        return(
            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
            >
                <Menu theme="dark"
                      openKeys={["sub1"]}
                      mode="inline">
                    <SubMenu key="sub1" title={<span><span>菜单栏</span></span>}>
                        <Menu.Item key="formDemo">
                            <Link to='/todoApp'>TodoApp</Link>
                        </Menu.Item>
                        <Menu.Item key="tableDemo">
                            <Link to='/tableDemo'>Table</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}