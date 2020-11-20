import * as React from "react";
import "../../scss/index.scss"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home";
import { Profile } from "./Profile/profile";
import { Works } from "./Works/works";
import { Contact } from "./contact";

export class App extends React.Component{
    render(){
        return(
           <React.Fragment>
                <Router>
                    <Route exact path="/" component = {Home}/>
                    <Route exact path="/profile" component = {Profile}/>
                    <Route exact path="/works" component = {Works}/>
                    <Route exact path="/contact" component = {Contact}/>
                </Router>
           </React.Fragment>)
    }
}
