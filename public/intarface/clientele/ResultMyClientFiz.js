import React from "react";
import ReactDOM from "react-dom";

export function ResultMyClientFiz(props) {
    const {data} = props.props.props.props.props.props.state;
    let result = [];

    for(let key in data) {
        result.push(
            <li>
                <ul className="flex">
                    <li className="marginRight">
                        <h2>{key}</h2>
                    </li>
                    <li className="marginRight">
                        <h2>Фамилия</h2>
                        <p>{data[key]["фамилия"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>Имя</h2>
                        <p>{data[key]["имя"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>Отчество</h2>
                        <p>{data[key]["отчество"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>Почта</h2>
                        <p>{data[key]["почтаклиента"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>Телефон</h2>
                        <p>{data[key]["телефонклиента"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>Лицо</h2>
                        <p>{data[key]["лицо"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>ИНН</h2>
                        <p>{data[key]["инн"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>ОГРН</h2>
                        <p>{data[key]["огрн"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>Банк</h2>
                        <p>{data[key]["банк"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>Кпп</h2>
                        <p>{data[key]["кпп"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>ОКПО</h2>
                        <p>{data[key]["окпо"]}</p>
                    </li>
                    <li className="marginRight">
                        <h2>Р/С</h2>
                        <p>{data[key]["расчетныйсчет"]}</p>
                    </li>
                </ul>
            </li>
        )
    }


    return <div>
        <ul>
        {result}
        </ul>
    </div>
}