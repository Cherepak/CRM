import React from "react";
import ReactDOM from "react-dom";

export function ButtonClientAll (props) {
  const {ButtonClientAll} = props.props.props.props.props.state;
  if(ButtonClientAll) {
    return <div className="">
        <button onClick={()=> {

        }
        }>Физические лица</button>

        <button onClick={()=> {

        }
        }>Корпоративные клиенты</button>
  </div>
  } else {
    return <div></div>
  }
  
}
