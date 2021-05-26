import React from "react";
import ReactDOM from "react-dom";

export function RegPage (props) {
  const noSubmit = props.props.props.props.noSubmit;
  const componentReg = props.props.props.props.componentReg;

  return <div className="container padding">
    <form className="form__reg" onSubmit={noSubmit}>
    <h1 className="center">Зарегистрироваться</h1>
      <ul>
        <li className="form__item">
          <label className="sr-only">Логин компании</label>
          <input className="input" type="text" id="reg-login-compani" name="reg-login-compani" placeholder="Логин компании"/>
        </li>
        <li className="form__item">
          <label className="sr-only"></label>
          <input className="input" type="text" id="firstUserName" name="firstUserName" placeholder="Имя администратора"/>
        </li>
        <li className="form__item">
          <label className="sr-only"></label>
          <input className="input" type="text" id="firstUserPhatherName" name="firstUserPhatherName" placeholder="Отчество администратора"/>
        </li>
        <li className="form__item">
          <label className="sr-only"></label>
          <input className="input" type="text" id="firstUserFamily" name="firstUserFamily" placeholder="Фамилия администратора"/>
        </li>
        <li className="form__item">
          <label className="sr-only"></label>
          <input className="input" type="text" id="firstUserLogin" name="firstUserLogin" placeholder="Логин администратора"/>
        </li>
        <li className="form__item">
          <label className="sr-only"></label>
          <input className="input" type="text" id="firstUserPassword" name="firstUserPassword" placeholder="Пароль администратора"/>
        </li>
        <li className="form__item">
          <p className="center">Отдел</p>
          <select className="input" id="section">
            <option value="Дирекция">Дирекция</option>
            <option value="Продажи">Продажи</option>
            <option value="Технический">Технический</option>
            <option value="Администрация">Администрация</option>
            <option value="Бухгалтерия">Бухгалтерия</option>
            <option value="Склад">Склад</option>
            <option value="Уборка">Уборка</option>
          </select>
        </li>
        <li className="form__item">
          <input className="input"
          type="text"
          id="telEmployee"
          name="telEmployee"
          placeholder="Телефон сотрудника"/>
        </li>

        <li className="form__item">
          <label className="sr-only"></label>
          <input className="input"
            type="text"
            id="mailEmployee"
            name="mailEmployee"
            placeholder="Эл. почта"/>
        </li>

        <li className="form__item">
          <p className="center">Дата рождения</p>
          <ul>
            <li className="form__item">
              <input className="input"
              type="number"
              id="birthdayEmployeeDayReg"
              name="birthdayEmployeeDayReg"
              placeholder="День"/>
            </li>

            <li className="form__item">
              <input className="input"
              type="number"
              id="birthdayEmployeeMonthReg"
              name="birthdayEmployeeMonthReg"
              placeholder="Месяц"/>
            </li>

            <li className="form__item">
              <input className="input"
              type="number"
              id="birthdayEmployeeYearReg"
              name="birthdayEmployeeYearReg"
              placeholder="Год"/>
            </li>
          </ul>
         </li>


        <li className="form__item">
          <label className="sr-only"></label>
          <input className="submit" type="submit" id="reg-compani" name="reg-compani" value="Зарегестрироваться"
          onClick={() => {
            componentReg(
            $(`#reg-login-compani`).val(),
            $(`#firstUserName`).val(),
            $(`#firstUserPhatherName`).val(),
            $(`#firstUserFamily`).val(),
            $(`#firstUserLogin`).val(),
            $(`#firstUserPassword`).val(),
            $(`#section`).val(),
            $(`#telEmployee`).val(),
            $(`#mailEmployee`).val(),
            $(`#birthdayEmployeeDayReg`).val(),
            $(`#birthdayEmployeeMonthReg`).val(),
            $(`#birthdayEmployeeYearReg`).val())
          }}/>
        </li>
      </ul>
    </form>

  </div>;
}
