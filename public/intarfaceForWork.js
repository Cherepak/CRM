import React from "react";
import ReactDOM from "react-dom";

import {Intarface} from "./intarface"

export function IntarfaceForWork (props) {

  const {userName} = props.props.state;
  const componentSetting = props.props.componentSetting;
  const componentMassage = props.props.componentMassage;
  const componentSklad = props.props.componentSklad;
  const componentClientele = props.props.componentClientele;
  const componentTask = props.props.componentTask;
  const componentEmployee = props.props.componentEmployee;
  const componentTableWork = props.props.componentTableWork;

  return <div>
    <header className="intarface__header">
      <div className="containerForInerface padding flex">
        <div>
          <img className="logo" src="image/logo/logo.png" alt="Логотип"/>
        </div>
        <ul className="flex intarface__header-list">
          <li>
            <button className="button"
            onClick={()=>{
              componentTableWork();
            }}>Рабочий стол</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
              componentEmployee();
            }}>Сотрудники</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
              componentTask();
            }}>Задачи</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
              componentClientele();
            }}>Клиенты</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
              componentMassage();
            }}>Чат</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
              componentSklad();
            }}>Склад</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
              componentSetting();
            }}>Настройки</button>
          </li>
        </ul>

        <div className="user">
            {userName}
        </div>
      </div>
    </header>

    <main>
      <Intarface props={props}/>
    </main>
  </div>
}
