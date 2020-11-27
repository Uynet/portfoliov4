import * as React from "react";
import "../../scss/index.scss"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home";
import { Profile } from "./Profile/profile";
import { Works } from "./Works/works";
import { Contact } from "./contact";
import { WorkPage } from "./Works/workPage";
import { Store } from "./store";
import ScrollToTop from "./ScrollToTop";
import { Footer } from "./footer";

export class App extends React.Component{
    render(){
        return(
           <React.Fragment>
                <Router>
                   <ScrollToTop>
                    <Route exact path="/" component = {Home}/>
                    <Route exact path="/profile" component = {Profile}/>
                    <Route exact path="/works" component = {Works}/>
                    <Route path="/works/:work" component={WorkPage}/>
                    <Route exact path="/contact" component = {Contact}/>
                    <Route exact path="/store" component = {Store}/>
                </ScrollToTop>
                </Router>
                <Footer/>
           </React.Fragment>)
    }
}
