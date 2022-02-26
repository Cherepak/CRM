import React from "react";
import ReactDOM, { render } from "react-dom";
import { store } from "../../../app";
import {listEmployee} from "../../storeTest"
import {openProfile} from "../../actions/contentEmployee/actionsForEmployeeWrapper"
import {closeProfile} from "../../actions/contentEmployee/actionsForEmployeeWrapper"
import {profileRedact} from "../../actions/contentEmployee/actionsForEmployeeWrapper"
import {closeRedactEployee} from "../../actions/contentEmployee/actionsForEmployeeWrapper"

export function  Employee () {
    
    if (store.getState()["profile"]) {
        let result = [];
        
        for(let key in listEmployee) {
           
            if(listEmployee[key]["id"] == store.getState()["id"]) {
    
                result.push(
                    
                    <li className="flex space-between" key={key}>
                        <div className="flex">
                            <img className="employeeImage margin-right" src={listEmployee[key]["img"]}/>
                            
                            <div> 
                                <p> {listEmployee[key]["name"]}</p>

                                <p>Дата рождения: {`${listEmployee[key]["birthday"].getDate()}.
                                ${listEmployee[key]["birthday"].getMonth()}.
                                ${listEmployee[key]["birthday"].getFullYear()}`}</p>

                                <p>Почта: {listEmployee[key]["email"]}</p>
                            
                                <p>Номер телефона: {listEmployee[key]["numberPhone"]}</p>
                            </div>
                        </div>

                        <button
                        onClick={()=> {
                            store.dispatch(profileRedact())
                        }}>Редактировать профиль</button>

                        <button  onClick={()=>{
                            store.dispatch(closeProfile())
                        }}>Вернуться</button>

                    </li>
                );

                return <div className="container">{result}</div>
            }
           
        }
       
    } 
    else if (store.getState()["profileRedact"]) {
        let id = store.getState()["id"];

        return <div className="container">
                <form>
                    <div>
                        <label className="d-block ">Фамилия</label>
                        <input
                        className="inputRedactEmployee" 
                        type="text" 
                        id="sourName" 
                        name="sourName" 
                        placeholder="Фамилия"/>
                    </div>
                    <div>
                        <label className="d-block ">Имя</label>
                        <input
                        className="inputRedactEmployee" 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Имя"/>
                    </div>
                    <div>
                        <label className="d-block ">Отчество</label>
                        <input
                        className="inputRedactEmployee" 
                        type="text" 
                        id="secondName" 
                        name="secondName" 
                        placeholder="Отчество"/>
                    </div>
                    <div>
                        <label className="d-block ">Дата рождения</label>
                        <input
                        className="inputRedactEmployee" 
                        type="text" 
                        id="birthday" 
                        name="birthday" 
                        placeholder="Дата рождения"/>
                    </div>
                    <div>
                        <label className="d-block ">Эл. почта</label>
                        <input
                        className="inputRedactEmployee" 
                        type="text" 
                        id="email" 
                        name="email" 
                        placeholder="Эл. почта"/>
                    </div>
                    <div>
                        <label className="d-block ">Номер телефона</label>
                        <input
                        className="inputRedactEmployee" 
                        type="text" 
                        id="tel" 
                        name="tel" 
                        placeholder="Номер телефона"/>
                    </div>
                    <div>
                        <label className="d-block ">Загрузить фотографию</label>
                        <input
                        className="inputRedactEmployee" 
                        type="file" 
                        accept="image"
                        id="img" 
                        name="img" 
                        />
                    </div>

                    <button>Отправить</button>
                </form>

                <button onClick={()=> {
                    store.dispatch(closeRedactEployee(id))
                }}>Вернуться</button>
        </div>
    } else {
        let result = [];

        for(let key in listEmployee) {
            let idKey = listEmployee[key]["id"];
            result.push(
            <li className="flex space-between margin-bottom" key={key}>
                <div className="flex">
                    <img className="employeeImage margin-right" src={listEmployee[key]["img"]}/>
                    
                    <div>  

                        <p>{listEmployee[key]["name"]}</p>

                        <p>{listEmployee[key]["email"]}</p>
                    
                        <p>{listEmployee[key]["numberPhone"]}</p>
                    </div>
                </div>

                <button onClick={()=>{
                    store.dispatch(openProfile(idKey))
                }}>Открыть профиль</button>

                
            </li>
            )
        }
        return <ul className="container">{result}</ul>
    }
    


}