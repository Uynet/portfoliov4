import * as React from "react";
import "../../../scss/index.scss";
import "../../../scss/profile.scss";
import { NavigationBar } from "../navigationBar";

export class Profile extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="header">
                    <div className="contentBar">Profile</div>
               </div>
               
               <div className="headline">
                   <div className="profileIcon"></div>
               </div>
               
               <div className="contentArea"></div>

           </React.Fragment>)
    }
}
