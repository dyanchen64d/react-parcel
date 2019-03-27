import Request from '@src/common/request';

const querySlowLogRecords = (params)=>{
  return Request.post(params)
}

export {querySlowLogRecords}