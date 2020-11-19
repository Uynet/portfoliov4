import * as React from "react";
import "../../scss/index.scss"

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
        const className = isCurrentPage? "" : "navigationContent"
        return(
           <React.Fragment>
               <div className={className}>
                {this.props.id}
               </div>
           </React.Fragment>)
    }
}
