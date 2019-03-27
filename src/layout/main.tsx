
import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Header from './header';
import Sider from './sider';
import routes from '@src/routers/routes';
import RouteWithSubRoutes from '@src/routers/rwsr';
import Welcome from '@src/pages/welcome';
import '@src/style/main.scss';
import {CommonUtils} from "@src/common/utils";
import {login} from "@src/actions/login";
import {User} from "@src/common/beans";
import history from "../common/history";
import {observer} from 'mobx-react';

@observer
class Main extends Component<any,any> {
  state:any;
  setState:any;

  constructor(props){
    super(props);
    this.state={
      width:undefined,
      height:undefined,
      isLogin:true
    };
  }

  componentDidMount = ()=>{
    const code = CommonUtils.urlSearchStringToObj('code');
    if(code){
        login({code: code}).then((res:any) => {
          console.log(res)
          User.user = res;
          history.push(window.location.pathname);
        })
    }
    window.addEventListener('resize',this.resize)
    this.setState({width:window.innerWidth,height:window.innerHeight})

    // setTimeout(()=>{this.props.store.addCount()}, 2000)
  }

  resize = ()=>{
    this.setState({width:window.innerWidth,height:window.innerHeight})
  }

  render (){
    const {width,height,isLogin}=this.state;
    return (
      <div className="main" style={{width,height,minWidth:1200}}>
        <Header />
        <div className="with-sider">
          {
            isLogin && <Sider />
          }
          <div className="content">
              <Route exact path="/" component={Welcome} />
              {routes.map((route,i)=>
                (<RouteWithSubRoutes key={i} {...route} />)
              )}
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
