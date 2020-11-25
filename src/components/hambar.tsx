
import * as React from "react";
import "../../scss/index.scss"
import { NavigationBar } from "./navigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import { Menubar } from "./menubar";

interface Props{}
interface State{isOpen:boolean}
export class Hambar extends React.Component<Props,State>{
    constructor(props){
        super(props)
        this.state={isOpen:false}
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        const o = this.state.isOpen;
        this.setState({isOpen:!o});
    }
    render(){
        const icon = this.state.isOpen ? faTimes : faBars;
        return(
           <React.Fragment>
                <div className="navWrapper">
                    <div className="hambar" onClick={this.toggle}>
                        <FontAwesomeIcon className="fabars" icon={icon} />
                    </div>
                    {this.state.isOpen && <Menubar/>}
                </div>
           </React.Fragment>)
    }
}
