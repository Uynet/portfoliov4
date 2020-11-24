import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";
import { WorkContent } from "./workContent";
import contentData from"./contentData";
import { CategoryContent } from "./categoryContent";
import { Category,ContentData } from "../../types";

const categories = [
     "Pickup",
     "Game",
     "Music",
     "Others",
     "All",
]
interface Props{ }
interface States {
     focusedCategory :Category 
}
export class Works extends React.Component<Props,States>{
     constructor(props){
          super(props) 
          this.state = {
               focusedCategory : Category.Pickup
          }
          this.handleClick = this.handleClick.bind(this);
     }
     handleClick(categoryName:string){
          this.setState({focusedCategory:Category[categoryName]})
          console.log(this.state)
     }
     categoryFilter(content:ContentData){
          if(this.state.focusedCategory == Category.All)return true;
          if(this.state.focusedCategory == Category.Others) return content.categoryTag.length == 0
          return content.categoryTag.indexOf(this.state.focusedCategory)!== -1;
     }
     render(){
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
                            return <CategoryContent key={i} categoryName={c} isFocused={isFocused} onClick={this.handleClick}/>
                       })
                    }
               </div>
                    <div className="contentAreaBox">
                    {
                       contentData
                         .filter(c=>this.categoryFilter(c))
                         .map((data,i) => {
                            return <WorkContent key={i} data = {data}/>
                       })
                    }
                    </div>
               </div>
           </React.Fragment>)
    }
}