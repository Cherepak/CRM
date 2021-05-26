import React from "react";
import ReactDOM from "react-dom";

import {CRM} from "./crm";

export function PresentPageScope(props) { // возможности
  const componentSportPage = props.props.props.props.componentSportPage;
  const componentSalePage = props.props.props.props.componentSalePage;
  const componentSkladPage = props.props.props.props.componentSkladPage;

    return <div className="">
      <section className="PresentPageScope padding-mega container">
        <h1 className="PresentPageScope__title center">
            Business control
        </h1>

        <p className="PresentPageScope__title-text center">
            Помогает эффективно и удобно управлять компанией.
        </p>
    </section>

    <section className="PresentPageScope__twoSection padding-mega reletive__wrapper">
      <h2 className="PresentPageScope-twoSection__title center">
        Вы можете выбрать CRM под напраление Вашего бизнеса.
      </h2>
      <div className=" PresentPageScope__twoSection__wrapper">
        <div className="reletive flex container">
          <div className="">
            <ul className="fixed">
              <li>
                <button className="" onClick={()=> {
                  componentSportPage();
                }}>
                  Для спортивного бизнеса
                </button>
              </li>
              <li>
                <button className="" onClick={()=> {
                  componentSalePage();
                }}>
                  Для продаж
                </button>
              </li>
              <li>
                <button className="" onClick={()=> {
                  componentSkladPage();
                }}>
                  Для склада
                </button>
              </li>
            </ul>
          </div>
          <div>
              <CRM props={props}/>
          </div>
        </div>
      </div>
    </section>

    </div>
}
