import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AutoPlay() {
    const [slider, setSlider] = useState([
        {
            img: "https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg"
        },
        {
            img: "https://pixlr.com/images/index/product-image-one.webp"
        },
        {
            img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            img: "https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg"
        },
        {
            img: "https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
        },
        {
            img: "https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg"
        },
        {
            img: "https://www.shutterstock.com/image-photo/new-sprout-grows-on-transparent-260nw-2271911621.jpg"
        },
    ])


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    slider.map((image, index) => {
                        return (
                            <div className="cards" key={index}>
                                <img src={image.img} alt="" />

                            </div>
                        )
                    })
                }
            </Slider>
        </div>

    );
}

export default AutoPlay;
