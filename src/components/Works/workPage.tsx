import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";
import { RouteProps } from 'react-router';
import contentData from"./contentData";

export class WorkPage extends React.Component<RouteProps>{
    render(){
        const id = this.props.match.params.work;
        const data = contentData.filter(e => (e.id === id))[0];
        const { title , date , thmbnail: imgpath} = data
        return(
           <React.Fragment>
                <NavigationBar/>
                <div className="contentArea">
                    <div className="workPageBox">
                        <img src={imgpath} className="workPageThmbnail"/>
                        { title }
                    </div>
                </div>
           </React.Fragment>
        )
    }
}
