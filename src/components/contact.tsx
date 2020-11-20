import * as React from "react";
import "../../scss/index.scss"
import "../../scss/contact.scss"
import { NavigationBar } from "./navigationBar";

export class Contact extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="header">
                    <div className="contentBar">Contact</div>
               </div>
               
               <div className="headline">
                    <div className="headlineContent">
                    <div className="contentHead">
                        お問い合わせ
                    </div>
                    </div>
               </div>

               <div className="contentArea">
                    <div className="card">
                        <div className="wrapper">
                            メールかTwitterにください
                            <div className="description">
                                highsate☆gmail☁com
                            </div>
                        </div>
                    </div>
                </div>
           </React.Fragment>)
    }
}
