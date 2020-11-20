import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/contact.scss"
import { NavigationBar } from "../navigationBar";

export class Works extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="header">
                    <div className="contentBar">Contact</div>
               </div>
               
               <div className="headline">
                    <div className="headlineContent">
                    <div className="contentHead">
                        ____作品____
                    </div>
                    </div>
               </div>

               <div className="contentArea">
                    <div className="card">
                        <div className="wrapper">
                            <div className="cardTitle">a</div>
                            <div className="description">
                            </div>
                        </div>
                    </div>
                </div>
           </React.Fragment>)
    }
}
