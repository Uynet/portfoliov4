import * as React from "react";
import "../../scss/index.scss"
import { NavigationBar } from "./navigationBar";
import { Footer } from "./footer";

interface Props{

}
interface States {
 hidden:boolean;
}
export class Home extends React.Component<Props,States>{
    constructor(props){
        super(props)
        this.state = {hidden:false}
        this.toggleHide = this.toggleHide.bind(this);
    }
    toggleHide(){
        const h = this.state.hidden
        this.setState({hidden:!h})
    }
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
                    <div className="bg"/>
                {!this.state.hidden && 
                    <React.Fragment>
                        <div className="title">
                            <div className="titleLogo">ゆいネット</div>
                            <div className="titleSubText">uynetのウェブサイト</div>
                        </div>
                    </React.Fragment>
                }
           </React.Fragment>)
    }
}
