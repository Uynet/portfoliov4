import * as React from "react";
import "../../scss/index.scss"
import { NavigationBar } from "./navigationBar";

export class Profile extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <img src="./resource/contentBar.svg"/>
               <div className="bgClass"></div>
           </React.Fragment>)
    }
}
