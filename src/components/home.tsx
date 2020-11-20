import * as React from "react";
import "../../scss/index.scss"
import { NavigationBar } from "./navigationBar";

export class Home extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div style={{
                   margin:40
               }}>
               <span style={{
                   background:"rgba(0,0,0,0.6)",
                   fontSize:50,
                   padding:15,
                    color:"#fff"
                   }}>
                       ゆいネット
               </span >
               </div>
               <div className="bg"></div>
           </React.Fragment>)
    }
}
