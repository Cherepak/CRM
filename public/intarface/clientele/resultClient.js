import React from "react";
import ReactDOM from "react-dom";


import {AddClientele} from "./addClientele";

import {ResultMyClientCorp} from "./ResultMyClientCorp"
import {ResultMyClientFiz} from "./ResultMyClientFiz"

export function ResultClient (props) {

  const {ClicentMyFiz, ClicentMyCorp,addClientele} = props.props.props.props.props.state;

  if(ClicentMyCorp) {
    return <div>
      <ResultMyClientCorp props={props}/>
    </div>;

  } else if (ClicentMyFiz) {
    return <div>
      <ResultMyClientFiz props={props}/>
    </div>

  } else if(addClientele) {
    return <AddClientele props={props}/>
  } else {
    return <div></div>
  }

}
