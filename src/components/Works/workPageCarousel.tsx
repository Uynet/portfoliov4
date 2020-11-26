import * as React from "react";
import "../../../scss/index.scss";
import "../../../scss/works.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props{
    media:{
        img?: string[]
        video?: string[]
        youtube?:string[]
    }
} 
var settings = {
    dots: true,
    outline:"none"
};

export class WorkPageCarousel extends React.Component<Props> {
    render(){
        const {img , video , youtube} = this.props.media
        return(
            <React.Fragment>
                <div className="carousel">
                    <Slider {...settings}>
                        {youtube && <div className="workPageThmbnailWrapper">
                         <iframe className="youtubeFrame" title="youtube" src={youtube[0]} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        />
                            </div>}

                        {video && <video src={video[0]} className="workPageThmbnail" loop autoPlay/>}
                        {img && img.map((im,i)=>{
                            return  <div className ="workPageThmbnailWrapper" key={i}>
                                        <img src={im} className="workPageThmbnail"/>
                                    </div>
                        }) }
                    </Slider>
                </div>
            </React.Fragment>)
    }
}
