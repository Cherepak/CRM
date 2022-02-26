import React from "react";
import ReactDOM, { render } from "react-dom";
import {store} from "../../../app"
import {myTask} from "../../actions/contentTask/contentTask"
import {addTask} from "../../actions/contentTask/contentTask"



export function Task () {
    return <div className="flex">
        <div className="leftBlock">
            <button
            onClick={()=> {
                store.dispatch(myTask())
            }}>Мои задачи</button>
            <button
            onClick={()=> {
                store.dispatch(addTask())
            }}>Поставить задачу</button>
        </div>

        <div>

        </div>
    </div>
}