import React,{Component} from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class Sider extends Component<any,any>{
  state:any;

  constructor(props){
    super(props)
    this.state = {}
  }

  handleClick = ()=>{

  };
  render () {
    return(
      <div className="sider">
        <Menu
          onClick={this.handleClick}
          style={{ width: '100%',border:'none' }}
          defaultSelectedKeys={[]}
          defaultOpenKeys={['service', 'user', 'db', 'setting']}
          mode="inline"
        >
          <SubMenu key="service" title={
            <span><Icon type="hdd" /><span>微服务态势</span></span>
          }>
            <Menu.Item key="/service">
                <Link to="/service">微服务列表</Link>
            </Menu.Item>
            <Menu.Item key="/object">
              <Link to="/oboject">对象列表</Link>
            </Menu.Item>
            <Menu.Item key="/requestlist">
              <Link to="/requestlist">请求列表</Link>
            </Menu.Item>
            <Menu.Item key="/log4j">
              <Link to="/log4j">log4j列表</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="user" title={
              <span><Icon type="user" /><span>用户态势</span></span>
          }>
              <Menu.Item key="/onlineUser">
                  <Link to="/onlineUser">在线用户</Link>
              </Menu.Item>
          </SubMenu>
          <SubMenu key="db" title={
            <span><Icon type="appstore" /><span>数据库态势</span></span>
          }>
            <Menu.Item key="5">
              <Link to="/osoiLogList">慢日志列表</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="setting" title={
            <span><Icon type="setting" /><span>设置管理</span></span>
          }>
            <Menu.Item key="/user">
                <Link to="/user">用户管理</Link>
            </Menu.Item>
            <Menu.Item key="role">
                <Link to="/role">角色管理</Link>
            </Menu.Item>
            <Menu.Item key="/permission">
                <Link to="/permission">权限管理</Link>
              </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default Sider;