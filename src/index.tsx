import React from 'react'
import ReactDOM from 'react-dom'
import { Router} from 'react-router-dom';
import history from '@src/common/history';
import Main from './layout/main';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import RootStore from '@src/store';
import {Provider} from 'mobx-react';
import TodoList from '@src/store/todolist';
import './style/antd-theme.less';
import './style/index.scss';

const rootStore = new RootStore()
const stores = {
  rootStore:new RootStore(),
  todolistStore: new TodoList(rootStore)
}

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <Router history={history}>
      <Provider {...stores}><Main /></Provider>
    </Router>
  </LocaleProvider>,document.getElementById('root')
);
