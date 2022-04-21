import React from "react";
import {store} from "../../../app";

export function TaskContent() {
    return <div></div>
    // if(store.getState().myTask) {
    //      let result = [];

    //     for(let key in listMyTask) {
    //         if(!listMyTask[key]["status"]) {
    //             result.push(
    //                 <li key={key}>
    //                     <h2>Тема: {listMyTask[key]["title"]}</h2>
    //                     <p>Задача: {listMyTask[key]["text"]}</p>
    //                     <p>Начало: {listMyTask[key]["dateStart"].toLocaleDateString()}.</p>
    //                     <p>Окончание: {listMyTask[key]["dateFinish"].toLocaleDateString()}</p>
    //                     {listMyTask[key]["status"] ? "Выполнено":"Не выполнено"}
    //                 </li>);
    //         } 
    //     }
        
    //     return <ul>{result}</ul>
    // } else if (store.getState().added) {
    //     return <div></div>
    // } 
    // else if(store.getState().allTask) {
    //     let result = [];

    //     for(let key in listMyTask) {
    //         result.push(
    //         <li key={key}>
    //             <h2>Тема: {listMyTask[key]["title"]}</h2>
    //             <p>Задача: {listMyTask[key]["text"]}</p>
    //             <p>Начало: {listMyTask[key]["dateStart"].toLocaleDateString()}.</p>
    //             <p>Окончание: {listMyTask[key]["dateFinish"].toLocaleDateString()}</p>
    //             {listMyTask[key]["status"] ? "Выполнено":"Не выполнено"}
    //         </li>);
    //     }
        
    //     return <ul>{result}</ul>
    // }
    // else if(store.getState().addTask) {
        
    //     function ListEmployee () {
    //         let result = [];
    //         for (let key in listEmployee) {
    //             result.push(<option key={key} >{listEmployee[key]["name"]}</option>)
    //         }
    //         return <select id="employee">{result}</select>
    //        }

    //     return <div>
    //         <form>
    //             <div className="margin-bottom">
    //                 <label className="dispaly-block">Тема</label>
    //                 <input type="text" name="titleTask" id="titleTask" placeholder="Тема"/>
    //             </div>

    //             <div className="margin-bottom">
    //                 <label className="dispaly-block">Задача</label>
    //                 <input type="" name="textTask" id="textTask" placeholder="Задача"/> 
    //             </div>

    //             <div className="margin-bottom">
    //                 <label className="dispaly-block">Дата окончания</label>
    //                 <input type="date" name="date" id="dateTask"/>
    //             </div>

    //             <div className="margin-bottom">
    //                 <label>Для кого задача</label>
    //                 <ListEmployee/>
    //             </div>

    //             <button>Отправить</button>
    //         </form>
    //     </div>
    // }
    // else {

       

    //     return <div>
            
    //     </div>
    // }
}