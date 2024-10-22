import React from "react";
import "./Freeshiping.css";

const features = [
  {
    icon: "fab fa-battle-net",
    title: "Free Shipping",
    description: "Free shipping on all US order or order above $200",
    linkText: "Learn More",
  },
  {
    icon: "fab fa-asymmetrik",
    title: "24X7 Support",
    description: "Contact us 24 hours a day, 7 days a week",
    linkText: "Learn More",
  },
  {
    icon: "fab fa-artstation",
    title: "30 Days Return",
    description: "Simply return it within 30 days for an exchange",
    linkText: "Learn More",
  },
  {
    icon: "fab fa-500px",
    title: "Payment Secure",
    description:
      "24/7 customer support available for all queries, day or night.",
    linkText: "Learn More",
  },
  // {
  //   icon: "fas fa-chart-pie",
  //   title: "Business Consulting",
  //   description:
  //     "Mauris volutpat urna tristique finibus iaculis. Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.",
  //   linkText: "Learn More",
  // },
  // {
  //   icon: "fas fa-laptop-code",
  //   title: "Website Design",
  //   description:
  //     "Mauris volutpat urna tristique finibus iaculis. Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.",
  //   linkText: "Learn More",
  // },
];

const FeaturePage = () => {
  return (
    <section className="feature-page">
      <div className="container">
        {/* <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">
            <div className="header-feature">
              <h2 className="feature-title">Features</h2>
              <p className="feature-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur malesuada fermentum purus, eu volutpat nisi laoreet
                id. Phasellus fringilla accumsan metus, at tempor est hendrerit
                et.
              </p>
            </div>
          </div>
        </div> */}
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="single-feature">
                <div className="feature-content">
                  <span className="feature-icon">
                    <i className={feature.icon}></i>
                  </span>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  <a href="#" className="feature-learn-more">
                    {feature.linkText}
                  </a>
                </div>
                <span className="feature-circle-before"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturePage;
