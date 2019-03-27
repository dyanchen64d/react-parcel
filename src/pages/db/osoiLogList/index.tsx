import React,{Component} from 'react';
import { Row,Col,Form,Input,Button,Modal } from 'antd';
import PageHeader from '@src/components/pageHeader';
import FormFieldPair from '@src/components/singleFormField';
import '../style/osoiLogList.scss';
import TablePagination from '@src/components/tablePagination';
import {querySlowLogRecords} from '@src/actions/db';
import databaseApi from '@src/api/database';
const FormItem=Form.Item;

class OsoiLogList extends Component<any,any>{
  constructor(props){
    super(props);
    this.state={
      data:[],
      total:undefined,
      columns:[{
        title: '执行开始时间',
        dataIndex: 'executionStartTime',
      }, {
        title: '数据库名',
        dataIndex: 'dbname',
      }, {
        title: '执行时长（单位s）',
        dataIndex: 'parseRowCounts'
      }, {
        title: '处理状态',
        dataIndex: 'status'
      }, {
        title: '处理人',
        dataIndex: 'name'
      }, {
        title: '处理后时长（单位s）',
        dataIndex: 'returnRowCounts'
      }, {
        title: 'sql语句',
        render:(text,record)=>(
          <button
            className={'table-button'}
            onClick={()=>{this.showSql(record)}}
          >
            查看
          </button>
        )
      }, {
        title: '操作',
        render: (text, record) => (
          <button
            className={'table-button'}
            onClick={()=>{this.operate(record)}}
          >
            完成
          </button>
        ),
      }]
    };
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  onPageChange = ({page,pageSize})=>{
    console.log({page,pageSize})
  }

  componentDidMount = ()=>{
    querySlowLogRecords({
      url:databaseApi.querySlowLogRecords,
      params:{}
    }).then((res:any)=>{
      this.setState({
        data:res.content,
        total:res.totalElements
      })
    });
  }

  showSql =(record)=>{
    // console.log(record)
    Modal.info({
      content:record.sqlText,
      width:880,
      icon:<div></div>
    })
  }

  operate = (record)=>{
    console.log(record)
  }

  render (){
    const {getFieldDecorator}=this.props.form;
    const {columns,data,total}=this.state;
    return(
      <div className="osoi-log-list">
        <PageHeader title="慢日志列表" subtitle={['首页','数据库态势','慢日志列表']} />
        <div className="page-body">
          <Form className="form">
            <Row>
              <Col span={8}>
                <FormFieldPair
                  labelCol={8}
                  labelTxt="数据库名"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('dbName', {
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
                  labelTxt="处理状态"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('handleStatus', {
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
                  labelTxt="执行时常(s)"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('handleDuration', {
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
                  labelTxt="执行人"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('handler', {
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
                  labelTxt="sql语句"
                  render={()=>(
                    <FormItem>
                      {getFieldDecorator('sql', {
                        rules: [],
                      })(
                        <Input placeholder="请输入" style={{width:200}} />
                      )}
                    </FormItem>
                  )}
                />
              </Col>
              <Col span={8}>
                <FormItem>
                  <Button type="primary" onClick={this.handleSubmit}>
                    搜索
                  </Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
          <TablePagination
            columns={columns}
            dataSource={data}
            total={total}
            onPageChange={this.onPageChange}
            footer={true}
            rowKey="id"
          />
        </div>
      </div>
    )
  }
}

export default Form.create({})(OsoiLogList);
