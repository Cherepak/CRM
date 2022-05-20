import React from "react";
import {report,allTask,addedTask,myTask} from "../../actions/contentTask/contentTask"
import {store} from "../../../app";

export function TaskContent() {

    if(store.getState()["allTask"]) {//Показать все мои задачи
        let data = store.getState()["dataMyTask"];

        let result = []; 

        for( let key in data ) {
            
            result.push(
                <li className="taskCard" key={`${data[key]["id"]}` } style={data[key]["Статус"] == "true" ? {"backgroundColor": "rgb(17 249 8 / 38%)", }: {"backgroundColor": "rgb(249 8 8 / 38%)"}}>
                    <h2>{data[key]["Тема"]}</h2>

                    <p>{data[key]["Задача"]}</p>

                    <p>{data[key]["Поставил"]}</p>

                    <p>Статус: {data[key]["Статус"] == "true"  ?"Выполнено" : "Не выполнено" }</p>

                    <p>Начало: {data[key]["Начало"]}</p>

                    <p>Окончание: {data[key]["Окончание"]}</p>

                    {data[key]["Статус"] == "false" ? 
                   <button data-elem={`${data[key]["id"]}`} onClick={(elem)=> {
                    let id = elem.target.getAttribute("data-elem")
                    store.dispatch(report(id))
                    }}>Составить отчет
                    </button> : <button>Посмотреть отчет</button>}
                </li>
            )
        }
        return <div>
            <h1>Все мои задачи</h1>
            <ul>{result}</ul>
        </div>

    } else if (store.getState()["myTask"]) {//показать только текущие задачи
        
        let data = store.getState()["dataMyTask"];

        let result = []; 

        for( let key in data ) {
            result.push(
                <li className="taskCard" key={`${data[key]["id"]}` } style={data[key]["Статус"] == "true" ? {"backgroundColor": "rgb(17 249 8 / 38%)", }: {"backgroundColor": "rgb(249 8 8 / 38%)"}}>
                    <h2>{data[key]["Тема"]}</h2>

                    <p>{data[key]["Задача"]}</p>

                    <p>{data[key]["Поставил"]}</p>

                    <p>Статус: {data[key]["Статус"] == "true" ? "Выполнено" : "Не выполнено" }</p>

                    <p>Начало: {data[key]["Начало"]}</p>

                    <p>Окончание: {data[key]["Окончание"]}</p>

                    {data[key]["Статус"] == "false" ? 
                    <button data-elem={`${data[key]["id"]}`} onClick={(elem)=> {
                        let id = elem.target.getAttribute("data-elem")
                        
                        store.dispatch(report(id))
                    }}>Составить отчет
                    </button> : <button>Посмотреть отчет</button>}
                </li>
            )
        }
        return <div>
            <h1>Все мои текущие задачи</h1>
            <ul>{result}</ul>
        </div>
    } else if (store.getState()["added"]) {//показать только текущие задачи
        
        let data = store.getState()["addedTask"];

        let result = []; 

        for( let key in data ) {
            result.push(
                <li className="taskCard" key={`${data[key]["id"]}` } style={data[key]["Статус"] == "true" ? {"backgroundColor": "rgb(17 249 8 / 38%)", }: {"backgroundColor": "rgb(249 8 8 / 38%)"}}>
                    <h2>{data[key]["Тема"]}</h2>

                    <p>{data[key]["Задача"]}</p>

                    <p>{data[key]["Кому"]}</p>

                    <p>Статус: {data[key]["Статус"] == "true" ? "Выполнено" : "Не выполнено" }</p>

                    <p>Начало: {data[key]["Начало"]}</p>

                    <p>Окончание: {data[key]["Окончание"]}</p>
                </li>
            )
        }
        return <div>
            <h1>Все задачи от меня</h1>
            <ul>{result}</ul>
        </div>
    } else if (store.getState()["addTask"]) {//Добавить задачу
       
        let data = store.getState()["listAmployee"];
        let option = [];
        for(let key in data) {
            option.push(
                <option 
                key={key} 
                value={data[key]["ФИО"]}>
                    {data[key]["ФИО"]}
                </option>
            )
        }

        return <div>
            <div>
                <label className="d-block">Исполнитель:</label>
                <select id="to">
                   {option}
                </select>
            </div>
            <div>
                <label className="d-block">Тема:</label>
                <input className="inputRedactEmployee" type="text" name="subject" id="subject" placeholder="Тема" required/>
            </div>
            <div>
                <label className="d-block">Задча:</label>
                <textarea className="inputRedactEmployee" name="task" id="task" placeholder="Задача" required></textarea>
            </div>
            <div>
                <label className="d-block">Дедлайн: </label>
                <input className="inputRedactEmployee" type="date" name="deadline" id="deadline" />
            </div>
            <button onClick={()=>{
                let to = document.getElementById("to").value;
                let task = document.getElementById("task").value;
                let date = document.getElementById("deadline").value;
                let subject = document.getElementById("subject").value;
                let from = store.getState()["user"];
                fetch(`/addtask?to=${to}&date=${date}&task=${task}&subject=${subject}&from=${from}`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if(data["answer"]) {
                        alert("Данные отправлены и записаны");
                    } else {
                        alert("Возникла ошибка, возможно заполнены не все поля")
                    }
                })
            }}>Добавить</button>
        </div>
    } else if (store.getState()['report']) {//Составление отчета

        let data = store.getState()["dataMyTask"];
        let result = []; 

        for( let key in data ) {
            if(data[key]["id"] == store.getState()["reportId"]) {
                result.push(
                    <li className="taskCard" key={`${data[key]["id"]}` } style={data[key]["Статус"] == "true" ? {"backgroundColor": "rgb(17 249 8 / 38%)", }: {"backgroundColor": "rgb(249 8 8 / 38%)"}}>
                        <h2>{data[key]["Тема"]}</h2>
    
                        <p>{data[key]["Задача"]}</p>
    
                        <p>{data[key]["Поставил"]}</p>
    
                        <p>Статус: {data[key]["Статус"] == "true" ? "Выполнено" : "Не выполнено" }</p>
    
                        <p>Начало: {data[key]["Начало"]}</p>
    
                        <p>Окончание: {data[key]["Окончание"]}</p>
    
                        <div>
                            <label>Комментарий</label>
                            <textarea id="comment" placeholder="Комментарий к задаче"></textarea>
                        </div>
    
                        <button data-elem={`${data[key]["id"]}`} onClick={(elem)=> {
                             let id = elem.target.getAttribute("data-elem");
                             let comment = document.getElementById("comment").value;
                             fetch(`/changestatustask?id=${id}&comment=${comment}`)
                             .then(response => {
                                 return response.json();
                             })
                             .then(data => {
                                 if(data["answer"]) {
                                     alert("Статус задачи изменен")
                                 } else {
                                     alert("Возникла ошибка")
                                 }
                             })
                        }}>Отправить отчет</button>
                    </li>
                ) 
                } 
        }
        return <div>
               <h1>Составление отчета</h1>
            <ul>{result}</ul>
        </div>

    }
    
    else {
        return <div></div>
    }
    

    
}