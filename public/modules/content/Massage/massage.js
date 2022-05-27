import React from "react";
import ReactDOM, { render } from "react-dom";
import {store} from "../../../app"
import {massageContent} from "../../actions/contentMassage/actionMassage"

export function Massage () {

    function ListEmploye () {
        let data = store.getState()["listEmployee"];
        let result = data.map((item)=>{
            return <li>
                <button
                    onClick={()=>{
                        let to = item["ФИО"];
                        let from = store.getState()["user"];

                        fetch(`/loadmassage?to=${to}&from=${from}`)
                        .then(response => {
                            return response.json()
                        })
                        .then(data=>{
                            if(data["response"] == true) {  
                                store.dispatch(massageContent(data["data"]))
                                
                            } else if(data["response"] == false) {
                                store.dispatch(massageContent(["Сообщений не найдено"]))
                            }
                        })
                    }}
                >{item["ФИО"]}</button>
            </li>
        })

        return <ul className="leftBlock margin-right">
            {result}
        </ul>
    }

    function ListMassage () {
        if (store.getState()["massageContent"]) {

            function Result () {
                if(store.getState()["dataMassage"] == "Сообщений не найдено") {
                    return <div>Сообщений не найдено</div>
                }   
                else {
                    let massage = store.getState()["dataMassage"];

                    console.log(massage);

                    return <div>

                    </div>
                }
            }

            return <div className="wrapperMassage">
                
                <Result/>

            <form className="formMassage">
                <textarea className="massage d-block" id="massage" name="massage" type={"text"} placeholder="Сообщение" required></textarea>
                <button onClick={()=>{

                }}>

                Отправить</button>
            </form>
        </div>
        } else {
            return <div></div>
        }
    }

    return <div className="flex">
        <ListEmploye/>
        <ListMassage/>

        
    </div>
}