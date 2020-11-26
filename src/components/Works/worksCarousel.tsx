import * as React from "react";
import "../../../scss/index.scss";
import "../../../scss/works.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import contentData from "./contentData";
import { WorkContent } from "./workContent";
import { Link } from "react-router-dom";

interface Props{
    media:string[]
} 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div />
  );
}

export class WorksCarousel extends React.Component {
    render(){
const settings = {
    outline:"none",
    infinite:false,
    serslidesToShow: 4,
    slidesToScroll:1, 
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};
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
