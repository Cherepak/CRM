import React from "react";
import ReactDOM, { render } from "react-dom";
import {listEmployee} from "../../storeTest"

export function  Employee () {
    let result = []
    for(let key in listEmployee) {
        result.push(
        <li key={key}>
            <img className="employeeImage" src={listEmployee[key]["img"]}/>
            <div>
                <p className="fontSize12">Имя</p>
                <p>{listEmployee[key]["name"]}</p>
            </div>
            <div>
                <p className="fontSize12">Фамилия</p>
                <p>{listEmployee[key]["sourName"]}</p>
            </div>
            <div>
                <p className="fontSize12">Отчество</p>
                <p>{listEmployee[key]["secondName"]}</p>
            </div>
            <div>
                <p className="fontSize12">Почта</p>
                <p>{listEmployee[key]["email"]}</p>
            </div>
            <div>
                <p className="fontSize12">Телефон</p>
                <p>{listEmployee[key]["numberPhone"]}</p>
            </div>

            <button>Открыть профиль</button>
        </li>
        )
    }
    

return <ul className="container flex">{result}</ul>
}