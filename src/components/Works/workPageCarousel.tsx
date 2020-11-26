import * as React from "react";
import "../../../scss/index.scss";
import "../../../scss/works.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
var settings = {
    dots: true,
    outline:"none",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

export class WorkPageCarousel extends React.Component<Props> {
    render(){
        const media = this.props.media;
        const img = media.filter(e=>e.split(".")[1]=="png")
        const video = media.filter(e=>e.split(".")[1]=="mp4")
        const youtube = media.filter(e=>e.split(".")[1]=="youtube")

        return(
            <React.Fragment>
                <div className="carousel">
                    <Slider {...settings}>
                        {media.map((m,i)=>{
                            return  <React.Fragment key={i}>
                                    {img.indexOf(m)!=-1 && 
                                        <div className ="workPageThmbnailWrapper" key={i}>
                                            <img src={m} className="workPageThmbnail"/>
                                        </div>
                                    }
                                    {video.indexOf(m)!=-1 && 
                                        <video src={m} className="workPageThmbnail" loop autoPlay/>
                                    }
                                    {youtube.indexOf(m)!=-1 && 
                                        <div className="workPageThmbnailWrapper">
                                            <iframe className="youtubeFrame" title="youtube" src={m} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
                                        </div>
                                    }
                                    </React.Fragment>
                        })}
                    </Slider>
                </div>
            </React.Fragment>)
    }
}