import "../../scss/index.scss"
import "../../scss/contact.scss"
import { NavigationBar } from "./navigationBar";
import * as React from "react";

export class Store extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="header">
               </div>
               
               <div className="headline">
                    <div className="headlineContent">
                    <div className="contentHead">
                        通販
                    </div>
                    </div>
               </div>

               <div className="contentArea">
                    <div className="card">
                        <div className="wrapper">
                            <div className="description">
                                準備中です...
                            </div>
                        </div>
                    </div>
                </div>
           </React.Fragment>)
    }
}
