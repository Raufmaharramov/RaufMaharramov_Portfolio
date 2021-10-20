/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import devlink from "../Img/devlink.png";
import amazon from "../Img/amazon.png";
import chat from "../Img/chat.png";
import tesla from "../Img/tesla.png";
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
        <img className="portfolio-image-popupbox" src={amazon} alt="Amazon Clone..." />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dicta!</p>
        <b>Demo:</b>
        <a className="hyper-link" onClick={() => window.open("https://clone-ebe87.web.app/")}>
          https://clone-ebe87.web.app/
        </a>
        <br />
        <b>GitHub:</b>
        <a className="hyper-link" onClick={() => window.open("https://github.com/Raufmaharramov/Amazon_clone")}>
          https://github.com/Raufmaharramov/Amazon_clone
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Amazon Clone"
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
        <img className="portfolio-image-popupbox" src={tesla} alt="Tesla Clone..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://raufmaharramov-tesla-clone.netlify.app/", "_blank")}>
          https://raufmaharramov-tesla-clone.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>
        <a className="hyper-link" onClick={() => window.open("https://github.com/Raufmaharramov/Tesla-clone")}>
          https://github.com/Raufmaharramov/Tesla-clone
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Tesla Clone"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={chat} alt="Real Chat..." />
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
      text: "Real Chat"
    },
    fadeIn: true,
    fadeInSpeed: 500
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box col" onClick={openPopupboxPortfolio}>
            <img src={tesla} alt="Tesla Clone..." className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*  */}
          <div className="portfolio-image-box col" onClick={openPopupboxNetflix}>
            <img src={amazon} alt="Amazon Clone..." className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box col" onClick={openPopupboxCityGuide}>
            <img src={devlink} alt="DevLink project..." className="portfolio-image" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          {/* - */}
          <div className="portfolio-image-box col" onClick={openPopupboxTaskManager}>
            <img src={chat} alt="Real Chat..." className="portfolio-image" />
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
