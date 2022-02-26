import React from "react";
import ReactDOM, { render } from "react-dom";
import {createStore} from "redux"
import {connect, Provider} from "react-redux"
import {Main} from "./modules/main";
import {reducer} from "./modules/reducers/reducer.js"
import {listEmployee} from "./modules/storeTest"

export const initialState = {
  status: "admin",
  TableWork  : false,
  Employee  : true,
    addEmployee:false,
    profile: false,
    profileRedact: false,
  Task : false,
  Sklad  : false,
  Clientele : false,
  Massage : false,
  Setting : false,
    
}

export const store = createStore(reducer, initialState);

function App (state) {

  return (
    <div>
      <Main/>
    </div>
  )
}
const mapStateToProps = (state) => {

    return {
      TableWork  : state.TableWork,
      Employee  : state.Employee,
        addEmployee: state.addEmployee,
        profile: state.profile,
        profileRedact: state.profileRedact,
      Task : state.Task,
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
