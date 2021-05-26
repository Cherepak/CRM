import React from "react";
import ReactDOM from "react-dom";

export function ListEmployee(props) {
  let result = [];
  let {data} = props.props.props.props.props.props.state;
  const componentOpenProfile = props.props.props.props.props.props.componentOpenProfile;

    for(let key in data) {

      result.push(
        <li key={key} className="listEmployeeState__container">
        <ul >
          <li>
            <p>{data[key]["фамилия"]}</p>
          </li>
          <li>
            <p>{data[key]["имя"]}</p>
          </li>
          <li>
            <p>{data[key]["отчество"]}</p>
          </li>
          <li>
            <p>{data[key]["почта"]}</p>
          </li>
          <li>
            <p>{data[key]["телефон"]}</p>
          </li>
        </ul>

        <button className="listEmployeeState__open"
        onClick={()=> {
          const elem = data[key]["id"];
          componentOpenProfile(elem);
        }}>Открыть</button>
        </li>
      );
    }

    return <ul className="flex">
      {result}
    </ul>
}
