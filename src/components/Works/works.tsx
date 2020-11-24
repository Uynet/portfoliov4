import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";
import { WorkContent } from "./workContent";
import contentData from"./contentData";

export class Works extends React.Component{
    render(){
         const categories = [
              "pickup",
         ]
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="header"/>
               
               <div className="headline">
                    <div className="headlineContent">
                         <div className="contentHead">
                              作品
                         </div>
                    </div>
               </div>

               <div className="worksContentArea">
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

