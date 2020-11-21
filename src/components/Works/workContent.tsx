import * as React from "react";
import "../../../scss/index.scss";
import "../../../scss/works.scss";
import { Link } from "react-router-dom";
import { ContentData } from "../../types";

interface WorkContentProps{
    data : ContentData
} 

export class WorkContent extends React.Component<WorkContentProps> {
    render(){
        const {id , title , date , imgpath} = this.props.data
        return(
           <React.Fragment>
               <Link to={"works/"+id}>
               <div className="workContentCard">
                        <img src={imgpath} className="workContentThmbnail"/>
                   <div className="workContentTitle">{title}</div>
               </div>
               </Link>
           </React.Fragment>)
    }
}
