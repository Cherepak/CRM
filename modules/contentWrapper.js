import React from "react";
import ReactDOM from "react-dom";

import {Massage} from "./content/Massage/massage"
import {Setting} from "./content/Setting/setting"
import {Sklad} from "./content/Sklad/sklad"
import {TableWork} from "./content/TableWork/tableWork"
import {Task} from "./content/Task/task"
import {Employee} from "./content/Employee/employee"
import {Clientle} from "./content/Clientle/clientle"
import {store} from "../app"


export function ContentWrapper (props) {

  if(store.getState()["TableWork"]) {
    return <TableWork />;
  } else if(store.getState()["Employee"]) {
    return <Employee />;
  } else if(store.getState()["Task"]) {
    return <Task />;
  } else if(store.getState()["Sklad"]) {
    return <Sklad />;
  } else if(store.getState()["Clientele"]) {
    return <Clientle />;
  } else if(store.getState()["Massage"]) {
    return <Massage />;
  } else if(store.getState()["Setting"]) {
    return <Setting />;
  } else {
    return <div></div>
  }
}
