import * as React from "react";
import "../../scss/index.scss"
import { NavigationBar } from "./navigationBar";

export class App extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="bgClass"></div>
           </React.Fragment>
        )
    }
}