import React from "react";
import ReactDOM, { render } from "react-dom";
import {store} from "../../../app"
import {myTask,addTask,allTask} from "../../actions/contentTask/contentTask"
import {TaskContent} from "./taskContent"


export function Task () {
    return <div className="flex">
        <ul className="leftBlock margin-right">
            <li>
                <button
                onClick={()=> {
                    store.dispatch(allTask())
                }}>Все задачи</button>
            </li>

            <li>
                <button
                onClick={()=> {
                    store.dispatch(myTask())
                }}>Текущие задачи</button>
            </li>

            <li>
                <button
                onClick={()=> {
                    store.dispatch(addTask())
                }}>Поставить задачу</button>
            </li>
        </ul>

       <TaskContent/>
    </div>
}