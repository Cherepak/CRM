import React from "react";
import ReactDOM from "react-dom";

export function OpenClientCard (props) {
    const {data} = props.props.props.props.props.props.state;
    const componentAddCorrectClient = props.props.props.props.props.props.componentAddCorrectClient;
    let result = [];



    for(let key in data) {
        let менеджер = data[key]["менеджер"];
        let фамилия = data[key]["фамилия"];
        let имя = data[key]["имя"];
        let отчество =  data[key]["отчество"];        
        let почтаклиента = data[key]["почтаклиента"];
        let телефонклиента = data[key]["телефонклиента"];
        let лицо = data[key]["лицо"];
        let инн = data[key]["инн"];
        let огрн = data[key]["огрн"];
        let банк = data[key]["банк"];
        let кпп = data[key]["кпп"];
        let окпо = data[key]["окпо"];
        let расчетныйсчет = data[key]["расчетныйсчет"];
        let название = data[key]["название"];
        let комментарии = data[key]["комментарии"];
        let юридическийадрес = data[key]["юридическийадрес"];
        let фактическийадрес = data[key]["фактическийадрес"];

        if(data[key]["лицо"] == "физическое"){
                result.push(
                    <div>
                        <ul>
                        <li className="flex">
                            <span id="menedger">{менеджер}</span>
                            <input className="form-employee__input input"
                            type="text"
                            id="inputmenedger"
                            name="namecorp" placeholder="менеджер"
                            onInput={()=>{
                                const x = $("#inputmenedger").val();
                                $("#menedger").html(x);                                
                                менеджер = x;
                            }}/>
                        </li>
                        <li className="flex">
                            <span id="family">{фамилия}</span>
                            <input className="form-employee__input input"
                            type="text"
                            id="inputfamily"
                            name="family" placeholder="Фамилия"
                            onInput={()=>{
                                const x = $("#inputfamily").val();
                                $("#family").html(x);
                                фамилия = x;
                            }}/>
                        </li>
                        <li className="flex">
                            <span id="name">{имя}</span>
                            <input className="form-employee__input input"
                            type="text"
                            id="inputname"
                            name="name" placeholder="Имя"
                            onInput={()=>{
                                const x = $("#inputname").val();
                                $("#name").html(x);
                                имя = x;
                            }}/>
                        </li>
                        <li className="flex">
                            <span id="sourname">{отчество}</span>
                            <input className="form-employee__input input"
                            type="text"
                            id="inputsourname"
                            name="sourname" placeholder="Отчество"
                            onInput={()=>{
                                const x = $("#inputsourname").val();
                                $("#sourname").html(x);
                                отчество = x;
                            }}/>
                        </li>
                        <li className="flex">
                            <span id="mail">{почтаклиента}</span>
                            <input className="form-employee__input input"
                            type="text"
                            id="inputmail"
                            name="mail" placeholder="Эл.почта"
                            onInput={()=>{
                                const x = $("#inputmail").val();
                                $("#mail").html(x);
                                почтаклиента = x;
                            }}/>
                        </li>
                        <li className="flex">
                            <span id="phone">{телефонклиента}</span>
                            <input className="form-employee__input input"
                            type="number"
                            id="inputphone"
                            name="phone" placeholder="телефон"
                            onInput={()=>{
                                const x = $("#inputphone").val();
                                $("#phone").html(x);
                                телефонклиента = x;
                            }}/>
                        </li>
                        <li className="flex">
                            <p className="center">Лицо:</p>
                            <span id="face">{лицо}</span>
                            <select id="inputface" onInput={()=>{
                                const x = $("#inputface").val();
                                $("#face").html(x);
                                лицо = x;
                            }}>
                                <option value="физическое">физическое</option>
                                <option value="юридическое">юридическое</option>
                            </select>
                        </li>
                        <li className="flex">
                            <span id="factid">{фактическийадрес}</span>
                            <input className="form-employee__input input"
                            type="number"
                            id="inputjurid"
                            name="raschSch" placeholder="Фактический адрес"
                            onInput={()=>{
                            const x = $("#inputfactid").val();
                            $("#factid").html(x);
                            фактическийадрес = x;
                            }}/>
                        </li>
                        </ul>
                        <button numberid={`${data[key]["id"]}`} onClick={(el)=> {
                            console.log(менеджер)
                            const id = el.target.getAttribute("numberid");
                            componentAddCorrectClient(id, менеджер,название,фамилия,имя,отчество,почтаклиента,телефонклиента,лицо, инн,огрн, банк,кпп,окпо,расчетныйсчет,юридическийадрес,фактическийадрес)
                        }}>Внести изменения</button>
                    </div>
                )
        } else if(data[key]["лицо"] == "юридическое") {
                result.push(
                            <div>
                                <ul>
                                <li className="flex">
                                    <span id="menedger">{менеджер}</span>
                                    <input className="form-employee__input input"
                                    type="text"
                                    id="inputmenedger"
                                    name="namecorp" placeholder="менеджер"
                                    onInput={()=>{
                                        const x = $("#inputmenedger").val();
                                        $("#menedger").html(x);
                                        менеджер = x;
                                    }}/>
                                </li>
                                    <li className="flex">
                                        <span id="namecorp">{название}</span>
                                        <input className="form-employee__input input"
                                        type="text"
                                        id="inputnamecorp"
                                        name="namecorp" placeholder="Название организации"
                                        onInput={()=>{
                                            const x = $("#inputnamecorp").val();
                                            $("#namecorp").html(x);
                                            название = x;
                                        }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="family">{фамилия}</span>
                                        <input className="form-employee__input input"
                                        type="text"
                                        id="inputfamily"
                                        name="family" placeholder="Фамилия"
                                        onInput={()=>{
                                            const x = $("#inputfamily").val();
                                            $("#family").html(x);
                                            фамилия = x;
                                        }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="name">{имя}</span>
                                        <input className="form-employee__input input"
                                        type="text"
                                        id="inputname"
                                        name="name" placeholder="Имя"
                                        onInput={()=>{
                                            const x = $("#inputname").val();
                                            $("#name").html(x);
                                            имя = x;
                                        }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="sourname">{отчество}</span>
                                        <input className="form-employee__input input"
                                        type="text"
                                        id="inputsourname"
                                        name="sourname" placeholder="Отчество"
                                        onInput={()=>{
                                            const x = $("#inputsourname").val();
                                            $("#sourname").html(x);
                                            отчество = x;
                                        }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="mail">{почтаклиента}</span>
                                        <input className="form-employee__input input"
                                        type="text"
                                        id="inputmail"
                                        name="mail" placeholder="Эл.почта"
                                        onInput={()=>{
                                            const x = $("#inputmail").val();
                                            $("#mail").html(x);
                                            почтаклиента = x;
                                        }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="phone">{телефонклиента}</span>
                                        <input className="form-employee__input input"
                                        type="number"
                                        id="inputphone"
                                        name="phone" placeholder="телефон"
                                        onInput={()=>{
                                            const x = $("#inputphone").val();
                                            $("#phone").html(x);
                                            телефонклиента = x;
                                        }}/>
                                    </li>
                                    <li className="flex">
                                        <p className="center">Лицо:</p>
                                        <span id="face">{лицо}</span>
                                        <select id="inputface" onInput={()=>{
                                            const x = $("#inputface").val();
                                            $("#face").html(x);
                                            лицо = x;
                                        }}>
                                            <option value="физическое">физическое</option>
                                            <option value="юридическое">юридическое</option>
                                        </select>
                                    </li>
                                    <li className="flex">
                                        <span id="inn">{инн}</span>
                                        <input className="form-employee__input input"
                                        type="number"
                                        id="inputinn"
                                        name="inn" placeholder="ИНН"
                                        onInput={()=>{
                                    const x = $("#inputinn").val();
                                    $("#inn").html(x);
                                    инн = x;
                                }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="ogrn">{огрн}</span>
                                        <input className="form-employee__input input"
                                        type="number"
                                        id="inputogrn"
                                        name="ogrn" placeholder="ОГРН"
                                        onInput={()=>{
                                    const x = $("#inputogrn").val();
                                    $("#ogrn").html(x);
                                    огрн = x;
                                }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="bank">{банк}</span>
                                        <input className="form-employee__input input"
                                        type="text"
                                        id="inputbank"
                                        name="bank" placeholder="Банк"
                                        onInput={()=>{
                                    const x = $("#inputbank").val();
                                    $("#bank").html(x);
                                    банк = x;
                                }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="kpp">{кпп}</span>
                                        <input className="form-employee__input input"
                                        type="number"
                                        id="inputkpp"
                                        name="kpp" placeholder="КПП"
                                        onInput={()=>{
                                    const x = $("#inputkpp").val();
                                    $("#kpp").html(x);
                                    кпп = x;
                                }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="okpo">{окпо}</span>
                                        <input className="form-employee__input input"
                                        type="number"
                                        id="inputokpo"
                                        name="okpo" placeholder="ОКПО"
                                        onInput={()=>{
                                    const x = $("#inputokpo").val();
                                    $("#okpo").html(x);
                                    окпо = x;
                                }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="raschSch">{расчетныйсчет}</span>
                                        <input className="form-employee__input input"
                                        type="number"
                                        id="inputraschSch"
                                        name="raschSch" placeholder="Расчетный счет"
                                        onInput={()=>{
                                        const x = $("#inputraschSch").val();
                                        $("#raschSch").html(x);
                                        расчетныйсчет = x;
                                        }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="jurid">{юридическийадрес}</span>
                                        <input className="form-employee__input input"
                                        type="number"
                                        id="inputjurid"
                                        name="jurid" placeholder="Юридический адрес"
                                        onInput={()=>{
                                        const x = $("#inputjurid").val();
                                        $("#jurid").html(x);
                                        юридическийадрес = x;
                                        }}/>
                                    </li>
                                    <li className="flex">
                                        <span id="factid">{фактическийадрес}</span>
                                        <input className="form-employee__input input"
                                        type="number"
                                        id="inputjurid"
                                        name="raschSch" placeholder="Фактический адрес"
                                        onInput={()=>{
                                        const x = $("#inputfactid").val();
                                        $("#factid").html(x);
                                        фактическийадрес = x;
                                        }}/>
                                    </li>
                            </ul>

                            <button numberid={`${data[key]["id"]}`} onClick={(el)=> {
                                const id = el.target.getAttribute("numberid");
                                componentAddCorrectClient(id, менеджер,название,фамилия,имя,отчество,почтаклиента,телефонклиента,лицо, инн,огрн, банк,кпп,окпо,расчетныйсчет,юридическийадрес,фактическийадрес)
                            }}>Внести изменения</button>
                            </div>
        )
        } else {
            return <div></div>
        }
    }

    return result;
}