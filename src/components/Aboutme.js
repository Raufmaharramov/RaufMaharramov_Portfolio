import React from "react";
import author from "../Img/author.jpg";

const Aboutme = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>Over the years, I have acquired the ability to leverage a product-oriented mindset, analytical problem-solving skills, and cross-functional collaboration experience to lead the end-to-end design and development of cutting-edge, scalable applications and infrastructure. I utilize diverse developer tools to drive efficiencies across the back-end and front-end development processes to optimize the run-time environment, maximize data access and availability, and deliver a secure user experience.</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
