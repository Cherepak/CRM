import React from "react";
import ReactDOM, { render } from "react-dom";
import {listMyTask, massage} from "../../storeTest";
import {store} from "../../../app";
import {updateDate} from "../../actions/contentTableWork/actionTableWork";

export function TableWork () {
    
    function DontReadyMassage() {
        let result = [];
        for(let key in massage) {
            if (massage[key]["state"] === false) {
                result.push(massage[key])
            }
        }
        return result.length
    }

    function DontCompliteTask() {
        let result = [];
        for(let key in listMyTask) {
            if (listMyTask[key]["status"] === false) {
                result.push(listMyTask[key])
            }
        }
        return result.length
    }

    return <div className="container flex space-between">
        <section className="">
            <h2 className="sr-only">Задачи:</h2>
            <div className="flex flex-center">
                <h2 className="margin-right">
                    Задачи:
                </h2>
                <p>У Вас накопилось: <DontCompliteTask/> задачи</p>
            </div>
            <button>Перейти к задачам</button>
        </section>

        <section>
            <h2 className="sr-only">Сообщения:</h2>
            <div className="flex flex-center">
                <h2 className="margin-right">Сообщения:</h2>
                У вас: <DontReadyMassage/> не прочитанных сообщений
            </div>
            <button>Перейти к сообщениям</button>
        </section>

        <section className="flex ">
            <h2 className="margin-right">Сегодня: </h2>
            <div>
                <p>{store.getState().time.toLocaleDateString()}</p>
                <p>{store.getState().time.toLocaleTimeString()}</p>
            </div>
        
        </section>
    </div>
}

//    setInterval(() => {
//         store.dispatch(updateDate())
//    }, 1000)
