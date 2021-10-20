import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Professional Experience</h1>
      </div>
      <div className="container experience-wrapper">
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Smart Security MMC / Software Engineer </h3>
            <h5>August 2019 - June 2021</h5>
            <p>● Refactored existing ReactJS architecture to utilize a more eﬀicient design, minimizing HTTP requests to the Node.js backend by ~75% and enhancing page load speeds by more than 30%.</p>
            <p>● Rebuilt entire online payment platform utilizing ReactJS, Webpack, and ES6 which resulted in a 90% decrease in frontend component rendering time and an increase in over $35,000 in monthly booking revenue.</p>
            <p>● Constructed RESTful API with Node.js with 30+ unique endpoints to create and manipulate client project data stored in MongoDB utilizing ReactJS, Redux and ES6.</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>The Black Garden LLC / Intern</h3>
            <h5>May 2018 - September 2018</h5>
            <p>● Developed 5 company frontend boilerplates for JavaScript, ReactJS, Redux, Webpack and Node.js which minimized build times for engineers by ~95% allowing much faster development lifecycles.</p>
            <p>● Designed streamlined UI to create reusable state components, by applying React Hooks and Context API Hooks, facilitating efficient management of complex shared state between components.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
