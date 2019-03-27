import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component<any,any>{

  constructor(props){
    super(props);
  }

  render (){
    return(
      <div className="header">
        <div><Link to="/">Aware</Link></div>
        <div>章晨，欢迎你！</div>
      </div>
    )
  }
}

export default Header;
