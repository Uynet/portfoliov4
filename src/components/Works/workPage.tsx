import * as React from "react";
import "../../../scss/index.scss"
import "../../../scss/works.scss"
import { NavigationBar } from "../navigationBar";
import { RouteProps } from 'react-router';
import contentData from"./contentData";

export class WorkPage extends React.Component<RouteProps>{
    render(){
        const id = this.props.match.params.work;
        const data = contentData.filter(e => (e.id === id))[0];
        const { title , media , links , description} = data
        const { img , video } = media
        console.log(links)
        return(
           <React.Fragment>
                <NavigationBar/>
                <div className="contentArea">
                    <div className="workPageCard">
                    <div className="workPageBox">
                        <img src={img[0]} className="workPageThmbnail"/>
                        <div className="workInfo">
                            <div className="workTitle">
                                { title }
                            </div>
                            <div className="workDescription">
                                { description}
                            </div>
                            {links.map(link=>{
                                return <a href={link.url} className="link"> {
                                    link.name
                                    } </a>
                                
                            })}
                        </div>
                        </div>
                    </div>
                </div>
           </React.Fragment>
        )
    }
}
