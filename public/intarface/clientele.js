import React from "react";
import ReactDOM from "react-dom";

export function Clientele(props) {

  const componentListClientele = props.props.props.props.componentListClientele;
  const componentMyClientele = props.props.props.props.componentMyClientele;

  return <div>
    <ul>
    <li>
      <button onClick={()=> {
        componentListClientele();
      }}>Список клиентов</button>
    </li>

    <li>
      <button onClick={()=> {
        componentMyClientele();
      }}>Мои клиенты</button>
    </li>

    <li>
      <button onClick={()=> {
        componentAddClientele();
      }}>Мои клиенты</button>
    </li>
  </ul>

  <div>
    <ResultClient props={props}/>
  </div>
  </div>
}
