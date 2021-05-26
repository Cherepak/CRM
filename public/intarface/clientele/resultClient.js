import React from "react";
import ReactDOM from "react-dom";

import ListClientele from "./listClientelt";
import MyListClientele from "./myListClientele";
import AddClientele from "./addClientele";

export function ResultClient (props) {

  const {listClientele, myListClientele,addClientele} = props.props.props.props.props.state;


  if(listClientele) {
    return <ListClientele props={props}/>;

  } else if (myListClientele) {
    return <MyListClientele props={props}/>

  } else if(addClientele) {
    return <AddClientele props={props}/>
  } else {
    return <div></div>
  }

}
