import React, { useEffect, useState } from "react";
import "./HeroNew.css";
import slider1 from "../../../assets/Image/Hero/Slider1.png";
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

  // Auto-scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const slides = [
    {
      id: 1,
      imgSrc: slider1,
      title: "Biometric Attendance",
      // type: "Your Timekeeping Partner",
      description: `Our company offers advanced Attendance and Access Control Systems, Door Locks, Controllers, Barcode Scanners, and accessories.`,
    },
    {
      id: 2,
      imgSrc: slider2,
      title: "Attendance and Access Control Systems",
      // type: "",
      description: `"Offering advanced Attendance & Access Control Systems, Door Locks, Controllers, Barcode Scanners, & accessories for secure, efficient solutions." `,
    },
    {
      id: 3,
      imgSrc: slider3,
      title: "Door Locks and Controllers ",
      // type: "",
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
      title: "Switches For Access Control",
      type: "",
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
    <div className="slider mt-2">
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
