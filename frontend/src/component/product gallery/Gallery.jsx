import React from "react";
import "./gallery.css";
import img1 from "../../assets/Image/galleryImg/door.png";
import img2 from "../../assets/Image/galleryImg/attendance.png";
import img3 from "../../assets/Image/galleryImg/barcode.png";
import img4 from "../../assets/Image/galleryImg/4.png";
import img5 from "../../assets/Image/galleryImg/5.png";
import img6 from "../../assets/Image/galleryImg/6.png";

import about from "../../assets/Image/about.png";
const Gallery = () => {
  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img src={about} alt="" className="img-fluid" />
          </div>
        </div>
      </div> */}

      {/* New with responsive */}
      <section class="gallery_section py-3 mt-4">
        <div className="row">
          <div className="col-md-12 my-2">
            <div className="slider1_head">Shop by Categories</div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-xl-5 mb-4 mb-xl-0">
              <div class="CardWrapFirst">
                <img src={img1} width="486" height="890" />
                <div class="py-4 py-xl-5 CardText">
                  <h5 class="text-center">Door Lock and Controllers</h5>
                </div>
              </div>
            </div>
            <div class="col-12 col-xl-7">
              <div class="row">
                <div class="col-md-6 col-xl-7 mb-4">
                  <div class="CardWrap">
                    <img src={img2} width="496" height="322" />
                    <div class="py-4 CardText">
                      <h5 class="text-center">
                        Attendance and Access Control Systems
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xl-5 mb-4">
                  <div class="CardWrap">
                    <img src={img3} width="307" height="322" />
                    <div class="py-sm-4 pb-md-4 pt-md-5 py-lg-4 CardText">
                      <h5 class="text-center">Barcode Scanners</h5>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-5 mb-4">
                  <div class="CardWrap">
                    <img src={img4} width="308" height="323" />
                    <div class="py-4 CardText">
                      <h5 class="text-center">Reader</h5>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-lg-7 mb-4">
                  <div class="CardWrap">
                    <img src={img5} width="494" height="323" />
                    <div class="py-4 CardText">
                      <h5 class="text-center">Switches for Access Control</h5>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex CardWrap">
                    <div
                      style={{
                        backgroundImage: `url(${img6})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <img
                        src={img6}
                        width="810"
                        height="206"
                        alt="Accessories"
                      />
                    </div>

                    <div class="d-flex align-items-center px-1 px-lg-5 CardText Trans">
                      <h5 class="text-center">Accessories</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
