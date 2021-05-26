import React from "react";
import ReactDOM from "react-dom";

import {AddEmloyee} from "./addEmployee";
import {ListEmployee} from "./listEmployee";
import {PropfileEmployee} from "./propfileEmployee";

export function EmployeeReturn (props) {

  const {addEmployee,listEmployeeState, propfileEmployee} = props.props.props.props.props.state;

  if (addEmployee) {
    return  <AddEmloyee props={props}/>

  } else if (listEmployeeState) {
    return <ListEmployee props={props}/>

  } else if (propfileEmployee) {
      return <PropfileEmployee props={props}/>
  }
}

