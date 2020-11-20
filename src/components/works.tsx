import * as React from "react";
import "../../scss/index.scss"
import { NavigationBar } from "./navigationBar";

export class Works extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="header">
                    <div className="contentBar">Works</div>
               </div>
           </React.Fragment>)
    }
}
