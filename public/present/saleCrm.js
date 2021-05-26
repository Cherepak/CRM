import React from "react";
import ReactDOM from "react-dom";

export function SaleCRM() {
  return <div>
    <img className="image__present-CRM"
    src="image/sport/sport1.jpg"
    alt="CRM Спортивный"/>

    <h3 className="text-blue CRM__title3">Контроль продаж ЭТО</h3>

    <ul className="text-blue">
      <li className="CRM__item item-margin font24">
        <img className="image__iconCRM" src="image/icon/task.png"/>
        <span className="">Контроль выполнения задач</span>
      </li>
      <li className="CRM__item item-margin font24">
        <img className="image__iconCRM" src="image/icon/massage.png"/>
        <span className="">Быстрое взаимодействие между сотрудниками</span>
      </li>
      <li className="CRM__item item-margin font24">
        <img className="image__iconCRM" src="image/icon/function.png"/>
        <span className="">Быстрый и удобный функционал <br/>
        для взамодействия с пользователем</span>
      </li>
      <li className="CRM__item item-margin font24">
        <img className="image__iconCRM" src="image/icon/client.png"/>
        <span className="">Легкий доступ к информации о Ваших клиентах</span>
      </li>
      <li className="CRM__item item-margin font24">
        <img className="image__iconCRM" src="image/icon/mail.png"/>
        <span className="">Интеграция переписки WhatsApp и почты</span>
      </li>
    </ul>
  </div>
}
