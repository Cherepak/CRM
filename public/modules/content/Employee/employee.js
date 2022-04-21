import React from "react";
import { store } from "../../../app";

import {openProfile,
    closeProfile,
    profileRedact,
    closeRedactEployee,
    addEmployee,
    closeAddEployee
} from "../../actions/contentEmployee/actionsForEmployeeWrapper"

export function  Employee () {

    let listEmployee = store.getState()["listEmployee"];
    
    if (store.getState()["profile"]) {//профиль сотрудника
        let result = [];

        for(let key in listEmployee) {
          
            if(listEmployee[key]["id"] == store.getState()["id"]) {
    
                result.push(
                    <div className="flex">
                        <img className="employeeImage margin-right" 
                        src={listEmployee[key]["Фотография"]} 
                        alt="Фото сотрудника"/>
                        
                        <div> 
                            <p> {listEmployee[key]["ФИО"]}</p>

                            <p>Дата рождения: {listEmployee[key]["Датарождения"]}</p>

                            <p>Почта: {listEmployee[key]["Почта"]}</p>
                        
                            <p>Номер телефона: {listEmployee[key]["Номер"]}</p>

                            { store.getState()["Статус"] == "admin" ? <button
                            onClick={()=> {
                                store.dispatch(profileRedact())
                            }}>Редактировать профиль</button>: ""}
                        </div>
                    </div>

                );

                return <div className="container flex space-between flex-start">
                        {result}
                        <div>
                        <button  onClick={()=>{
                                store.dispatch(closeProfile())
                            }}>Вернуться</button>
                        </div>
                    </div>
            }
           
        }
       
    } 
    else if (store.getState()["profileRedact"]) { //редактировать профиль
        let id = store.getState()["id"];

        return <div className="container flex space-between flex-start">
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
    } else if (store.getState()["addEmployee"]) {//добавить сотрудника
        return <div className="container flex space-between flex-start">
        <div>
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
                type="date" 
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
                <label className="d-block ">Отдел</label>
                <input
                className="inputRedactEmployee" 
                type="text" 
                id="structure" 
                name="structure" 
                placeholder="Отдел"/>
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
                <label className="d-block ">Статус</label>
                <select id="status">
                    <option value={"user"}>User</option>
                    <option value={"admin"}>Admin</option>
                </select>
            </div>
            {/* <div>
                <label className="d-block ">Загрузить фотографию</label>
                <input
                className="inputRedactEmployee" 
                type="file" 
                accept="image"
                id="img" 
                name="img" 
                />
            </div> */}

            <button onClick={()=>{
                let sourName = document.getElementById("sourName").value;
                let name = document.getElementById("name").value;
                let secondName = document.getElementById("secondName").value;
                let birthday = document.getElementById("birthday").value;
                let mail = document.getElementById("email").value;
                let tel  = document.getElementById("tel").value;
                let status  = document.getElementById("status").value;
                let structure  = document.getElementById("structure").value;

                fetch(`addrpofile?отдел=${structure}&статус=${status}&фамилия=${sourName}&имя=${name}&отчество=${secondName}&датарождения=${birthday}&почта=${mail}&номер=${tel}`)
                .then(result => {
                    return result.json()
                })
                .then(data=>{
                    console.log(data)
                    if(data.status){
                      alert("Данные добавлены")
                    } else if (data.status == false){
                        alert('Что то пошло не так')
                    }
                })
                .catch(err => {
                    console.log("Ошибка " + err)
                })
            }}>Отправить</button>
        </div>

        <button onClick={()=> {
            store.dispatch(closeAddEployee())
        }}>Вернуться</button>
    </div>
        
    } else {// начальная страничка
        let result = [];

        for(let key in listEmployee) {

            let idKey = listEmployee[key]["id"];
            result.push(
            <li className="flex flex-center space-between margin-bottom" key={key}>
                <div className="flex">
                    <img className="employeeImage margin-right" 
                    src={listEmployee[key]["Фотография"]}
                    alt="Фотография сотрудника"/>
                    
                    <div>  

                        <p>{listEmployee[key]["ФИО"]}</p>

                        <p>{listEmployee[key]["Отдел"]}</p>
                        
                        <p>{listEmployee[key]["Почта"]}</p>
                    
                        <p>{listEmployee[key]["Номер"]}</p>

                    </div>
                </div>

                <button onClick={()=>{
                    store.dispatch(openProfile(idKey))
                }}>Открыть профиль</button>

                
            </li>
            )
        }
        return <div className=" flex">
            { store.getState()["status"] == "admin" ? 
            <div className="leftBlock margin-right">
                <button onClick={()=> {
                    store.dispatch(addEmployee())
                }}>Добавить сотрудника</button>
            </div> : ""}
            
            <ul className="">{result}</ul>
        </div>
    }
    


}
