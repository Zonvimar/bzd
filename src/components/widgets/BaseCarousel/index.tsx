'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {Button} from "@nextui-org/react";



const BaseCarouselImages = () => {

    const settings = {
        // dots: true,
        // infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
    };

    return (
        <div className={'slider-container w-[300px] lg:w-[600px] mx-auto'}>
            <Slider {...settings} >
                <div>
                    <img src='/base/IMG_1406.JPG' alt='slide-1' className={'object-cover max-h-[600px] w-full h-auto'}/>
                </div>
                <div>
                    <img src='/base/IMG_1414.JPG' alt='slide-2' className={'object-cover max-h-[600px] flex items-center justify-center w-full h-auto'}/>
                </div>
                <div>
                    <img src='/base/IMG_1408.JPG' alt='slide-3' />
                </div>
                <div>
                    <img src='/base/base01.jpg' alt='slide-4' />
                </div>
                <div>
                    <img src='/base/base02.jpg' alt='slide-5'/>
                </div>
                {/*<div>*/}
                {/*    <img src='/base/base03.jpg' alt='slide-3'/>*/}
                {/*</div>*/}
                <div>
                    <img src='/base/base04.jpg' alt='slide-6'/>
                </div>
                <div>
                    <img src='/base/base05.jpg' alt='slide-7'/>
                </div>
                {/*<div>*/}
                {/*    <img src='/base/base06.jpg' alt='slide-6'/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src='/base/base07.jpg' alt='slide-1' />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src='/base/base08.jpg' alt='slide-2'/>*/}
                {/*</div>*/}
                <div>
                    <img src='/base/base09.jpg' alt='slide-8'/>
                </div>
                <div>
                    <img src='/base/base010.jpg' alt='slide-9'/>
                </div>
                {/*<div>*/}
                {/*    <img src='/base/base011.jpg' alt='slide-5'/>*/}
                {/*</div>*/}
                <div>
                    <img src='/base/base012.jpg' alt='slide-10'/>
                </div>
                <div>
                    <img src='/base/base013.jpg' alt='slide-11' />
                </div>
                {/*<div>*/}
                {/*    <img src='/base/base014.jpg' alt='slide-2'/>*/}
                {/*</div>*/}
            </Slider>
        </div>
    );
};

export default BaseCarouselImages