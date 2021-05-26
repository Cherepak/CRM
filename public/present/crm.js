import React from "react";
import ReactDOM from "react-dom";

import {SportCRM} from "./sportCrm";
import {SaleCRM} from "./saleCrm";
import {SkladCRM} from "./skladCrm";

export function CRM (props) {
  const {sport, sale, sklad} = props.props.props.props.props.state;

  if (sport) {
    return <SportCRM/>;

  } else if(sale) {
    return <SaleCRM/>;

  } else if(sklad) {
    return <SkladCRM/>;
  }
}


