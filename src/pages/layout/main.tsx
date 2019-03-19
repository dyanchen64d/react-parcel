import React, { Component,useState } from 'react';
import { Route,Switch,Link } from "react-router-dom";
import {Counter} from './counter';
import {history} from '@src/common/history';

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

class Main extends Component<any,any> {
  render () {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/counter" component={Counter}/>
      </Switch>
    );
  }
};

export {Main}