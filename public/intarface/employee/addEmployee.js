import React from "react";
import ReactDOM from "react-dom";

export function AddEmloyee(props) {
  const componentAddProfile = props.props.props.props.props.props.componentAddProfile;
  const noSubmit = props.props.props.props.props.props.noSubmit;

  return <form className="form-employee" onSubmit={noSubmit}>
  <ul className="form-employee__list">
    <li className="form-employee__item flex">
      <span className="form-employee__span">Имя сотрудника</span>
      <input className="form-employee__input input"
      type="text"
      id="nameEmployee"
      name="nameEmployee"
      placeholder="Иван"/>
    </li>
    <li className="form-employee__item flex">
      <span className="form-employee__span">Фамилия сотрудника</span>
      <input className="form-employee__input input"
      type="text"
      id="familyEmployee"
      name="familyEmployee"
      placeholder="Иванов"/>
    </li>
    <li className="form-employee__item flex">
      <span className="form-employee__span">Отчество сотрудника</span>
      <input className="form-employee__input input"
      type="text"
      id="sournameEmployee"
      name="sournameEmployee"
      placeholder="Ивановчи"/>
    </li>
    <li className="form-employee__item flex">
      <span className="form-employee__span">Телефон сотрудника</span>
      <input className="form-employee__input input"
      type="text"
      id="telEmployee"
      name="telEmployee"
      placeholder="Телефон сотрудника"/>
    </li>
    <li className="form-employee__item flex">
      <span className="form-employee__span">Эл. почта</span>
      <input className="form-employee__input input"
      type="text"
      id="mailEmployee"
      name="mailEmployee"
      placeholder="Эл. почта"/>
    </li>
    <li className="form-employee__item flex">
      <span className="form-employee__span">Отдел сотрудника</span>
      <select id="otdel" className="form-employee__select">
        <option  value="Дирекция">Дирекция</option>
        <option  value="Продажи">Продажи</option>
        <option value="Технический">Технический</option>
        <option  value="Администрация">Администрация</option>
        <option  value="Бухгалтерия">Бухгалтерия</option>
        <option  value="Склад">Склад</option>
        <option  value="Уборка">Уборка</option>
      </select>
    </li>
    <li className="form-employee__item flex">
      <span className="form-employee__span">Дата рождения</span>
      <input type="date" id="date"/>
    </li>
    <li className="form-employee__item flex">
      <span className="form-employee__span">Логин сотрудника</span>
      <input className="form-employee__input input"
      type="text"
      id="loginEmployee"
      name="loginEmployee"
      placeholder="Иванов"/>
    </li>
    <li className="form-employee__item flex">
      <span className="form-employee__span">Пароль сотрудника</span>
      <input className="form-employee__input input"
      type="text"
      id="passwordEmployee"
      name="passwordEmployee"
      placeholder="qwerty123"/>
    </li>
    <li className="form-employee__item flex">
      <span className="form-employee__span">Статус</span>
      <select className="form-employee__select" id="status">
        <option value="admin">admin</option>
        <option value="user">user</option>
      </select>
    </li>
  </ul>

  <input className="form-employee__submit" type="submit"
  value="Добавить"
  onClick={()=>{
    componentAddProfile($("#nameEmployee").val(), $("#familyEmployee").val(), $("#sournameEmployee").val(), $("#loginEmployee").val(), $("#passwordEmployee").val(), $("#otdel").val(), $("#telEmployee").val() , $("#mailEmployee").val(), $("#status").val(),$("#date").val());
  }}/>
</form>
}
