import React from "react";
import ReactDOM from "react-dom";

export function ResultAllClientFiz (props) {
    const {data} = props.props.props.props.props.props.state;
    let result = [];
    const componentDownoladClientCard = props.props.props.props.props.props.componentDownoladClientCard;

    for(let key in data) {
        result.push(
            <li className="clientCard" key={key}>
                <ul className="">
                    <li>
                        <h2>Фамилия</h2>
                        <p>{data[key]["фамилия"]}</p>
                    </li>
                    <li>
                        <h2>Имя</h2>
                        <p>{data[key]["имя"]}</p>
                    </li>
                    <li>
                        <h2>Отчество</h2>
                        <p>{data[key]["отчество"]}</p>
                    </li>
                    <li>
                        <h2>Почта</h2>
                        <p>{data[key]["почтаклиента"]}</p>
                    </li>
                    <li>
                        <h2>Телефон</h2>
                        <p>{data[key]["телефонклиента"]}</p>
                    </li>
                </ul>

                <button numberid={`${data[key]["id"]}`} onClick={(el)=>{
                    const id = el.target.getAttribute("numberid");

                    componentDownoladClientCard(id)

                }}>Войти в карточку клиента</button>
            </li>
        )
    }


    return <div>
        <ul>
        {result}
        </ul>
    </div>
}