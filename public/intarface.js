import React from "react";
import ReactDOM from "react-dom";

import {TableWork} from "./intarface/tableWork";
import {Employee} from "./intarface/employee";
import {Task} from "./intarface/task";
import {Sklad} from "./intarface/sklad";
import {Clientele} from "./intarface/clientele";
import {Massage} from "./intarface/massage";
import {Setting} from "./intarface/setting";


export function Intarface (props) {
  const {tableWork} = props.props.props.state;
  const {employee} = props.props.props.state;
  const {task} = props.props.props.state;
  const {sklad} = props.props.props.state;
  const {clientele} = props.props.props.state;
  const {massage} = props.props.props.state;
  const {setting} = props.props.props.state;

  if(tableWork) {
    return <TableWork props={props}/>;
  } else if(employee) {
    return <Employee props={props}/>;
  } else if(task) {
    return <Task props={props}/>;
  } else if(sklad) {
    return <Sklad props={props}/>;
  } else if(clientele) {
    return <Clientele props={props}/>;
  } else if(massage) {
    return <Massage props={props}/>;
  } else if(setting) {
    return <Setting props={props}/>;
  }
}
