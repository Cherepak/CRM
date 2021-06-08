import React from "react";
import ReactDOM from "react-dom";


import {AddClientele} from "./addClientele";

import {ResultMyClientCorp} from "./ResultMyClientCorp"
import {ResultMyClientFiz} from "./ResultMyClientFiz"
import {ResultAllClientFiz} from "./ResultAllClientFiz"
import {ResultAllClientCorp} from "./ResultAllClientCorp"
import {OpenClientCard} from "./OpenClientCard"

export function ResultClient (props) {

  const {ClicentMyFiz, ClicentMyCorp,addClientele, ClientAllFiz, ClientAllCorp,openClientCard} = props.props.props.props.props.state;

  if(ClicentMyCorp) {
    return <div>
      <ResultMyClientCorp props={props}/>
    </div>;

  } else if (ClicentMyFiz) {
    return <div>
      <ResultMyClientFiz props={props}/>
    </div>

  } else if(ClientAllFiz) {
    return <ResultAllClientFiz props={props}/>
  } else if(ClientAllCorp) {
    return <ResultAllClientCorp props={props}/>
  } else if(addClientele) {
    return <AddClientele props={props}/>
  } else if (openClientCard) {
    return <OpenClientCard props={props}/>
  } else {
    return <div></div>
  }

}
