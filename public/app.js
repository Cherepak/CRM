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
    addTask: false,
    added:false,
    report: false,
  Reports: false,
  Sklad  : false,
  Clientele : false,
  Massage : false,
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
        addTask: state.addTask,
        added: state.added,
        report: state.report,
      Reports: state.Reports,
      Sklad  : state.Sklad,
      Clientele : state.Clientele,
      Massage : state.Massage,
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
