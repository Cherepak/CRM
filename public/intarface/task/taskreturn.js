import React from "react";
import ReactDOM from "react-dom";

import {MyTask} from "./myTask";
import {AddTask} from "./addTask";
import {TaskFromMy} from "./taskFromMy";

export function TaskReturn(props) {
  // 5 пропсов
  const {myTask, addTask, taskForMy} = props.props.props.props.props.state;
  if (myTask) {
    return <MyTask props={props}/>;

  } else if (addTask) {
    return <AddTask props={props}/>;

  } else if (taskForMy) {
    return <TaskFromMy props={props}/>;
  } else {
    return <div></div>
  }

}
