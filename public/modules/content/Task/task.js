import React from "react";
import {store} from "../../../app"
import {myTask,addTask,allTask,addedTask} from "../../actions/contentTask/contentTask"
import {TaskContent} from "./taskContent"


export function Task () {
    return <div className="flex">
        <ul className="leftBlock margin-right">
            <li>
                <button
                onClick={()=> {//запрос на все задачи
                    let name = store.getState()["user"]
                
                    fetch(`/allmytask?name=${name}`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        store.dispatch(allTask(data))
                    })
                }}>Все мои задачи</button>
            </li>

            <li>
                <button
                onClick={()=> {// запрос на текущие задачи
                    let name = store.getState()["user"]

                    fetch(`/mytask?name=${name}`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        store.dispatch(myTask(data))
                    })
                }}>Текущие задачи</button>
            </li>

            <li>
                <button
                onClick={()=> {//запрос на задачи который поставил пользователь
                    let name = store.getState()["user"]
                
                    fetch(`/addedtask?name=${name}`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        store.dispatch(addedTask(data))
                    })

                    
                }}>Поставленные задачи</button>
            </li>

            <li>
                <button
                onClick={()=> {//остановился тут
                    
                fetch("/listEmployee")//разобраться как из промиса выгрузить во внешнюю функцию данные
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    store.dispatch(addTask(data))
                })

                    
                }}>Поставить задачу</button>
            </li>
        </ul>

       <TaskContent/>
    </div>
}