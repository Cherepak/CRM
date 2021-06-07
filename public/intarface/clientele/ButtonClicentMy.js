import React from "react";
import ReactDOM from "react-dom";

export function ButtonClicentMy (props) {

  const componentDownloadMyClientfiz = props.props.props.props.props.componentDownloadMyClientfiz;
  const componentDownloadMyClientcorp = props.props.props.props.props.componentDownloadMyClientcorp;
  const {buttonClicentMy} = props.props.props.props.props.state;
  
  if(buttonClicentMy) {
    return <div className="">
    <button onClick={()=> {
      componentDownloadMyClientfiz();
      }
    }>Физические лица</button>

    <button onClick={()=> {
      componentDownloadMyClientcorp();
      }
    }>Корпоративные клиенты</button>
  </div>
  } else {
    return <div></div>
  }

  
}
