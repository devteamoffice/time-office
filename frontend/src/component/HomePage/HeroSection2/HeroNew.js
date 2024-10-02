import React, { useState } from "react";
import "./HeroNew.css";
import slider1 from "../../../assets/Image/Hero/Slider1.jpg";
import slider2 from "../../../assets/Image/Hero/Slider2.png";
import slider3 from "../../../assets/Image/Hero/Slider3.png";
import slider4 from "../../../assets/Image/Hero/Slider4.png";
import slider5 from "../../../assets/Image/Hero/Slider5.png";
import slider6 from "../../../assets/Image/Hero/Slider6.png";

const HeroSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const nextSlide = () => {
    setSliderIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSliderIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const slides = [
    {
      id: 1,
      imgSrc: slider1,
      title: "Biometric Attendance Solutions",
      type: "Your Timekeeping Partner",
      description: `Our company specializes in providing state-of-the-art Attendance and Access Control Systems, Door Locks and Controllers, Barcode Scanners, and related accessories. With a focus on security, convenience, and efficiency, we offer a wide range of solutions tailored to meet the diverse needs of businesses, institutions, and organizations.`,
    },
    {
      id: 2,
      imgSrc: slider2,
      title: "Attendance and Access",
      type: "Control Systems",
      description: `We offer dynamic face recognition, fingerprint-based, and card-based attendance systems, designed to ensure accurate attendance tracking and secure access control for professional and basic needs.`,
    },
    {
      id: 3,
      imgSrc: slider3,
      title: "Door Locks and ",
      type: "Controllers",
      description: `Our range of door locks and controllers provides security solutions for various doors, including clutch hook glass door locks, multi-door controllers, and exit readers.`,
    },
    {
      id: 4,
      imgSrc: slider4,
      title: "Barcode Scanners",
      // type: "NATURE",
      description: `Our wireless and handheld barcode scanners enhance productivity and accuracy, and they are ideal for inventory management, retail, and other commercial uses.`,
    },
    {
      id: 5,
      imgSrc: slider5,
      title: "SWITCHES FOR ACCESS",
      type: "CONTROL",
      description: `Welcome back to CodeDevotee! Exciting content, tutorials, 
                    and projects ahead. Let’s build together! 🚀💻`,
    },
    {
      id: 6,
      imgSrc: slider6,
      title: "Accessories",
      // type: "NATURE",
      description: `We supply an array of locks, brackets, cards, and tags that complement our security systems and access control devices to ensure maximum functionality.`,
    },
    // {
    //   id: 7,
    //   imgSrc:
    //     "https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg",
    //   title: "Switches for ",
    //   type: "Access Control",
    //   description: `We provide versatile switches that allow efficient control over access systems, suitable for various configurations and environments.`,
    // },
    // {
    //   id: 8,
    //   imgSrc:
    //     "https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg",
    //   title: "Readers",
    //   // type: "Access Control",
    //   description: `Our UHF readers ensure long-distance scanning and efficient tracking for seamless operation in industrial and commercial settings.`,
    // },
  ];

  return (
    <div className="slider">
      <div className="list">
        {slides.map((slide, index) => (
          <div
            className={`item ${index === sliderIndex ? "active" : ""}`}
            key={index}
          >
            <img src={slide.imgSrc} alt={slide.type} />
            <div className="content">
              <div className="title">{slide.title}</div>
              <div className="type" style={{ fontSize: "2.5rem" }}>
                {slide.type}
              </div>
              <div className="description">{slide.description}</div>
              <div className="button">
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {slides.map((slide, index) => (
          <div
            className={`item ${index === sliderIndex ? "active" : ""}`}
            key={index}
            onClick={() => setSliderIndex(index)} // Clicking on a thumbnail sets the active slide
          >
            <img src={slide.imgSrc} alt={slide.type} />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={prevSlide}>
          {" "}
          &lt;{" "}
        </button>
        <button className="next" onClick={nextSlide}>
          {" "}
          &gt;{" "}
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
