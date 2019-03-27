import React, {Component} from 'react';
import {Row,Col} from 'antd'
import './index.scss'

class FormFieldPair extends Component<any,any>{
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    const {labelCol,labelTxt}=this.props;
    return(
      <Row className="form-field-pair" align="middle" type="flex">
        <Col span={labelCol}
             className={`label ${this.props.required?'required':''}`}
        >
          {labelTxt}：
        </Col>
        <Col span={(24-labelCol)} className="item">
          {
            this.props.render()
          }
        </Col>
      </Row>
    )
  }
}

export default FormFieldPair;