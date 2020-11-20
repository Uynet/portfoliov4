import * as React from "react";
import "../../../scss/index.scss";
import "../../../scss/profile.scss";
import { NavigationBar } from "../navigationBar";

export class Profile extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="header">
                    <div className="contentBar">Profile</div>
               </div>
               
               <div className="headline">
               <div className="headlineContent">
                   <img className="profileIcon" src="./resource/profileIcon.png"></img>
                   <div className="biographyArea">
                        <div className="name">uynet</div>
                        <div className="biography">1996/12/19生まれ。東京工業大学情報工学科卒業。曲作ったりゲーム作ったりデザインするなど活動は多岐に渡る。
                        </div>
                    </div>
               </div>
               </div>

               
               <div className="contentArea">
                    <div className="card">
                    ゆいちゃんについて
                    </div>
               </div>

           </React.Fragment>)
    }
}
