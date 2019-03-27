import React,{Component} from 'react';
import {Table,Pagination} from 'antd';
import './index.scss';

export default class TablePagination extends Component<any,any>{
  constructor(props){
    super(props)
    this.state={
      // 每页条数
      pageSize:10,
      // 当前页码
      page:1
    }
  }

  onChange = (page,pageSize)=>{
    // console.log(page,pageSize)
    this.props.onPageChange({page,pageSize})
    this.setState({page,pageSize})
  }

  onShowSizeChange = (current,size)=>{
    // console.log(current,size)
    this.props.onPageChange({page:current,pageSize:size})
    this.setState({page:current,pageSize:size})
  }

  render(){

    const {
      columns,
      dataSource,
      // 数据总条数
      total,
      // 是否有分页
      footer,
      rowKey
    }=this.props;

    const {page}=this.state;

    return(
      <div className="table-pagination">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          rowKey={rowKey}
        />
        {
          footer &&
          <div className="footer">
            <div className="message">共有{total}条数据，当前第{page}页</div>
            <Pagination
              className="pagination"
              size="small"
              total={total}
              showSizeChanger
              showQuickJumper
              onChange={this.onChange}
              onShowSizeChange={this.onShowSizeChange}
            />
          </div>
        }
      </div>
    )
  }
}