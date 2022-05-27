import React from "react";
import ReactDOM, { render } from "react-dom";
import {organization, 
    cliente,
    addCliente,
    organizationFace,
    fizFace,
    moreAboutOrganization,
    moreAboutFizFace,
    redactOrganization,
    redactFizFace} from "../../actions/contentCliente/actionCliente"
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
                    <button data-identificator={item["id"]} onClick={(elem)=> {
            
                        let id = elem.target.getAttribute("data-identificator")


                        fetch(`/moreaboutorganization?id=${id}`)
                        .then(response=>{
                            return response.json()
                        })
                        .then(data=>{
                            if(data["ошибка"]) {
                                alert("Ошибка" + data["ошибка"])
                            } else {
                                store.dispatch(moreAboutOrganization(data))
                            }
                            
                        })
                        

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
                    <button data-identificator={item["id"]} onClick={(elem)=> {
           
                        let id = elem.target.getAttribute("data-identificator");

                        fetch(`/moreaboutfizface?id=${id}`)
                        .then(response=>{
                            return response.json()
                        })
                        .then(data=>{
                            if(data["ошибка"]) {
                                alert("Ошибка" + data["ошибка"])
                            } else {
                                store.dispatch(moreAboutFizFace(data))
                            }
                        })
                    }}>Подробнее</button>
                </td>
            </tr>
        })


        return <div>
                <table border="1" cellPadding="10" cellSpacing="0">
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

                            let name = document.getElementById("name").value;
                            let legaladress = document.getElementById("legaladress").value;
                            let factadress = document.getElementById("factadress").value;
                            let okpo = document.getElementById("okpo").value;
                            let okved = document.getElementById("okved").value;
                            let numberlabel = document.getElementById("numberlabel").value;
                            let ogrn = document.getElementById("ogrn").value;
                            let inn = document.getElementById("inn").value;
                            let kpp = document.getElementById("kpp").value;
                            let namebank = document.getElementById("namebank").value;
                            let rs = document.getElementById("rs").value;
                            let ks = document.getElementById("ks").value;
                            let bik = document.getElementById("bik").value;
                            let maindirector = document.getElementById("maindirector").value;
                            let menedger = document.getElementById("menedger").value;
                            let numbermenedger = document.getElementById("numbermenedger").value;


                            fetch(`/addorganization?name=${name}&legaladress=${legaladress}&factadress=${factadress}&okpo=${okpo}&okved=${okved}&numberlabel=${numberlabel}&ogrn=${ogrn}&inn=${inn}&kpp=${kpp}&namebank=${namebank}&rs=${rs}&ks=${ks}&bik=${bik}&maindirector=${maindirector}&menedger=${menedger}&numbermenedger=${numbermenedger}
                            `) 
                            .then(response => {
                                return response.json()
                            })
                            .then(data => {
                                if(data["response"]){
                                    alert("Данные успешно отправлены")
                                } else {
                                    alert("Произошла ошибка")
                                }
                            })
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
                        let name = document.getElementById("name").value; 
                        let number = document.getElementById("number").value; 
                        let city = document.getElementById("city").value; 
                        let adress = document.getElementById("adress").value; 
                        let mail = document.getElementById("mail").value; 

                        document.getElementById("form").addEventListener("submit", (event)=>{
                            event.preventDefault();
                            fetch(`/addfizface?name=${name}&number=${number}&city=${city}&adress=${adress}&mail=${mail}`) 
                            .then(response => {
                                return response.json()
                            })
                            .then(data => {
                                if(data["response"]){
                                    alert("Данные успешно отправлены")
                                } else {
                                    alert("Произошла ошибка")
                                }
                            })
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
    else if (store.getState()["moreAboutOrganization"]) {
       let data = store.getState()["moreAboutOrganizationData"];
        
        let result = data.map((item) => {
            return <div key={item["id"]}>
                <p>Наименование: {item["Наименование"]}</p>
                <p>Генеральный директор: {item["Генеральныйдиректор"]}</p>
                <p>Юридический адрес: {item["Юридическийадрес"]}</p>
                <p>Фактический адрес: {item["Фактическийадрес"]}</p>
                <p>Телефон организации: {item["Телефонорганизации"]}</p>
                <p>ИНН: {item["ИНН"]}</p>
                <p>КПП: {item["КПП"]}</p>
                <p>К/С:{item["КС"]}</p>
                <p>ОГРН: {item["ОГРН"]}</p>
                <p>ОКВЭД: {item["ОКВЭД"]}</p>
                <p>ОКПО: {item["ОКПО"]}</p>
                <p>Р/С: {item["РС"]}</p>
                <p>БИК: {item["БИК"]}</p>
                <p>Наименование банка: {item["Наименованиебанка"]}</p>
                <p>Имя менеджера: {item["имяменеджера"]}</p>
                <p>Телефон менеджера: {item["телефонменеджера"]}</p>
                <p>Комментарии: {item["Комментарии"]}</p>
            </div>
        })
        
        return <div>
            {result}
            <ul>
                <li>
                    <button onClick={()=> {
                    fetch("/organization")
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        store.dispatch(organization(data))
                    })
                }}>

                Вернуться</button>
                </li>
                <li>
                    <button
                    onClick={()=>{
                        store.dispatch(redactOrganization())
                    }}>Редактировать</button>
                </li>
            </ul>
            
        </div>
    }
    else if (store.getState()["moreAboutFizFace"]) {
        let data = store.getState()["moreAboutFizFaceData"];
        
        let result = data.map((item) => {
            return <div key={item["id"]}>
                <p>ФИО: {item["ФИО"]}</p>
                <p>Телефон: {item["телефон"]}</p>
                <p>Почта: {item["почта"]}</p>
                <p>Город: {item["город"]}</p>
                <p>Адрес: {item["адрес"]}</p>
                <p>Комментарии: {item["комментарии"]}</p>
            </div>
        })

        return <div>
            {result}

            <ul>
                <li>
                    <button onClick={()=> {
                    fetch("/client")
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        store.dispatch(cliente(data))
                    })
                }}>

                    Вернуться</button>
                </li>
                <li>
                    <button
                    onClick={()=>{
                        store.dispatch(redactFizFace())
                    }}>Редактировать</button>
                </li>
            </ul>
        </div>
    }
    else if(store.getState()["redactFizFace"]) {
        let data = store.getState()["moreAboutFizFaceData"];
        
        let result = data.map((item) => {
            return <div key={item["id"]}>
                <div>
                    <label for="nameInput" className="d-block">ФИО: 
                        <span  id="name"> {item["ФИО"]}</span>
                    </label>
                    <input 
                    onInput={()=>{
                        document.getElementById("name").textContent = document.getElementById("nameInput").value
                    }}
                    className="inputcliente inputRedactEmployee"
                    id={`nameInput`} 
                    type={`text`} 
                    name={`nameiInput`}  
                    placeholder={`ФИО`} />
                </div>
                <div>
                    <label for="phoneInput" className="d-block">Телефон: 
                        <span id="phone">{item["телефон"]}</span>
                    </label>
                    <input 
                    onInput={()=>{
                        document.getElementById("phone").textContent = document.getElementById("phoneInput").value;
                    }}
                    className="inputcliente inputRedactEmployee"
                    id={`phoneInput`} 
                    type={`number`} 
                    name={`phoneInput`}  
                    placeholder={`Телефон`} />
                </div>
                <div>
                    <label for="mailInput" className="d-block">Почта: 
                        <span id="mail">{item["почта"]}</span> 
                    </label>
                    <input 
                    onInput={()=>{
                        document.getElementById("mail").textContent = document.getElementById("mailInput").value;
                    }}
                    className="inputcliente inputRedactEmployee"
                    id={`mailInput`} 
                    type={`text`} 
                    name={`mailInput`}  
                    placeholder={`Почта`} />
                </div>
                <div>
                    <label for="cityInput" className="d-block">Город: 
                        <span id="city">{item["город"]}</span> 
                    </label>
                    <input 
                    onInput={()=>{
                        document.getElementById("city").textContent = document.getElementById("cityInput").value;
                    }}
                    className="inputcliente inputRedactEmployee"
                    id={`cityInput`} 
                    type={`text`} 
                    name={`cityInput`}  
                    placeholder={`Город`} />
                </div>
                <div>
                    <label for="adressInput" className="d-block">Адрес: 
                        <span id="adress">{item["адрес"]}</span> 
                    </label>
                    <input 
                    onInput={()=>{
                        document.getElementById("adress").textContent = document.getElementById("adressInput").value;
                    }}
                    className="inputcliente inputRedactEmployee"
                    id={`adressInput`} 
                    type={`text`} 
                    name={`adressInput`}  
                    placeholder={`Адрес`} />
                </div>
                <div>
                    <label for="commentInput" className="d-block">Комментарии: 
                        <span id="comment">{item["комментарии"]}</span>
                    </label>
                    <input 
                    onInput={()=>{
                        document.getElementById("comment").textContent = document.getElementById("commentInput").value;
                    }}
                    className="inputcliente inputRedactEmployee"
                    id={`commentInput`} 
                    type={`text`} 
                    name={`commentInput`}  
                    placeholder={`Комментарии`} />
                </div>    

                <button data-identification={item["id"]} onClick={(elem)=>{
                document.getElementById("form").addEventListener("submit", (event)=>{
                    event.preventDefault();
                });

                let id = elem.target.getAttribute("data-identification");
                let name = document.getElementById("name").textContent;
                let phone = document.getElementById("phone").textContent;
                let mail = document.getElementById("mail").textContent;
                let city = document.getElementById("city").textContent;
                let adress = document.getElementById("adress").textContent;
                let comment = document.getElementById("comment").textContent;

                fetch(`/redactfizface?id=${id}&name=${name}&phone=${phone}&mail=${mail}&city=${city}&adress=${adress}&comment=${comment}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if(data["response"] == true) {
                        alert("Данные внесены")
                    } else if (data["response"]) {
                        alert("Возникла ошибка" + data["response"])
                    }
                })
           }}>

            Внести изменения</button>
            </div>
        })

      

        return <form id="form">
            {result}
            
        </form>
    }
    else if(store.getState()["redactOrganization"]) {
        let data = store.getState()["moreAboutOrganizationData"];
        
        let result = data.map((item) => {
            return <div key={item["id"]}>
                <div>
                    <label for="nameInput" className="d-block">Наименование: 
                        <span id={`name`}>{item["Наименование"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("name").textContent = document.getElementById("nameInput").value;
                    }}
                    id="nameInput"
                    className="inputcliente inputRedactEmployee"
                    type={`text`}
                    name="nameInput"
                    placeholder="Наименование"
                    />
                </div>
                <div>
                    <label for="maindirectorInput" className="d-block">Генеральный директор: 
                        <span id={`maindirector`}>{item["Генеральныйдиректор"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("maindirector").textContent = document.getElementById("maindirectorInput").value;
                    }}
                    id="maindirectorInput"
                    className="inputcliente inputRedactEmployee"
                    type={`text`}
                    name="maindirectorInput"
                    placeholder="Генеральный директор"
                    />
                </div>
                <div>
                    <label for="legaladressInput" className="d-block">Юридический адрес: 
                        <span id={`legaladress`}>{item["Юридическийадрес"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("legaladress").textContent = document.getElementById("legaladressInput").value;
                    }}
                    id="legaladressInput"
                    className="inputcliente inputRedactEmployee"
                    type={`text`}
                    name="legaladressInput"
                    placeholder="Юридический адрес"
                    />
                </div>
                <div>
                    <label for="factadressInput" className="d-block">Фактический адрес: 
                        <span id={`factadress`}>{item["Фактическийадрес"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("factadress").textContent = document.getElementById("factadressInput").value;
                    }}
                    id="factadressInput"
                    className="inputcliente inputRedactEmployee"
                    type={`text`}
                    name="factadressInput"
                    placeholder="Фактический адрес"
                    />
                </div>
                <div>
                    <label for="phoneorganizationInput" className="d-block">Телефон организации: 
                        <span id={`phoneorganization`}>{item["Телефонорганизации"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("phoneorganization").textContent = document.getElementById("phoneorganizationInput").value;
                    }}
                    id="phoneorganizationInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="phoneorganizationInput"
                    placeholder="Телефон организации"
                    />
                </div>
                <div>
                    <label for="innInput" className="d-block">ИНН: 
                        <span id={`inn`}>{item["ИНН"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("inn").textContent = document.getElementById("innInput").value;
                    }}
                    id="innInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="innInput"
                    placeholder="ИНН"
                    />
                </div>
                <div>
                    <label for="kppInput" className="d-block">КПП: 
                        <span id={`kpp`}>{item["КПП"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("kpp").textContent = document.getElementById("kppInput").value;
                    }}
                    id="kppInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="kppInput"
                    placeholder="КПП"
                    />
                </div>
                <div>
                    <label for="ksInput" className="d-block">К/С:
                        <span id={`ks`}>{item["КС"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("ks").textContent = document.getElementById("ksInput").value;
                    }}
                    id="ksInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="ksInput"
                    placeholder="К/С"
                    />
                </div>
                <div>
                    <label for="ogrnInput" className="d-block">ОГРН: 
                        <span id={`ogrn`}>{item["ОГРН"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("ogrn").textContent = document.getElementById("ogrnInput").value;
                    }}
                    id="ogrnInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="ogrnInput"
                    placeholder="ОГРН"
                    />
                </div>
                <div>
                    <label for="okvedInput" className="d-block">ОКВЭД: 
                        <span id={`okved`}>{item["ОКВЭД"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("okved").textContent = document.getElementById("okvedInput").value;
                    }}
                    id="okvedInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="okvedInput"
                    placeholder="ОКВЭД"
                    />
                </div>
                <div>
                    <label for="okpoInput" className="d-block">ОКПО: 
                        <span id={`okpo`}>{item["ОКПО"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("okpo").textContent = document.getElementById("okpoInput").value;
                    }}
                    id="okpoInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="okpoInput"
                    placeholder="ОКПО"
                    />
                </div>
                <div>
                    <label for="rsInput" className="d-block">Р/С:
                        <span id={`rs`}> {item["РС"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("rs").textContent = document.getElementById("rsInput").value;
                    }}
                    id="rsInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="rsInput"
                    placeholder="Р/С"
                    />
                </div>
                <div>
                    <label for="bikInput" className="d-block">БИК: 
                        <span id={`bik`}>{item["БИК"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("bik").textContent = document.getElementById("bikInput").value;
                    }}
                    id="bikInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="bikInput"
                    placeholder="БИК"
                    />
                </div>
                <div>
                    <label for="namebankInput" className="d-block">Наименование банка: 
                        <span id={`namebank`}>{item["Наименованиебанка"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("namebank").textContent = document.getElementById("namebankInput").value;
                    }}
                    id="namebankInput"
                    className="inputcliente inputRedactEmployee"
                    type={`text`}
                    name="namebankInput"
                    placeholder="Наименование банка"
                    />
                </div>
                <div>
                    <label for="namemenedgerInput" className="d-block">Имя менеджера: 
                        <span id={`namemenedger`}>{item["имяменеджера"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("namemenedger").textContent = document.getElementById("namemenedgerInput").value;
                    }}
                    id="namemenedgerInput"
                    className="inputcliente inputRedactEmployee"
                    type={`text`}
                    name="namemenedgerInput"
                    placeholder="Имя менеджера"
                    />
                </div>
                <div>
                    <label for="phonemanedgerInput" className="d-block">Телефон менеджера: 
                        <span id={`phonemanedger`}>{item["телефонменеджера"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("phonemanedger").textContent = document.getElementById("phonemanedgerInput").value;
                    }}
                    id="phonemanedgerInput"
                    className="inputcliente inputRedactEmployee"
                    type={`number`}
                    name="phonemanedgerInput"
                    placeholder="Телефон менеджера"
                    />
                </div>
                <div>
                    <label for="commentInput" className="d-block">Комментарии: 
                        <span id={`comment`}>{item["Комментарии"]}</span>
                    </label>
                    <input
                    onInput={()=>{
                        document.getElementById("comment").textContent = document.getElementById("commentInput").value;
                    }}
                    id="commentInput"
                    className="inputcliente inputRedactEmployee"
                    type={`text`}
                    name="commentInput"
                    placeholder="Комментарии"
                    />
                </div> 

                <button data-identification={item["id"]} onClick={(elem)=>{
                document.getElementById("form").addEventListener("submit", (event)=>{
                    event.preventDefault();

                });

                let id = elem.target.getAttribute("data-identification");
                let name = document.getElementById("name").textContent;
                let maindirector = document.getElementById("maindirector").textContent;
                let legaladress = document.getElementById("legaladress").textContent;
                let factadress = document.getElementById("factadress").textContent;
                let phoneorganization = document.getElementById("phoneorganization").textContent;
                let inn = document.getElementById("inn").textContent;
                let kpp = document.getElementById("kpp").textContent;
                let ks = document.getElementById("ks").textContent;
                let ogrn = document.getElementById("ogrn").textContent;
                let okved = document.getElementById("okved").textContent;
                let okpo = document.getElementById("okpo").textContent;
                let rs = document.getElementById("rs").textContent;
                let bik = document.getElementById("bik").textContent;
                let namebank = document.getElementById("namebank").textContent;
                let namemenedger = document.getElementById("namemenedger").textContent;
                let phonemanedger = document.getElementById("phonemanedger").textContent;
                let comment = document.getElementById("comment").textContent;
                
                fetch(`/redactorganization?id=${id}&phoneorganization=${phoneorganization}&name=${name}&maindirector=${maindirector}&legaladress=${legaladress}&factadress=${factadress}&inn=${inn}&kpp=${kpp}&ks=${ks}&ogrn=${ogrn}&okved=${okved}&okpo=${okpo}&rs=${rs}&bik=${bik}&namebank=${namebank}&namemenedger=${namemenedger}&phonemanedger=${phonemanedger}&comment=${comment}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if(data["response"]==true) {
                        alert("Данные внесены")
                    } else if (data["response"]) {
                        alert("Возникла ошибка" + data["response"])
                    }
                })
            }}>

            Внести изменения</button>        
            </div>
        })
        
        return <form id="form">
            {result}
            
            

            </form>
    }
    else {
        return <div></div>
    }
}