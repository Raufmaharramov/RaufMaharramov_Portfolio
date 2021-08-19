/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classify from "../Img/classify.png";
import devlink from "../Img/devlink.png";
import portfolio from "../Img/portfolio.png";
import chat from "../Img/chat.png";
// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React Popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Classify
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={classify} alt="Classify Task Manager Project..." />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dicta!</p>
        <b>Demo:</b>
        <a className="hyper-link" onClick={() => window.open("https://rauf-classify-app.herokuapp.com/")}>
          https://rauf-classify-app.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>
        <a className="hyper-link" onClick={() => window.open("https://github.com/Raufmaharramov/ClassiFy")}>
          https://github.com/Raufmaharramov/ClassiFy
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Classify task manager project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  // DevLink
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={devlink} alt="DevLink..." />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dicta!</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://rauf-devlink-app.herokuapp.com/", "_blank")}>
          https://rauf-devlink-app.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>
        <a className="hyper-link" onClick={() => window.open("https://github.com/Raufmaharramov/DevLink")}>
          https://github.com/Raufmaharramov/DevLink
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
        <img className="portfolio-image-popupbox" src={chat} alt="Task Manager React Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://eager-poincare-969904.netlify.app", "_blank")}>
          https://eager-poincare-969904.netlify.app
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/Raufmaharramov/RealChat_Client", "_blank")}>
          https://github.com/Raufmaharramov/RealChat_Client
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager React project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box col" onClick={openPopupboxNetflix}>
            <img src={classify} alt="Netflix Clone Project..." className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col" onClick={openPopupboxCityGuide}>
            <img src={devlink} alt="City Guide Project..." className="portfolio-image" />
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
            <img src={chat} alt="Task Manager Project..." className="portfolio-image" />
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
