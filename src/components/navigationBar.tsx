import * as React from "react";
import "../../scss/index.scss"
import { MenuContent } from "./menuContent";
import { Link } from "react-router-dom";

export class NavigationBar extends React.Component{
    render(){
        const menues = [
            "Profile",
            "Works", 
            "Store",
            "Contact",
        ]
        return(
           <React.Fragment>
               <div className="navigationBar">
                <Link to="/">
                    <div className="navigationTop">uynet.work</div>
                </Link>
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