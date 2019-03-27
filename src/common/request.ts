import axios from 'axios';
import {User} from "./beans";

class Request {
  constructor() {}

  static get instance (){
    let instance = axios.create({
      baseURL: '/api/aware',
      timeout: 10000,
      headers: {
        token: User.token
      }
    });

    // Add a request interceptor
    instance.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

    // Add a response interceptor
    instance.interceptors.response.use(function (response) {
        // Do something with response data
        let res = response.data;
        if (res.code===1) {
          if(res.data){
            return res.data
          }else{
            return Promise.resolve(true)
          }

        } else {
          return Promise.reject(res.msg)
        }
      }, function (error) {
        // Do something with response error
        return Promise.reject(error);
      });

    return instance;
  };

  static get ({url,params}) {
    return this.instance.get(url,params)
      .catch(function (error) {
        // 全局 error handle
        console.log(error)
      });
  }

  static post ({url,params}) {
    return this.instance.post(url,params)
      .catch(function (error) {
        // 全局 error handle
        console.log(error)
      });
  }
}

export default Request;