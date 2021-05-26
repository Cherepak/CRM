import React from "react";
import ReactDOM from "react-dom";
import {TaskReturn} from "./task/taskreturn";

export function Task(props) {
  const componentMyTask = props.props.props.props.componentMyTask;
  const componentAddTask = props.props.props.props.componentAddTask;
  const componentTaskFromMy = props.props.props.props.componentTaskFromMy;

  return <div className="flex containerForInerface padding">
    <div className="effect-box-shadow">
      <ul>
      <li>
          <button onClick={()=> {
            componentMyTask();
          }}>Мои задачи</button>
        </li>
        <li>
          <button onClick={()=> {
            componentAddTask();
          }}>Поставить задачу</button>
        </li>
        <li>
          <button
          onClick={()=> {
            componentTaskFromMy();
          }}>Задачи от меня</button>
        </li>
      </ul>
    </div>
    <div>
      <TaskReturn props={props}/>
    </div>
  </div>;
}
