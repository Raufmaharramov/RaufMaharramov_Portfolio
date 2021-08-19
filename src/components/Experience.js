import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Related Experience</h1>
      </div>
      <div className="container experience-wrapper">
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <h5>Gedopp LLC</h5>
            <p>StartUp Owner/ Software Engineer</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016</h3>
            <h5>Sinteks Group of Companies</h5>
            <p>Internship Program</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
