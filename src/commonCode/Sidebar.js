
import React, { Component } from 'react';
import { Menu, Icon, Switch } from 'antd';

import axios from 'axios';

const SubMenu = Menu.SubMenu;

class SideBar extends Component {
    constructor(props){
      super(props);
      this.state = {
          theme:'light',
          menuDom:''
      }
      this.changeTheme = this.changeTheme.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.produceMenu = this.produceMenu.bind(this);
    }

    componentDidMount(){
      this.getMenuData();
    }

    getMenuData(){
      axios.get('./service/menudata.json')
      .then((res)=>{
        if(res.data){
          this.setState({
            menuDom:this.produceMenu(res.data.data)
          })
        }
      })
    }

    // 递归 menu
    produceMenu(data){
      if(data && data.length){
        return data.map((item)=>{
          if(!item.children || item.children.length == 0){
            return <Menu.Item key={item.id}><span><Icon type={item.icon} /><span>{item.name}</span></span></Menu.Item>
          }else{
            return <SubMenu key={item.id} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                {(item.children && item.children.length) ? this.produceMenu(item.children) : <Menu.Item key={item.id}><span><Icon type={item.icon} /><span>{item.name}</span></span></Menu.Item>}
              </SubMenu>
          }
        })
      }
    }

    changeTheme(value){
      this.setState({
          theme: value ? 'dark' : 'light',
      });
    }

    handleClick(e){
      console.log('click ', e);
      this.setState({
          current: e.key,
      });
    }

    render(){
        return <div style={{textAlign:"left"}}>
          <div className="logo">
            <img src='./src/image/logo.jpg'/>
          </div>
          {/* <Switch
            checked={this.state.theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"/>
            <br />
            <br /> */}
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width: 256}}
            selectedKeys={[this.state.current]}
            mode="inline"
          >
          {this.state.menuDom}
          </Menu>
        </div>
    }
}

export default SideBar;