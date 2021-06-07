import React from "react";
import ReactDOM from "react-dom";
import {ButtonClientAll} from "./clientele/ButtonClientAll";
import {ButtonClicentMy} from "./clientele/ButtonClicentMy";
import {ResultClient} from "./clientele/resultClient"
export function Clientele(props) {

  const componentListClienteleOuer = props.props.props.props.componentListClienteleOuer;
  const componentMyClientele = props.props.props.props.componentMyClientele;
  const componentAddClientele = props.props.props.props.componentAddClientele;
  



  return <div className="flex">
    <ul className="positionFixed">
    <li>
      <button onClick={()=> {
        componentListClienteleOuer();
      }}>Список клиентов</button>
      <ButtonClientAll props={props}/>
    </li>

    <li>
      <button onClick={()=> {
        componentMyClientele();
      }}>Мои клиенты</button>
      <ButtonClicentMy props={props}/>
    </li>

    <li>
      <button onClick={()=> {
        componentAddClientele();
      }}>Добавить клиента</button>
    </li>
  </ul>

  <div className="resultClient">
    <ResultClient props={props}/>
  </div>
  </div>
}
