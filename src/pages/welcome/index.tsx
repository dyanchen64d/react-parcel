import React, {Component} from 'react';
import './index.scss';

export default class Welcome extends Component<any,any>{


  constructor(props){
    super(props);
    this.state={}
  }

  render (){
    return(
      <div className="page-body welcome">
        <div className="intro">
          <p>金宝贝态势感知平台，欢迎你！</p>
          <ul>
            <li>守护系统安全，我们责无旁贷</li>
            <li>实时感知系统状态</li>
            <li>全方位监控</li>
          </ul>
        </div>
        <img className="welpng" src={require('@src/assets/welcome.png')} />
      </div>
    )
  }
}