import React from "react";
import ReactDOM from "react-dom";

import {EmployeeReturn} from "./employee/employeeReturn";

export function Employee(props) {
  const componentListEmployee = props.props.props.props.componentListEmployee;
  const componentAddEmployee = props.props.props.props.componentAddEmployee;
  const {firma} = props.props.props.props.state;

return <div className="flex containerForInerface padding">
    <div className="effect-box-shadow">
      <ul className="employee__list">
        <li>
          <button
          onClick={()=> {
            componentAddEmployee();
          }}>Добавить сотрудника</button>
        </li>
        <li>
          <button
          onClick={()=> {
            componentListEmployee(firma);
          }}>Список сотрудников</button>
        </li>
      </ul>
    </div>
    <div className="effect-box-shadow employeeReturn__container">
      <EmployeeReturn props={props}/>
    </div>
  </div>;
}

