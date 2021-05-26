import React from "react";
import ReactDOM from "react-dom";

import {Page} from "../page";

export function PresentPage(props) {
  const componentScopePage = props.props.componentScopePage;
  const componentCompaniPage = props.props.componentCompaniPage;
  const componentLoginPage = props.props.componentLoginPage;
  const companentRegPage = props.props.companentRegPage;
  const noSubmit = props.props.noSubmit;

    return <div>
    <div className="presentPage__one-wrapper">
        <header className="flex padding container">
            <img className="logo" src="image/logo/logo.png"/>
            <ul className="flex presentPage__one-wrapper-list">
                <li className="presentPage__one-wrapper__item">
                    <button onClick={()=>{
                      componentScopePage();
                    }}>Возможности</button>
                </li>
                <li className="presentPage__one-wrapper__item">
                    <button >
                      <a className="link__price" href="#price">Цены</a>
                    </button>
                </li>
                <li className="presentPage__one-wrapper__item">
                    <button onClick={()=>{
                      componentCompaniPage();
                    }}>О компании</button>
                </li>
            </ul>
            <ul className="flex">
                <li className="presentPage__one-wrapper__item">
                    <button className="login" onClick={()=>{
                      companentRegPage();
                    }}>Зарегистрироваться</button>
                </li>

                <li className="presentPage__one-wrapper__item">
                    <button className="login" onClick={()=>{
                      componentLoginPage();
                    }}>Войти</button>
                </li>
                <li className="presentPage__one-wrapper__item">
                  <a  href="tel:89779207740">8 977 -920-77-40</a>
                </li>

                <li className="presentPage__one-wrapper__item">
                    <select>
                        <option>RU</option>
                        <option>EN</option>
                    </select>
                </li>
            </ul>
        </header>
    </div>
    <main>
      <Page props={props}/>
      <div className="padding-mega">
        <div className="price-wrapper container padding-mega" id="price">
          <p className="center">Стоимость аккаунта на одного сотрудника
          любой категории доступа
          БЕСПЛАНО на момент разработки. <br/>
          Вы можете попробовать возпользоваться данной разработкой в личных и
          коммерчиских целях БЕСПЛАТНО.
          </p>
          <form className="form" onSubmit={noSubmit}>
            <h2>Получить консультацию:</h2>

            <ul>
              <li className="form__item">
                <label className="sr-only">Номер телефона</label>
                <input className="input" type="number" id="number-tel" name="number-tel" placeholder="Номер телефона"/>
              </li>

              <li className="form__item">
                <label className="sr-only">Почта</label>
                <input className="input" type="text" id="" name="" placeholder="Почта"/>
              </li>

              <li className="form__item">
                <label className="sr-only">Имя</label>
                <input className="input" type="text" id="" name="" placeholder="Ваше имя"/>
              </li>
              <li className="form__item">
                <label className="sr-only">Отправить</label>
                <input className="submit" type="submit" value="Отправить"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </main>
    <footer className="footer">
      <div className="container flex">
        <div>
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="tel:89779207740">8 977 920-77-40</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="mailto:perec9595@mail.ru">perec9595@mail.ru</a>
            </li>
            <li className="footer__item">
              <address>
                <a className="footer__link" href="#">г. Москва, ул. Вилиса Лациса 33к1</a>
              </address>
            </li>
          </ul>
        </div>

        <ul className="presentPage__one-wrapper-list">
                <li className="presentPage__one-wrapper__item">
                    <button className="footer__link" onClick={()=>{
                      componentScopePage();
                    }}>Возможности</button>
                </li>
                <li className="presentPage__one-wrapper__item">
                    <button className="footer__link">
                      <a className="white-text link__price" href="#price">Цены</a>
                    </button>
                </li>
                <li className="presentPage__one-wrapper__item">
                    <button className="footer__link" onClick={()=>{
                      componentCompaniPage();
                    }}>О компании</button>
                </li>
            </ul>
      </div>
    </footer>
</div>
}

