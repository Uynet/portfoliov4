import * as React from "react";
import "../../scss/index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons"

export class Footer extends React.Component{
    render(){
        return(
           <React.Fragment>
                <div className="SNS">
                    <a href="http://twitter.com/uynet" className="link"><FontAwesomeIcon className="snsIcon" icon={faTwitter} /></a>
                    <a href="http://github.com/Uynet" className="link"><FontAwesomeIcon className="snsIcon" icon={faGithub} /></a>
                    <a href="http://soundcloud.com/uynet" className="link"><FontAwesomeIcon className="snsIcon" icon={faSoundcloud} /></a>
                </div>
           </React.Fragment>)
    }
}
