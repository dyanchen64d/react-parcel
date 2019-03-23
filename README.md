React、Parcel项目搭建

### parcel yarn

yarn global add parcel-bundler
yarn init -y

```json

package.json

"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html"
},
```

### react babel

yarn add react react-dom
yarn add -D parcel-bundler babel-preset-react babel-preset-env

**.babelrc**

```
{
 "presets": ["env",  "react"]
}
```

babel-plugin-module-resolver

```
{
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "test": "./test",
        "underscore": "lodash"
      }
    }]
  ]
}
```

### sass typescript

`yarn add -D sass`

```json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

### nginx静态资源服务

https://stackoverflow.com/questions/45598779/react-router-browserrouter-leads-to-404-not-found-nginx-error-when-going-to

### react router

`yarn add react-router-dom`

- history

### ant-design

- yarn add antd

```
import 'antd/dist/antd.css';
```

- babel-plugin-import

```
{
  "plugins": [
    ["import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": "css" // `style: true` 会加载 less 文件
    }]
  ]
}
```

- primary-color

Downgrade `less` to `2.7.3` because parcel cannot handle version `3.x`

### window.onresize

```jsx
componentDidMount = ()=>{
  window.addEventListener('resize',this.resize)
  this.setState({width:window.innerWidth,height:window.innerHeight})
}

resize = ()=>{
  this.setState({width:window.innerWidth,height:window.innerHeight})
}
```

### routes config

### scss func rem

```
$fontSize1200:14px;
$minWidth:1200px;

@function px2rem($px){
  @if(unit($px) == "px") {
    @return ($px / $fontSize1200 ) * 1rem;
  }@else{
    @return $px;
  }
}

@function calcFontSize() {
  @return (100 * 14 / 1200) * 1vw;
}
```

### axios

```ts
import axios from 'axios';

class Request {
  constructor() {}

  static get instance (){
    let instance = axios.create({
      baseURL: '',
      timeout: 5000,
      headers: {}
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
        return response;
      }, function (error) {
        // Do something with response error
        return Promise.reject(error);
      });

    return instance;
  };

  static get ({url,params}) {
    return this.instance.get(url,{params})
      .catch(function (error) {
        // 全局 error handle
      });
  }

  static post ({url,params}) {
    return this.instance.post(url,{params})
      .catch(function (error) {
        // 全局 error handle
      });
  }
}

export default Request;
```

### mobx
