import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import {Main} from './pages/layout/main';
import {history} from '@src/common/history';
import './style/index.scss';

ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>,
  document.getElementById("app")
);