import React from "react";
import ReactDOM, { render } from "react-dom";
import {createStore} from "redux"
import {Main} from "./modules/main";
import {reducer} from "./modules/reducers/reducer.js"

export const initialState = {
  TableWork  : false,
  Employee  : false,
  Task : false,
  Sklad  : false,
  Clientele : false,
  Massage : false,
  Setting : false,
  
}

export const store = createStore(reducer, initialState);
//подписаться на прослушивание событий
console.log(store.getState())

function App () {
  return (
    <div>
      <Main/>
    </div>
  )
}

export function noSubmit(event) {
  event.preventDefault();
}


ReactDOM.render(
    <App/>, document.getElementById("root")
);
