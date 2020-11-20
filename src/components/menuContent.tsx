import * as React from "react";
import "../../scss/index.scss";
import { Link } from "react-router-dom";

interface MenuProps{
    key:string,
    id:string
}
export class MenuContent extends React.Component<MenuProps>{
    constructor(props){
        super(props);
    }
    render(){
        const page = location.href.split("/")[3]
        const isCurrentPage = page==this.props.id
        const className = isCurrentPage? "navigationContentCurrent" : "navigationContent"
        const link = "/" + this.props.id

        return(
           <React.Fragment>
               <div className={className}>
                   <Link to = {link}>
                {this.props.id}
                </Link>
               </div>
           </React.Fragment>)
    }
}
