/**
 * desc: 在线用户
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/22
 * Time: 下午3:53
 */
import React from 'react';
import PageHeader from '@src/components/pageHeader';
import TablePagination from '@src/components/tablePagination';
import moment from "moment";
import { Link } from "react-router-dom";

import "../style/onlineUser.scss"

const columns = [{
    title: '系统名称',
    dataIndex: 'title',
    key: 'title',
}, {
    title: '有效令牌数',
    dataIndex: 'tokenCount',
    key: 'tokenCount',
}, {
    title: '在线用户数',
    dataIndex: 'pvCount',
    key: 'pvCount',
}, {
    title: '获取时间',
    key: 'time',
    dataIndex: 'time',
    render: (time:number) => moment(time).format("YYYY-MM-DD hh:mm:ss")
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <Link to={`/onlineUser/${record.uuid}`}><button className={'online-user-manage-table-button'}>查看</button></Link>
    ),
}];

const data = [
    {uuid:1, title:'mate', tokenCount: 2000, pvCount: 1000, time:1553242238000},
    {uuid:2, title:'home', tokenCount: 2000, pvCount: 1000, time:1553242238000},
    {uuid:3, title:'bpm', tokenCount: 2000, pvCount: 1000, time:1553242238000},
    {uuid:4, title:'home-admin', tokenCount: 2000, pvCount: 1000, time:1553242238000},
    {uuid:5, title:'touch', tokenCount: 2000, pvCount: 1000, time:1553242238000},
    {uuid:6, title:'h5', tokenCount: 2000, pvCount: 1000, time:1553242238000}
]

class OnlineUserList extends React.Component<any, any>{
    render(){
        return(
            <div className="online-user-manage">
                <PageHeader title="在线用户" subtitle={['首页','用户态势','在线用户']} />
                <div className="page-body">
                    <div className="online-user-manage-wrap">
                        <TablePagination
                            rowKey={'uuid'}
                            columns={columns}
                            dataSource={data}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export {OnlineUserList}