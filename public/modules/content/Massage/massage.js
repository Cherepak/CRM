import React from "react";
import {store} from "../../../app"
import {massageContent} from "../../actions/contentMassage/actionMassage"

let socket = new WebSocket("ws://");

export function Massage () {

    function ListEmploye () {
        let data = store.getState()["listEmployee"];
        let result = data.map((item)=>{
            return <li key={item["id"]}>
                <button // при клике по каждому сотруднику загружается история сообщений с ним
                    onClick={()=>{
                        let to = item["ФИО"];
                        let from = store.getState()["user"];

                        fetch(`/loadmassage?to=${to}&from=${from}`)
                        .then(response => {
                            return response.json()
                        })
                        .then(data=>{
                            
                            if(data["response"] == true) {  
                                
                                store.dispatch(massageContent(data["data"],to) )
                                
                                
                            } else if(data["response"] == false) {
                                store.dispatch(massageContent(["Сообщений не найдено"],to))
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

    function ListMassage () {//
            function Result () {

                let massage = store.getState()["dataMassage"];
                let arr = [];

                massage.map(index => {//объединяем массивы 
                    index.map(index => {
                        arr.push(index)
                    }) 
                })

                arr.sort(//сортируем массив с данными по времени
                    (a,b)=> {
                    if(a["время"] > b["время"]) {
                      
                        return 1;
                    } else if (a["время"] < b["время"]) {
                      
                        return -1;
                    }
                }
                )
          

                let result = arr.map(item => {
                    return <li key={item["id"]}>
                        <span className="nameUserInMassage">{item["от"]}</span> <span>{item["время"]}</span>
                        <p className={item["от"] == store.getState()["user"] ? "from": "to"}>{item["сообщение"]}</p>
                    </li>
                });


                return <ul>
                    {result}
                </ul>
                
            }

            return <div className="wrapperMassage">
                
                <Result/>

            <form className="formMassage" id="form">
                <textarea className="massage d-block" id="massage" name="massage" type={"text"} placeholder="Сообщение" required></textarea>
                <button onClick={()=>{
                    let to = store.getState()["to"];
                    let from = store.getState()["user"];
                    let massage = document.getElementById("massage").value;
                    
                    fetch(`/downloadmassage?to=${to}&from=${from}&massage=${massage}`)
                    .then(()=>{
                        dispatch()
                    })

                    document.getElementById("form").addEventListener("submit", (elem)=>{
                        elem.preventDefault();
                    });

                    document.getElementById("massage").value = "";

                    fetch(`/loadmassage?to=${to}&from=${from}`)//делаем еще один запрос что бы сразу рендерилось окно с диалогом
                        .then(response => {
                            return response.json()
                        })
                        .then(data=>{
                            
                            if(data["response"] == true) {  
                                
                                store.dispatch(massageContent(data["data"],to) )
                                
                                
                            } else if(data["response"] == false) {
                                store.dispatch(massageContent(["Сообщений не найдено"],to))
                            }
                        })
                }}>

                Отправить</button>
            </form>
        </div>
        
    }

    return <div className="flex">
        <ListEmploye/>
        <ListMassage/>

        
    </div>
}