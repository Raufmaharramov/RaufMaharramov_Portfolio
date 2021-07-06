/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import netflix from "../Img/netflix.png";
import cityGuide from "../Img/city-guide-app.png";
import portfolio from "../Img/portfolio.png";
import taskManager from "../Img/task-manager.png";
// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React Popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project..." />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dicta!</p>
        <b>GitHub:</b>
        <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>
          https://github.com/8020Coding/netflix-project
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix Clone project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide Project..." />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dicta!</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://city-guide-app-project.herokuapp.com/", "_blank")}>
          https://city-guide-app-project.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>
        <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app")}>
          https://github.com/8020Coding/city-guide-app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  // Portfolio
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>
          https://portfolio-rea-and-material-ui.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}>
          https://github.com/8020Coding/portfilio
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>
          https://react-redux-task-manager.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>
          https://github.com/8020Coding/task-manager
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager React and Redux project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row d-flex justify-content-center">
          <div className="portfolio-image-box col" onClick={openPopupboxNetflix}>
            <img src={netflix} alt="Netflix Clone Project..." className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col" onClick={openPopupboxCityGuide}>
            <img src={cityGuide} alt="City Guide Project..." className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col" onClick={openPopupboxPortfolio}>
            <img src={portfolio} alt="Portfolio Project..." className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col" onClick={openPopupboxTaskManager}>
            <img src={taskManager} alt="Task Manager Project..." className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  );
};

export default Portfolio;
