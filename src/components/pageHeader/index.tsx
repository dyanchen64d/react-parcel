import React,{Component} from 'react';
import './index.scss';

class PageHeader extends Component<any,any>{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    const {title,subtitle}=this.props;
    return(
      <div className="page-header">
        <p className="title">{title}</p>
        <div>
          {
            subtitle.map((item:string, index:number) => {
              if(index !== subtitle.length - 1) {
                return <span key={`bread_${index}`} className={"subtitle high"}>{item} - </span>
              }else {
                  return <span key={`bread_${index}`} className={"subtitle"}>{item}</span>
              }
            })
          }
        </div>
        {/*<p className="subtitle">{subtitle.join(' - ')}</p>*/}
      </div>
    )
  }
}

export default PageHeader;