import React from "react";
import ReactDOM, { render } from "react-dom";
import {store} from "../../../app";
import {listEmployee} from "../../storeTest";

export function TaskContent() {
    if(store.getState().myTask) {
        return <div>
            myTask
        </div>
    } 
    else if(store.getState().allTask) {
        return <div>allTask</div>
    }
    else if(store.getState().addTask) {
        
        function ListEmployee () {
            let result = [];
            for (let key in listEmployee) {
                result.push(<option key={key} >{listEmployee[key]["name"]}</option>)
            }
            return <select id="employee">{result}</select>
           }

        return <div>
            <form>
                <div className="margin-bottom">
                    <label className="dispaly-block">Тема</label>
                    <input type="text" name="titleTask" id="titleTask" placeholder="Тема"/>
                </div>

                <div className="margin-bottom">
                    <label className="dispaly-block">Задача</label>
                    <input type="" name="textTask" id="textTask" placeholder="Задача"/> 
                </div>

                <div className="margin-bottom">
                    <label className="dispaly-block">Дата окончания</label>
                    <input type="date" name="date" id="dateTask"/>
                </div>

                <div className="margin-bottom">
                    <label>Для кого задача</label>
                    <ListEmployee/>
                </div>
            </form>
        </div>
    }
    else {

       

        return <div>
            
        </div>
    }
}