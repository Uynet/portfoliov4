import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";
import { WorkContent } from "./workContent";
import contentData from"./contentData";

export class Works extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="header">
                    <div className="contentBar">Works</div>
               </div>
               
               <div className="headline">
                    <div className="headlineContent">
                         <div className="contentHead">
                              作品
                         </div>
                    </div>
               </div>

               <div className="contentArea">
                    <div className="contentAreaBox">
                    {
                       contentData.map((data,i) => {
                            return <WorkContent key={i} data = {data}/>
                       })
                    }
                    </div>
               </div>
           </React.Fragment>)
    }
}
