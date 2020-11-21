import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";
import { RouteProps } from 'react-router';
import contentData from"./contentData";

export class WorkPage extends React.Component<RouteProps>{
    render(){
        const id = this.props.match.params.work;
        return(
           <React.Fragment>
                <NavigationBar/>
                <div className="contentArea">
                    { id }
                </div>
           </React.Fragment>)
    }
}
