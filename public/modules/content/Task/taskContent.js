import React from "react";
import {store} from "../../../app";

export function TaskContent() {

    if(store.getState()["allTask"]) {//Показать все мои задачи
        let data = store.getState()["dataAllMyTask"];

        let result = []; 

        for( let key in data ) {
            result.push(
                <li key={`${data[key]["id"]}`}>
                    <h2>{data[key]["Тема"]}</h2>

                    <p>{data[key]["Задача"]}</p>

                    <p>{data[key]["Поставил"]}</p>

                    <p>Статус: {data[key]["Статус"] == "true"  ?"Выполнено" : "Не выполнено" }</p>

                    <p>Начало: {data[key]["Начало"]}</p>

                    <p>Окончание: {data[key]["Окончание"]}</p>
                </li>
            )
        }
        return <div>
            <h1>Все Ваши задачи</h1>
            <ul>{result}</ul>
        </div>

    } else if (store.getState()["myTask"]) {//показать только текущие задачи
        
        let data = store.getState()["dataMyTask"];

        let result = []; 

        for( let key in data ) {
            result.push(
                <li key={`${data[key]["id"]}`}>
                    <h2>{data[key]["Тема"]}</h2>

                    <p>{data[key]["Задача"]}</p>

                    <p>{data[key]["Поставил"]}</p>

                    <p>Статус: {data[key]["Статус"] == "true" ? "Выполнено" : "Не выполнено" }</p>

                    <p>Начало: {data[key]["Начало"]}</p>

                    <p>Окончание: {data[key]["Окончание"]}</p>
                </li>
            )
        }
        return <div>
            <h1>Все Ваши текущие задачи</h1>
            <ul>{result}</ul>
        </div>
    } else if (store.getState()["added"]) {//показать только текущие задачи
        
        let data = store.getState()["addedTask"];

        let result = []; 

        for( let key in data ) {
            result.push(
                <li key={`${data[key]["id"]}`}>
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
            <h1>Все Ваши текущие задачи</h1>
            <ul>{result}</ul>
        </div>
    }
    
    else {
        return <div></div>
    }
    

    
}