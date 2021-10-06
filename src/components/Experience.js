import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Related Experience</h1>
      </div>
      <div className="container experience-wrapper">
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018</h3>
            <h5>The Black Garden LLC / Intern</h5>
            <p>Developed 5 company frontend boilerplates for JavaScript, ReactJS, Redux, Webpack and Node.js which minimized build times for engineers by ~95% allowing much faster development lifecycles. Designed streamlined UI to create reusable state components, by applying React Hooks and Context API Hooks, facilitating efficient management of complex shared state between components.</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016</h3>
            <h5>Sinteks Group of Companies / Intern</h5>
            <p>Analyzed financial data for more than 100 fashion, jewelry, beauty and household utilities stores, and more than 10 branches of coffee shops. Assisted with research, filing, data entry, and recording and maintaining accurate and complete financial records.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
