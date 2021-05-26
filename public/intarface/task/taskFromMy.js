import React from "react";
import ReactDOM from "react-dom";

export function TaskFromMy(props) {

  function Result () {
    let result = [];
    const {data} = props.props.props.props.props.props.state;
    console.log(data);
    for(let key in data) {
      result.push(
          <li>
            <span>Кому: {data[key]["кому"]}</span>
            <span>Тема: {data[key]["тема"]}</span>
            <span>Дата начала: {data[key]["датаначала"]}</span>
            <span>Дата окончания: {data[key]["датаокончания"]}</span>
            <span>Статус: {data[key]["статус"]}</span>
            <span>Задача: {data[key]["задача"]}</span>
          </li>
      )
    }

    return <ul>{result}</ul>;
  }

  return <div>
    <Result/>
  </div>;
}
