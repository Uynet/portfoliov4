import * as React from "react";
import "../../scss/index.scss"
import "../../scss/navBar.scss"
import { MenuContent } from "./menuContent";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Hambar } from "./hambar";

export class NavigationBar extends React.Component{
    render(){
        const menues = [
            "Profile",
            "Works", 
            "Store",
        ]
        return(
           <React.Fragment>
                <MediaQuery query="(max-width: 767px)">
                    <div className="navigationBarSp">
                        <Link to="/" style={{gridColumnStart:2}}>
                            <div className="navigationTopSp">uynet.work</div>
                        </Link>
                    <Hambar/>

                </div>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
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
                </MediaQuery>
           </React.Fragment>
        )
    }
}