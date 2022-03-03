import React from "react";
import ReactDOM, { render } from "react-dom";
import {createStore} from "redux"
import {connect, Provider} from "react-redux"
import {Main} from "./modules/main";
import {reducer} from "./modules/reducers/reducer.js"
import {listEmployee} from "./modules/storeTest"

export const initialState = {

  user: "Черепаха Дмитрий Вадимович",
  status: "admin",
  TableWork  : false,
    time: new Date,
  Employee  : false,
    addEmployee:false,
    profile: false,
    profileRedact: false,
  Task : true,
    allTask:false,
    myTask: false,
    addTask: false,
  Sklad  : false,
  Clientele : false,
  Massage : false,
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
        time: state.time,
      Employee  : state.Employee,
        addEmployee: state.addEmployee,
        profile: state.profile,
        profileRedact: state.profileRedact,
      Task : state.Task,
        allTask: state.allTask,
        myTask: state.myTask,
        addTask: state.addTask,
      Sklad  : state.Sklad,
      Clientele : state.Clientele,
      Massage : state.Massage,
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
