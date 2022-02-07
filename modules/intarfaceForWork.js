import React from "react";
import ReactDOM from "react-dom";

import {actionTableWork} from "./actions/contentWrapperActions/actionsForContentContainer"
import {actionClientle} from "./actions/contentWrapperActions/actionsForContentContainer"
import {actionEmployee} from "./actions/contentWrapperActions/actionsForContentContainer"
import {actionMassage} from "./actions/contentWrapperActions/actionsForContentContainer"
import {actionSetting} from "./actions/contentWrapperActions/actionsForContentContainer"
import {actionSklad} from "./actions/contentWrapperActions/actionsForContentContainer"
import {actionTask} from "./actions/contentWrapperActions/actionsForContentContainer"
import {store} from "../app.js"


import {ContentWrapper} from "./contentWrapper"

export function IntarfaceForWork (props) { 

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
               store.dispatch(actionTableWork())
            }}>Рабочий стол</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
               
            }}>Сотрудники</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
               
            }}>Задачи</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
               
            }}>Клиенты</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
             
            }}>Чат</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
               
            }}>Склад</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
               
            }}>Настройки</button>
          </li>
        </ul>

        <div className="user">
            Здесь будет имя
        </div>
      </div>
    </header>

    <main className="reletive">
      <ContentWrapper props={props}/>
    </main>
  </div>
}
