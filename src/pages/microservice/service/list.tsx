/**
 * desc:
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/26
 * Time: 上午10:05
 */
import React from 'react';
import PageHeader from '@src/components/pageHeader';
import TablePagination from '@src/components/tablePagination';
import moment from "moment";
import { Link } from "react-router-dom";

import '../style/service.scss';
import {CommonUtils} from "@src/common/utils";

const columns = [
    {
        title: '采集时间',
        dataIndex: 'time',
        render: (time:number) => moment(time).format("YYYY-MM-DD hh:mm:ss")
    },
    {
        title: '微服务名',
        dataIndex: 'name'
    },
    {
        title: 'ip',
        dataIndex: 'ip'
    },
    {
        title: '对象数',
        dataIndex: 'count'
    },
    {
        title: '初始内存',
        dataIndex: 'initRAM',
        render: (ram:number) => CommonUtils.readAblizeBytes(ram)
    },
    {
        title: '最大内存',
        dataIndex: 'maxRAM',
        render: (ram:number) => CommonUtils.readAblizeBytes(ram)
    },
    {
        title: '内存使用',
        dataIndex: 'RAM',
        render: (ram:number) => CommonUtils.readAblizeBytes(ram)
    },
    {
        title: '操作',
        dataIndex: 'action',
        render: (text, record:any) =>
            <Link to={`/service/detail/${record.id}`}>
                <button className={"service-list-wrap-table-button"}>查看</button>
            </Link>
    },
];

const data = [
    {id: 1, time: 1551456000000, name:"mate-basic-service", ip: '172.16.13.102', count: 100, initRAM: 20012, maxRAM: 1000000, RAM: 55913},
    {id: 2, time: 1551456000000, name:"mate-basic-service", ip: '172.16.13.102', count: 100, initRAM: 20012, maxRAM: 1000000, RAM: 55913},
    {id: 3, time: 1551456000000, name:"mate-basic-service", ip: '172.16.13.102', count: 100, initRAM: 20012, maxRAM: 1000000, RAM: 55913},
    {id: 4, time: 1551456000000, name:"mate-basic-service", ip: '172.16.13.102', count: 100, initRAM: 20012, maxRAM: 1000000, RAM: 55913},
    {id: 5, time: 1551456000000, name:"mate-basic-service", ip: '172.16.13.102', count: 100, initRAM: 20012, maxRAM: 1000000, RAM: 55913},
    {id: 6, time: 1551456000000, name:"mate-basic-service", ip: '172.16.13.102', count: 100, initRAM: 20012, maxRAM: 1000000, RAM: 55913},
    {id: 7, time: 1551456000000, name:"mate-basic-service", ip: '172.16.13.102', count: 100, initRAM: 20012, maxRAM: 1000000, RAM: 55913},
];



class ServiceList extends React.Component<any, any>{
    render(){
        return(
            <div className="service-list">
                <PageHeader title="微服务列表" subtitle={['首页','微服务态势','微服务列表']} />
                <div className="page-body service-list-wrap">
                    <TablePagination
                        footer={false}
                        columns={columns}
                        dataSource={data}
                        rowKey={'id'}
                    />
                </div>
            </div>
        )
    }
}

export {ServiceList}