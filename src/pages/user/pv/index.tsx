import React,{Component} from 'react';
import {Route} from "react-router-dom";
import RouteWithSubRoutes from '@src/routers/rwsr';
import {OnlineUserList} from './list';

class OnlineUserIndex extends Component<any,any>{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    const {routes}=this.props;
    return(
      <div>
        <Route exact path="/onlineUser" component={OnlineUserList} />
        {routes.map((route,i)=>
          (<RouteWithSubRoutes key={i} {...route} />)
        )}
      </div>
    )
  }
}

export {OnlineUserIndex}