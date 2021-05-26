import React from "react";
import ReactDOM from "react-dom";

import {PresentPage} from "./presentPage";
import {IntarfaceForWork} from "../intarfaceForWork";


export function Main (props) {
  const {status} = props.state;

  if(!status) {
    return <PresentPage props={props}/>
  } else if(status) {
    return <IntarfaceForWork props={props}/>
  }
}
