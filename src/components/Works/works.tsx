import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";
import { WorkContent } from "./workContent";
import contentData from"./contentData";
import { CategoryContent } from "./categoryContent";
import { Category } from "../../types";

interface Props{

}
interface States {
     focusedCategory :Category 
}
export class Works extends React.Component<Props,States>{
     constructor(props){
          super(props) 
          this.state = {
               focusedCategory : Category.Pickup
          }
     }
     render(){
          const categories = [
              "Pickup",
              "Game",
              "Others"
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
               <div className="categoryBar">

                    {
                       categories.map((c,i) => {
                            const isFocused= (Category[c] == this.state.focusedCategory)
                       return <CategoryContent key={i} category={c} isFocused={isFocused}/>
                       })
                    }
               </div>
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