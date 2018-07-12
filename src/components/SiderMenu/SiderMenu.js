/**
 * Created by ZhangLynn on 2018/7/11
 **/
import React,{Component} from 'react';
import {Menu, Layout ,Icon} from 'antd';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const {Sider} = Layout;

export default class SiderMenu extends Component{
    constructor(props){
        super(props);
        this.menus=props.menuData;
        this.state = {
            collapsed: false,
        };
    }
    getNavMenuItem=(menuData)=>{
        return menuData.map(item=>{
            return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
        })
    }
    getMenuItemPath=item=>{
        const icon=this.getIcon(item.icon)
        return (
            <Link
                to={item.path}
                // target={target}
                // replace={item.path === this.props.location.pathname}
            >
                {icon}
                <span>{item.name}</span>
            </Link>
        );
    }
    getIcon=icon=>{
        if(typeof icon === 'string'){
            return <Icon type={icon} />;
        }
        return icon
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
                      mode="inline">
                    {/*<Menu.Item key="formDemo">*/}
                        {/*<Link to='/todoApp'>TodoApp</Link>*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="tableDemo">*/}
                        {/*<Link to='/tableDemo'>Table</Link>*/}
                    {/*</Menu.Item>*/}
                    {this.getNavMenuItem(this.menus)}
                </Menu>
            </Sider>
        )
    }
}