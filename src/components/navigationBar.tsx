import * as React from "react";
import "../../scss/index.scss"
import "../../scss/navBar.scss"
import { MenuContent } from "./menuContent";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Hambar } from "./hambar";

function BarSp(props) {
  return ( 
                    <div className="navigationBarSp">
                        <Link to="/" style={{gridColumnStart:2}}>
                            <div className="navigationTopSp">uynet.work</div>
                        </Link>
                    <Hambar/>
                </div>
  );
}
function BarPc(props) {
    const menues = props.menues;
  return ( 
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
  );
}


export class NavigationBar extends React.Component{
    constructor(props){
        super(props)
        this.render.bind(this);
        window.addEventListener("resize" , e=>{
            this.render();
        })
    }
    render(){
        const menues = [
            "Profile",
            "Works", 
            "Store",
        ]
        return(
           <React.Fragment>
               <React.Fragment>
                <MediaQuery query="(max-width: 767px)">
                    <BarSp/>
                </MediaQuery>
                <MediaQuery query="(min-width: 768px)">
                    <BarPc menues = {menues}/>
                </MediaQuery>
               </React.Fragment>
           </React.Fragment>
        )
    }
}