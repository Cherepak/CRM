import React from "react";
import ReactDOM from "react-dom";

export function AddTask (props) {

  const noSubmit = props.props.props.props.props.props.noSubmit;
  const componentAddTaskToServer = props.props.props.props.props.props.componentAddTaskToServer;
  const {listUser} = props.props.props.props.props.props.state;
  let today = new Date().toLocaleDateString();

  function ListUser () {
    let result = [];

  for(let key in listUser) {
    let val = `${listUser[key]["фамилия"]} ${listUser[key]["имя"]} ${listUser[key]["отчество"]}`;

    result.push(
      <option value={val}>
        {val}
      </option>
    );
  }

  return <select id="to">{result}</select>;
  }

  return <div>
    <form onSubmit={noSubmit}>
      <h1>Поставить задачу</h1>
      <ul>
        <li className="flex">
          <h2>Кому</h2>
            <ListUser/>
        </li>
        <li className="flex">
          <h2>Тема</h2>
          <input type="text" id="subject" name="subject" />
        </li>
        <li className="flex">
          <h2>Задача</h2>
          <input type="text" id="task" name="task"/>
        </li>
        <li className="flex">
          <h2>Дедлайн</h2>
          <input type="date" id="toDate" name="toDate"/>
        </li>
      </ul>

      <input type="submit" value="Отправить" onClick={()=> {
        componentAddTaskToServer(today, $("#subject").val(), $("#task").val(), $("#toDate").val(), $("#to").val() );
      }}/>
    </form>
  </div>;
}
