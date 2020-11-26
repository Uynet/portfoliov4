import * as React from "react";
import "../../../scss/index.scss";
import "../../../scss/works.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import contentData from "./contentData";
import { Link } from "react-router-dom";

export class WorksCarousel extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="worksCarousel">
                    {
                        contentData
                        .map((data,i) => {
                        return <div key={i} className="worksCarouselContent"> 
                        
                    <Link to={"/works/"+data.id}>
                        <div className="workContentCard">
                            <div className="workContentThmbnailWrapper">
                                <div className="workContentThmbnail" style={{backgroundImage:"url("+data.thmbnail+")"}}/>
                                </div>
                        </div>
                    </Link>
                        </div>
                        })
                    }
                </div>
            </React.Fragment>)
    }
}
