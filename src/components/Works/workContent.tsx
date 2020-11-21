import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { ContentData } from "../../types";

interface WorkContentProps{
    data : ContentData
} 

export class WorkContent extends React.Component<WorkContentProps> {
    render(){
        const {title , date , imgpath} = this.props.data
        return(
           <React.Fragment>
               <div className="workContentCard">
                        <img src={imgpath} className="workContentThmbnail"/>
                   <div className="workContentTitle">{title}</div>
               </div>
           </React.Fragment>)
    }
}
