import React from "react";
import "./slider.css";
import Offer1 from "../../assets/Image/Offer50-1N.jpg";
import Offer2 from "../../assets/Image/Offer50-2.png";

const Slider2 = () => {
  return (
    // <section className="slider2_main">
    //   <div id="carouselExampleCaptions" class="carousel slide">
    //     <div class="carousel-inner">
    //       <div class="carousel-item active">
    //         <img src={Offer1} class="d-block w-100" alt="..." />
    //         {/* <div class="carousel-caption d-md-block">
    //           <h2>Save 50%</h2>
    //           <p>Shop Our Year End Sale - Upto 50% Off </p>
    //           <button className="offer-btn">Shop Now </button>
    //         </div> */}
    //       </div>
    //       <div class="carousel-item">
    //         <img src={Offer2} class="d-block w-100" alt="..." />
    //         {/* <div class="carousel-caption d-none d-md-block">
    //         <h5>Second slide label</h5>
    //         <p>Some representative placeholder content for the second slide.</p>
    //       </div> */}
    //       </div>
    //     </div>
    //     <button
    //       class="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="prev"
    //     >
    //       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       class="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="next"
    //     >
    //       <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span class="visually-hidden">Next</span>
    //     </button>
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //   </div>
    // </section>

    <div
      id="carouselExampleControls"
      class="carousel slide my-4 mt-4"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Offer1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={Offer2} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider2;
