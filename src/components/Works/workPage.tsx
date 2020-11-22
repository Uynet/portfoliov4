import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";
import { RouteProps } from 'react-router';

export class WorkPage extends React.Component<RouteProps>{
    render(){
        const id = this.props.match.params.work;
        return(
           <React.Fragment>
                <NavigationBar/>
                <img src="../resource/bg.png"/>
                <div className="contentArea">
                    { id }
                </div>
           </React.Fragment>)
    }
}
