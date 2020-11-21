import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";

export class WorkPage extends React.Component{
    render(){
        console.log(this.props)
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="contentArea">
                   あ
               </div>
           </React.Fragment>)
    }
}
