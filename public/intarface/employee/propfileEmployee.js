import React from "react";
import ReactDOM from "react-dom";

export function PropfileEmployee (props) {
  let {data} = props.props.props.props.props.props.state;

  const componentTransformProfile = props.props.props.props.props.props.componentTransformProfile;
  const componentDeleteProfile = props.props.props.props.props.props.componentDeleteProfile;

  let result = [];
    let имя;
    let фамилия ;
    let отчество;
    let login ;
    let password ;
    let отдел;
    let телефон;
    let почта ;
    let statusid;
    let датарождения;

    for(let key in data) {
      имя = data[key]["имя"];
      фамилия  = data[key]["фамилия"];
      отчество = data[key]["отчество"];
      login  = data[key]["login"];
      password  = data[key]["password"];
      отдел = data[key]["отдел"];
      телефон = data[key]["телефон"];
      почта  = data[key]["почта"];
      statusid = data[key]["status"];
      датарождения = data[key]["датарождения"];

      result.push(

        <div key={key}>
          <ul className="profile__list">
          <li className="profile__item">
            <span className="profile__span">Фамилия: </span>
            <span className="profile__span" id="фамилия">{data[key]["фамилия"]}</span>
            <input className="form-employee__input input"
            type="text"
            id="familyEmployee"
            name="familyEmployee"
            onInput={ () => {
              const x = $("#familyEmployee").val();
              $("#фамилия").html(x)
              фамилия = x}}/>
          </li>
          <li className="profile__item">
            <span className="profile__span">Имя: </span>
            <span className="profile__span" id="имя">{data[key]["имя"]}</span>
            <input className="form-employee__input input"
            type="text"
            id="nameEmployee"
            name="nameEmployee"
            onInput={ () => {
              const x = $("#nameEmployee").val();
              $("#имя").html(x)
              имя = x}}/>
          </li>
          <li className="profile__item">
            <span className="profile__span">Отчество: </span>
            <span className="profile__span" id="отчество">{data[key]["отчество"]}</span>
            <input className="form-employee__input input"
            type="text"
            id="sournameEmployee"
            name="sournameEmployee"
            onInput={ () => {
              const x = $("#sournameEmployee").val();
              $("#отчество").html(x)
              отчество = x}}/>
          </li>
          <li className="profile__item">
            <span className="profile__span">Телефон: </span>
            <span className="profile__span" id="телефон">{data[key]["телефон"]}</span>
            <input className="form-employee__input input"
            type="text"
            id="telEmployee"
            name="telEmployee"
            onInput={ () => {
              const x = $("#telEmployee").val();
              $("#телефон").html(x)
              телефон = x}}/>
          </li>
          <li className="profile__item">
            <span className="profile__span">Почта: </span>
            <span className="profile__span" id="почта">{data[key]["почта"]}</span>
            <input className="form-employee__input input"
            type="text"
            id="mailEmployee"
            name="mailEmployee"
            onInput={ () => {
              const x = $("#mailEmployee").val();
              $("#почта").html(x)
              почта = x}}/>
          </li>
          <li className="profile__item">
            <span className="profile__span">Отдел:</span>
            <span className="profile__span" id="отдел">{data[key]["отдел"]}</span>
            <select id="otdel" className="form-employee__select"
            onInput={ () => {
              const x = $("#otdel").val();
              $("#отдел").html(x)
              отдел = x}}>
              <option  value="Дирекция">Дирекция</option>
              <option  value="Продажи">Продажи</option>
              <option value="Технический">Технический</option>
              <option  value="Администрация">Администрация</option>
              <option  value="Бухгалтерия">Бухгалтерия</option>
              <option  value="Склад">Склад</option>
              <option  value="Уборка">Уборка</option>
            </select>
          </li>
          <li className="profile__item">
            <span className="profile__span">Дата рождения: </span>
            <span className="profile__span" id="датарождения">{data[key]["датарождения"]}</span>
            <input type="date" id="date"
            onInput={ () => {
              const x = $("#date").val();
              $("#датарождения").html(x)
              датарождения = x}}
            />
          </li>
          <li className="profile__item">
            <span className="profile__span">Логин: </span>
            <span className="profile__span" id="login">{data[key]["login"]}</span>
            <input className="form-employee__input input"
            type="text"
            id="loginEmployee"
            name="loginEmployee"
            onInput={ () => {
              const x = $("#loginEmployee").val();
              $("#login").html(x)
              login = x}}/>
          </li>
          <li className="profile__item">
            <span className="profile__span">Пароль: </span>
            <span className="profile__span" id="password">{data[key]["password"]}</span>
            <input className="form-employee__input input"
            type="text"
            id="passwordEmployee"
            name="passwordEmployee"
            onInput={ () => {
              const x = $("#passwordEmployee").val();
              $("#password").html(x)
              password = x}}/>
          </li>
          <li className="profile__item">
            <span className="profile__span">Статус:</span>
            <span className="profile__span" id="statusid">{data[key]["status"]}</span>
            <select className="form-employee__select" id="status"
            onInput={ () => {
              const x = $("#status").val();
              $("#statusid").html(x)
              statusid = x}}>
              <option value="admin">admin</option>
              <option value="user">user</option>
            </select>
          </li>
        </ul>

        <ul>
          <li>
            <button
            onClick={()=> {
              const elem = data[key]["id"];
              componentTransformProfile(elem,имя,фамилия,отчество,login,password,отдел,телефон,почта,statusid,датарождения);
          }}>Внести изменения в профиль</button>
          </li>
          <li>
            <button
            onClick={()=> {
              const elem = data[key]["id"];
              componentDeleteProfile(elem);
          }}>Удалить кабинет сотрудника</button>
          </li>
        </ul>
        </div>);
    }

    return <div>{result}</div>
}
