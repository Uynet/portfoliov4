import * as React from "react";
import "../../scss/index.scss"

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
                           return <div key={menu} className="navigationContent">{menu}</div>;
                       })
                   }
               </div>
               </div>
           </React.Fragment>
        )
    }
}