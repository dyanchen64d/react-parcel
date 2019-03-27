/**
 * desc: 微服务列表
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/25
 * Time: 下午4:49
 */
import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import RouteWithSubRoutes from '@src/routers/rwsr';
import {ServiceList} from './list';



class ServiceIndex extends React.Component<any, any>{
    render(){
        const {routes}=this.props;
        return(
            <Fragment>
                <Route exact={true} path="/service" component={ServiceList} />
                {routes.map((route,i)=>
                    (<RouteWithSubRoutes key={i} {...route} />)
                )}
            </Fragment>
        )
    }
}

export {ServiceIndex}