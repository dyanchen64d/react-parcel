/**
 * desc: 在线用户细节
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/22
 * Time: 下午4:32
 */
import React from 'react';
import PageHeader from '@src/components/pageHeader';
import { DatePicker, Button } from 'antd';
import moment from "moment";
import {LineCharts} from "@src/components/charts/line";

import '../style/onlineUserDetail.scss';

/**
 * 生成假数据
 */
const fieldsData = () => {
    const data:Array<any> = [];
    let d:number = 1551456000000;
    for(let i = 0; i < 144; i++, d += 600000){
        data.push({
            date: d,
            value: Math.floor(Math.random() * 100 + 1)
        });
    }
    return data;
};

class OnlineUserDetail extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = {
            time: moment().valueOf(),
            dataSourse: []
        }
    }
    componentDidMount(){
        this.handleSearch();
    }
    /**
     * 修改日期
     */
    handleChange = (date:any) => {
        this.setState({time: moment(date).valueOf()})
    };
    /**
     * 搜索
     */
    handleSearch = () => {
        console.log(this.state.time)
        this.setState({dataSourse:fieldsData()})
    };
    render(){
        const {dataSourse} = this.state;
        const scale = {
            date:{
                alias: "时间",
                tickCount:30,
                formatter:(value) => moment(value).format("HH:ss")
            },
            value:{
                alias: "用户数"
            }
        };
        const xAxis = "date";
        const yAxis = 'value';
        return(
            <div className="online-user-detail">
                <PageHeader title="在线用户" subtitle={['首页','用户态势','在线用户']} />
                <div className="page-body online-user-detail-wrap">
                    <div className={"online-user-detail-search"}>
                        <span>日期：</span>
                        <DatePicker onChange={this.handleChange}/>
                        <Button
                            type="primary"
                            onClick={this.handleSearch}
                            className={'online-user-detail-search-button'}
                        >搜索</Button>
                    </div>
                    <div className={"online-user-detail-chart"}>
                        <LineCharts
                            title="MATE在线用户数"
                            dataSourse={dataSourse}
                            scale={scale}
                            xAxis={xAxis}
                            yAxis={yAxis}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export {OnlineUserDetail}