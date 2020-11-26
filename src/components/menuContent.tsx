import * as React from "react";
import "../../scss/index.scss";
import { Link } from "react-router-dom";

interface MenuProps{
    key:string,
    id:string
}
export class MenuContent extends React.Component<MenuProps>{
    render(){
        const page = location.href.split("/")[3]
        const isCurrentPage = page.toLowerCase()==this.props.id.toLowerCase()
        const className = isCurrentPage? "navigationContentCurrent" : "navigationContent"
        const link = "/" + this.props.id.toLowerCase();

        return(
           <React.Fragment>
                <Link to = {link}>
                    <div className={className}>
                        {this.props.id}
                    </div>
                </Link>
           </React.Fragment>)
    }
}
