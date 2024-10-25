import React, { useEffect } from "react";
import "./Scroller.css"; // Import your CSS
import img1 from "../../../assets/Image/ourclinetsN/1.jpg";
import img2 from "../../../assets/Image/ourclinetsN/2.jpg";
import img3 from "../../../assets/Image/ourclinetsN/3.jpg";
import img4 from "../../../assets/Image/ourclinetsN/4.jpg";
import img5 from "../../../assets/Image/ourclinetsN/5.jpg";
import img6 from "../../../assets/Image/ourclinetsN/6.jpg";

const OurClientScroll = () => {
  useEffect(() => {
    const clientCarousels = document.querySelectorAll(".client-carousel");

    // Check if the user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyCarouselAnimation();
    }

    function applyCarouselAnimation() {
      clientCarousels.forEach((carousel) => {
        carousel.setAttribute("data-animated", true);
        const carouselWrapper = carousel.querySelector(
          ".client-carousel__wrapper"
        );
        const carouselItems = Array.from(carouselWrapper.children);

        // Clone each item and append it to the carousel
        carouselItems.forEach((item) => {
          const clonedItem = item.cloneNode(true);
          clonedItem.setAttribute("aria-hidden", true);
          carouselWrapper.appendChild(clonedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div>
        <h1 className="clients_heading">
          Our <span>Clients</span>
        </h1>

        <div
          className="client-carousel"
          data-direction="right"
          data-speed="slow"
        >
          <div className="client-carousel__wrapper">
            <img src={img1} alt="Client 1" />
            <img src={img2} alt="Client 2" />
            <img src={img3} alt="Client 3" />
            <img src={img4} alt="Client 4" />
            <img src={img5} alt="Client 5" />
            <img src={img6} alt="Client 6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClientScroll;
