/**
 * desc: 用户管理
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/22
 * Time: 上午9:52
 */
import React from 'react';
import PageHeader from '@src/components/pageHeader';

class User extends React.Component<any, any>{
    render(){
        return(
            <div className="user-manage">
                <PageHeader title="用户管理" subtitle={['首页','设置管理','用户管理']} />
                <div className="page-body">
                    User
                </div>
            </div>
        )
    }
}

export {User}