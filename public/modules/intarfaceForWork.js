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
      <div className="containerForInerface padding space-between flex-center flex">
        <div>
          <img className="logo" src="image/logo/logo.png" alt="Логотип"/>
        </div>
        <ul className="flex intarface__header-list">
          <li className="margin-right">
            <button className="button"
            onClick={()=>{
               store.dispatch(actionTableWork())
            }}>Рабочий стол</button>
          </li>
          <li className="margin-right">
            <button className="button"
            onClick={()=>{
              store.dispatch(actionEmployee())
            }}>Сотрудники</button>
          </li>
          <li className="margin-right">
            <button className="button"
            onClick={()=>{
              store.dispatch(actionTask())
            }}>Задачи</button>
          </li>
          <li className="margin-right">
            <button className="button"
            onClick={()=>{
              store.dispatch(actionClientle())
            }}>Клиенты</button>
          </li>
          <li className="margin-right">
            <button className="button"
            onClick={()=>{
              store.dispatch(actionMassage())
            }}>Чат</button>
          </li>
          <li className="margin-right">
            <button className="button"
            onClick={()=>{
              store.dispatch(actionSklad())
            }}>Склад</button>
          </li>
          <li>
            <button className="button"
            onClick={()=>{
              store.dispatch(actionSetting())
            }}>Настройки</button>
          </li>
        </ul>

        <div className="user">
            {store.getState().user}
        </div>
      </div>
    </header>

    <main className="reletive">
      <ContentWrapper />
    </main>
  </div>
}
