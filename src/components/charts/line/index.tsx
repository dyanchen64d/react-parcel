/**
 * desc: 阶梯折线图
 * User: Renjian.Tang/renjian.tang@gymboglobal.com
 * Date: 2019/3/25
 * Time: 下午3:36
 */
import React, {Component} from "react";
import {
    Chart,
    Axis,
    Geom,
    Tooltip
} from "bizcharts";

declare interface LineChartsProps {
    title:string,
    dataSourse:Array<number>,
    scale:any,
    xAxis:string,
    yAxis:string
}

class LineCharts extends Component <LineChartsProps, any>{
    render(){
        const {title, dataSourse, scale, xAxis, yAxis} = this.props;
        return(
            <div>
                <Chart height={400} data={dataSourse} scale={scale} forceFit>
                    <Axis name={xAxis}/>
                    <Axis name={yAxis}/>
                    <Tooltip/>
                    <Geom type="line" position={`${xAxis}*${yAxis}`} size={1} shape={"hv"} />
                </Chart>
            </div>
        )
    }
}

export {LineCharts};
