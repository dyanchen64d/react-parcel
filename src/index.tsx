import React,{useState} from "react";
import ReactDOM from "react-dom";
import { Router,Switch,Route,Link } from "react-router-dom";
import {history} from '@src/common/history';
import {Counter} from './pages/layout/counter';
import './style/index.scss';

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br />
      <Link to="/counter">To Counter</Link>
    </div>
  );
}

function Login() {
  window.setTimeout(()=>history.push('/'),2000)
  return (
    <div>login....</div>
  )
}

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/counter" component={Counter}/>
    </Switch>
  </Router>,
  document.getElementById("app")
);