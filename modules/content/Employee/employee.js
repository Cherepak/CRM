import React from "react";
import ReactDOM, { render } from "react-dom";
import { store } from "../../../app";
import {listEmployee} from "../../storeTest"
import {openProfile} from "../../actions/contentEmployee/actionsForEmployeeWrapper"
import {closeProfile} from "../../actions/contentEmployee/actionsForEmployeeWrapper"

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
                                <p>Фамилия: {listEmployee[key]["sourName"]}</p>

                                <p>Имя: {listEmployee[key]["name"]}</p>
                            
                                <p>Отчество: {listEmployee[key]["secondName"]}</p>
                                
                                <p>Дата рождения: {`${listEmployee[key]["birthday"].getDate()}.
                                ${listEmployee[key]["birthday"].getMonth()}.
                                ${listEmployee[key]["birthday"].getFullYear()}`}</p>

                                <p>Почта: {listEmployee[key]["email"]}</p>
                            
                                <p>Номер телефона: {listEmployee[key]["numberPhone"]}</p>
                            </div>
                        </div>

                        <button onClick={()=>{
                            store.dispatch(closeProfile())
                        }}>Вернуться</button>
                    </li>
                );

                return <div className="container">{result}</div>
            }
           
        }
       
    } else {
        let result = [];

        for(let key in listEmployee) {
            let idKey = listEmployee[key]["id"];
            result.push(
            <li className="flex space-between" key={key}>
                <div className="flex">
                    <img className="employeeImage margin-right" src={listEmployee[key]["img"]}/>
                    
                    <div>  
                        <p>{listEmployee[key]["sourName"]}</p>

                        <p>{listEmployee[key]["name"]}</p>
                    
                        <p>{listEmployee[key]["secondName"]}</p>
                        
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