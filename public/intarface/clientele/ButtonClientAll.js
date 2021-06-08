import React from "react";
import ReactDOM from "react-dom";

export function ButtonClientAll (props) {
  const {ButtonClientAll} = props.props.props.props.props.state;
  const componentDownloadAllClientfiz = props.props.props.props.props.componentDownloadAllClientfiz;
  const componentDownloadAllClientcorp = props.props.props.props.props.componentDownloadAllClientcorp;

  if(ButtonClientAll) {
    return <div className="">
        <button onClick={()=> {
          componentDownloadAllClientfiz();
        }
        }>Физические лица</button>

        <button onClick={()=> {
          componentDownloadAllClientcorp();
        }
        }>Корпоративные клиенты</button>
  </div>
  } else {
    return <div></div>
  }
  
}
