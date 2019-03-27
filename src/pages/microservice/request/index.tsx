import React,{Component} from 'react';
import TablePagination from '@src/components/tablePagination';
import PageHeader from '@src/components/pageHeader';
import { Row,Col,Form,Input,Button,DatePicker } from 'antd';
import FormFieldPair from '@src/components/singleFormField';
import '../style/request.scss';
const FormItem=Form.Item;

class RequestList extends Component<any,any> {
  constructor(props){
    super(props)
  }

  handleSubmit = ()=>{

  }

  onDateChange = ()=>{

  }

  render(){
    const {getFieldDecorator}=this.props.form;
    return(
      <div className="request-list">
        <PageHeader title="请求列表" subtitle={['首页','微服务态势','请求列表']} />
        <div className="page-body">
          <Form className="form">
            <Row>
              <Col span={8}>
                <FormFieldPair
                  labelCol={8}
                  labelTxt="执行时长(s)"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('shichang', {
                        rules: [],
                      })(
                        <Input placeholder="请输入" style={{width:200}} />
                      )}
                    </FormItem>
                  )}
                />
              </Col>
              <Col span={8}>
                <FormFieldPair
                  labelCol={8}
                  labelTxt="微服务名"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('name', {
                        rules: [],
                      })(
                        <Input placeholder="请输入" style={{width:200}} />
                      )}
                    </FormItem>
                  )}
                />
              </Col>
              <Col span={8}>
                <FormFieldPair
                  labelCol={8}
                  labelTxt="请求URI"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('uri', {
                        rules: [],
                      })(
                        <Input placeholder="请输入" style={{width:200}} />
                      )}
                    </FormItem>
                  )}
                />
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <FormFieldPair
                  labelCol={8}
                  labelTxt="状态码"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('code', {
                        rules: [],
                      })(
                        <Input placeholder="请输入" style={{width:200}} />
                      )}
                    </FormItem>
                  )}
                />
              </Col>
              <Col span={8}>
                <FormFieldPair
                  labelCol={8}
                  labelTxt="全局链路码"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('globalcode', {
                        rules: [],
                      })(
                        <Input placeholder="请输入" style={{width:200}} />
                      )}
                    </FormItem>
                  )}
                />
              </Col>
              <Col span={8}>
                <FormFieldPair
                  labelCol={8}
                  labelTxt="日期"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('date', {
                        rules: [],
                      })(
                        <DatePicker onChange={this.onDateChange} />
                      )}
                    </FormItem>
                  )}
                />
              </Col>
              <FormItem>
                <Button type="primary" onClick={this.handleSubmit}>
                  搜索
                </Button>
              </FormItem>
            </Row>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create({})(RequestList);;