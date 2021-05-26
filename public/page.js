import React from "react";
import ReactDOM from "react-dom";

import {PresentPageScope} from "./present/presentPageScope";
import {PresentPageCompani} from "./present/presentPageCompani";
import {LoginPage} from "./present/loginPage";
import {RegPage} from "./present/regPage";

export function Page(props) {
  const {scope, compani, login, reg} = props.props.props.state;

  if(scope) {
    return <PresentPageScope props={props}/>

  } else if(compani) {
    return <PresentPageCompani props={props}/>

  } else if (login) {
    return <LoginPage props={props}/>

  } else if (reg) {
    return <RegPage props={props}/>
  }
}
