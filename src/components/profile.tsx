import * as React from "react";
import "../../scss/index.scss"
import { NavigationBar } from "./navigationBar";

export class Profile extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="contentBar">Profile</div>
               <div className="bgClass"></div>
           </React.Fragment>)
    }
}
