import * as React from "react";
import "../../scss/index.scss"
import { NavigationBar } from "./navigationBar";

export class Home extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="bg">
               </div>
           </React.Fragment>)
    }
}
