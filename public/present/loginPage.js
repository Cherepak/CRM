import React from "react";
import ReactDOM from "react-dom";

export function LoginPage (props) {

  const componentSingLogin = props.props.props.props.componentSingLogin;
  const noSubmit = props.props.props.props.noSubmit;

  return <div id="sing-up">
    <form className="form padding-mega" onSubmit={noSubmit} >
    <h1 className="center">Логин компании</h1>
    <ul>
      <li className="form__item">
        <input className="input" id="login_compani" type="text" name="login-compani" placeholder="Логин компании"/>
      </li>
      <li className="form__item">
      <label className="sr-only">Логин</label>
      <input className="input" type="text" id="loginUser" placeholder="Логин пользователя"/>
      </li>
      <li className="form__item">
        <label className="sr-only">Пароль</label>
        <input className="input" type="text" id="password" placeholder="Пароль"/>
      </li>
      <li className="form__item">
        <button className="submit" onClick={() => {
          let elem = $("#login_compani").val();
          componentSingLogin($("#login_compani").val(),$("#loginUser").val(),$("#password").val());
        }}>Отправить</button>
      </li>
    </ul>
  </form>
  </div>
}
