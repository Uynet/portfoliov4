import * as React from "react";
import "../../scss/index.scss"
import { MenuContent } from "./menuContent";

export class NavigationBar extends React.Component{
    render(){
        const menues = [
            "profile",
            "works", 
            "content",
        ]
        return(
           <React.Fragment>
               <div className="navigationBar">
                <div className="navigationContentBox">
                   {
                       menues.map(menu=>{
                           return <MenuContent key={menu} id={menu}/>
                       })
                   }
               </div>
               </div>
           </React.Fragment>
        )
    }
}