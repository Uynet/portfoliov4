import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";
import { RouteProps } from 'react-router';
import contentData from"./contentData";
import { StringParser } from "./stringParser";
import { WorkPageCarousel } from "./workPageCarousel";

export class WorkPage extends React.Component<RouteProps>{
    render(){
        const id = this.props.match.params.work;
        const data = contentData.filter(e => (e.id === id))[0];
        const { title , media , links , description} = data
        return(
           <React.Fragment>
                <NavigationBar/>
                <div className="contentArea">
                    <div className="workPageCard">
                    <div className="workPageBox">
                        <WorkPageCarousel media = {media}/>
                        <div className="workInfo">
                            <div className="workTitle">
                                { title }
                            </div>
                            <div className="workDescription">
                                <StringParser str={description}/>
                            </div>
                            <div style={{paddingTop:20}}>
                            {links && links.map((link,i)=>{
                                return <a key={i} href={link.url} className="link worksOuterLink"> {
                                    link.name
                                    } </a>
                            })}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
           </React.Fragment>
        )
    }
}
