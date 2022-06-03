import React from "react";
import ReactDOM, { render } from "react-dom";
import {createStore} from "redux"
import {connect, Provider} from "react-redux"
import {Main} from "./modules/main";
import {reducer} from "./modules/reducers/reducer.js"


export const initialState = {
  
  user: "Антонов Антон Антонович",
  status: "admin",
  TableWork  : true,
  Employee  : false,
    addEmployee:false,
    profile: false,
    profileRedact: false,
  Task : false,
    allTask:false,
    myTask: false,
    doneTask: false,
    addTask: false,
    added:false,
    report: false,
  Reports: false,
  Sklad  : false,
  Clientele : false,
    organization: false ,
    cliente: false,
    addCliente:false,
    organizationFace:false,
    fizFace: false,
    moreAboutOrganization: false,
    moreAboutFizFace: false,
    redactFizFace: false,
    redactOrganization: false,
  Massage : false,
    massageContent:false,
    dataMassage: [],
    to: [],
  Contract: false,
  Setting : false,
    
}

export const store = createStore(reducer, initialState);

function App () {

  return (
    <div>
      <Main/>
    </div>
  )
}
const mapStateToProps = (state) => {

    return {
      user: state.user,
      TableWork  : state.TableWork,
      Employee  : state.Employee,
        addEmployee: state.addEmployee,
        profile: state.profile,
        profileRedact: state.profileRedact,
      Task : state.Task,
        allTask: state.allTask,
        myTask: state.myTask,
        doneTask: state.doneTask,
        addTask: state.addTask,
        added: state.added,
        report: state.report,
      Reports: state.Reports,
      Sklad  : state.Sklad,
      Clientele : state.Clientele,
        organization: state.organization,
        cliente: state.cliente,
        addCliente: state.addCliente,
        organizationFace:state.organizationFace,
        fizFace: state.fizFace,
        moreAboutOrganization: state.moreAboutOrganization,
        moreAboutFizFace: state.moreAboutFizFace,
        redactFizFace: state.redactFizFace,
        redactOrganization: state.redactOrganization,
      Massage : state.Massage,
        massageContent:state.massageContent,
        dataMassage: state.dataMassage,
        to: state.to,
      Contract: state.Conrtact,
      Setting : state.Setting,
    }
}

const WrapperMainComponent = connect(mapStateToProps)(App);

export function noSubmit(event) {
  event.preventDefault();
}


ReactDOM.render(
<Provider store = {store}>
  <WrapperMainComponent/>
</Provider>, document.getElementById("root")
);
