/**
 * desc: 微服务详情
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/26
 * Time: 上午10:00
 */
import React from 'react';
import PageHeader from '@src/components/pageHeader';

class ServiceDetail extends React.Component<any, any>{
    render(){
        return(
            <div className="service-detail">
                <PageHeader title="微服务详情" subtitle={['首页','微服务态势','微服务列表', '微服务详情']} />
                <div className="page-body">
                    User
                </div>
            </div>
        )
    }
}

export {ServiceDetail}