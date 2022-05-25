import React from "react";
import ReactDOM, { render } from "react-dom";
import {organization, cliente,addCliente,organizationFace,fizFace} from "../../actions/contentCliente/actionCliente"
import {store} from "../../../app"
import { event } from "jquery";

export function Clientle () {
    return <div className="flex">
    <ul className="leftBlock margin-right">
        <li>
            <button
            onClick={()=> {
                fetch("/organization")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    store.dispatch(organization(data))
                })
            }}
            >Организации</button>
        </li>

        <li>
            <button
            onClick={()=> {
                fetch("/client")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    store.dispatch(cliente(data))
                })
            }}
            >Физ. лица</button>
        </li>
        <li>
            <button onClick={()=>{store.dispatch(addCliente())}}>Добавить</button>
        </li>
    </ul>

    <ClientleContent/>

</div>
}

function ClientleContent () {
    if (store.getState()["organization"]) {
        
        let data = store.getState()["organizationData"];

        let result = data.map(function(item, index, array) {
            return <tr key={item["id"]}>
                <td>{item["Наименование"]}</td>
                <td>{item["имяменеджера"]}</td>
                <td>{item["телефонменеджера"]}</td>
                <td>
                    <button onClick={()=> {

                    }}>Подробнее</button>
                </td>
            </tr>
        })


        return <div>
                <table border="1" cellPadding="10" cellSpacing="0">
                    <tr >
                        <th>
                            Наименование
                        </th>
                        <th>
                            Менеджер
                        </th>
                        <th>
                            Телефон
                        </th>
                    </tr>
                    {result}
                </table>
           </div>
    } 
    else if (store.getState()["cliente"]) {
        
        let data = store.getState()["clienteData"];

        let result = data.map(function(item, index, array) {
            return <tr key={item["id"]}>
                <td>{item["ФИО"]}</td>
                <td>{item["телефон"]}</td>
                <td>{item["почта"]}</td>
                <td>
                    <button onClick={()=> {

                    }}>Подробнее</button>
                </td>
            </tr>
        })


        return <div>
                <table border="1" cellpadding="10" cellspacing="0">
                    <tr>
                        <th>
                            Наименование
                        </th>
                        <th>
                            Менеджер
                        </th>
                        <th>
                            Телефон
                        </th>
                    </tr>
                    {result}
                </table>
           </div>
    } 
    else if (store.getState()["addCliente"]) {

        function AddCliente () {

            if (store.getState()["organizationFace"]) {
                return <form id="form">
                    <div>
                        <label className="d-block " for="name">Наименование организации</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="name"
                        type="text" 
                        name="name" 
                        placeholder="Наименование организации" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="legaladress">Юр. адрес</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="legaladress"
                        type="text" 
                        name="legaladress" 
                        placeholder="Юр. адрес" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="factadress">Фактический адрес</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="factadress"
                        type="text" 
                        name="factadress" 
                        placeholder="Фактический адрес" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="okpo">ОКПО</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="okpo"
                        type="number" 
                        name="okpo" 
                        placeholder="ОКПО" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="okved">ОКВЭД</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="okved"
                        type="number" 
                        name="okved" 
                        placeholder="ОКВЭД"
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="numberlabel">Телефон организации</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="numberlabel"
                        type="number" 
                        name="numberlabel" 
                        placeholder="Телефон организации" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="ogrn">ОГРН</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="ogrn"
                        type="number" 
                        name="ogrn" 
                        placeholder="ОГРН" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="inn">ИНН</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="inn"
                        type="number" 
                        name="inn" 
                        placeholder="ИНН" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="kpp">КПП</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="kpp"
                        type="number" 
                        name="kpp" 
                        placeholder="КПП" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="namebank">Наименование банка</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="namebank"
                        type="text" 
                        name="namebank" 
                        placeholder="Наименование банка" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="rs">Расчетный счет</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="rs"
                        type="number" 
                        name="rs" 
                        placeholder="Расчетный счет" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="ks">Корреспандентский счет</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="ks"
                        type="number" 
                        name="ks" 
                        placeholder="Корреспандентский счет" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="bik">БИК</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="bik"
                        type="number" 
                        name="bik" 
                        placeholder="БИК" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="maindirector">Генеральный директор</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="maindirector"
                        type="text" 
                        name="maindirector" 
                        placeholder="Генеральный директор" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="menedger">Менеджер</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="menedger"
                        type="text" 
                        name="menedger" 
                        placeholder="Менеджер" 
                        required/>
                    </div>
                    <div>
                        <label className="d-block " for="numbermenedger">Телефон менеджера</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="numbermenedger"
                        type="number" 
                        name="numbermenedger" 
                        placeholder="Телефон менеджера" 
                        required/>
                    </div>

                    <button
                    onClick={()=>{
                        document.getElementById("form").addEventListener("submit", (event)=>{
                            event.preventDefault();
                        })
                        
                    }}>Отправить</button>
                </form>
            } 
            else if (store.getState()["fizFace"]) {
                return <form id="form">
                    <div>
                        <label  className="d-block " for="name" >ФИО</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="name"
                        type="text"
                        name="name"
                        placeholder="ФИО"
                        required/>
                    </div>
                    <div>
                        <label  className="d-block " for="number" >Номер телефона</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="number"
                        type="number"
                        name="number"
                        placeholder="Номер телефона"
                        required/>
                    </div>
                    <div>
                        <label  className="d-block " for="city" >Город</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="city"
                        type="text"
                        name="city"
                        placeholder="Город"
                        required/>
                    </div>
                    <div>
                        <label  className="d-block " for="adress" >Адрес</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="adress"
                        type="text"
                        name="adress"
                        placeholder="Адрес"
                        required/>
                    </div>
                    <div>
                        <label  className="d-block " for="mail" >Эл.почта</label>
                        <input
                        className="inputcliente inputRedactEmployee" 
                        id="mail"
                        type="text"
                        name="mail"
                        placeholder="Эл.почта"
                        required/>
                    </div>

                    <button onClick={()=>{
                        document.getElementById("form").addEventListener("submit", (event)=>{
                            event.preventDefault();
                        })
                        
                    }}>Отправить</button>
                </form>
            } 
            else {
                return <div></div>
            }
        }

        return <div>
            <ul className="flex">
                <li>
                    <button onClick={()=> {
                        store.dispatch(organizationFace())
                    }}>Юр. лицо</button>
                </li>
                <li>
                    <button onClick={()=> {
                        store.dispatch(fizFace())
                    }}>Физ. лицо</button>
                </li>
            </ul>

            <AddCliente/>
        </div>

        
    }
    else {
        return <div></div>
    }
}