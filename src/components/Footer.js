/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>1954 79th street Brooklyn Ny, 11214</p>
            </div>
            <div className="d-flex">
              <a href="tel: 9292559388">+1 (929)2559388</a>
            </div>
            <div className="d-flex">
              <p>19rauf95@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About Me</a>
                <br />
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton url={"https://github.com/Raufmaharramov"} quote={"FullStack Developer"} hashtag="#javascript">
                <FacebookIcon className="mx-3 circle" size={36} />
              </FacebookShareButton>
              <TwitterShareButton url={"https://github.com/Raufmaharramov"} quote={"FullStack Developer"} hashtag="#javascript">
                <TwitterIcon className="mx-3 circle" size={36} />
              </TwitterShareButton>
              <RedditShareButton url={"https://github.com/Raufmaharramov"} quote={"FullStack Developer"} hashtag="#javascript">
                <RedditIcon className="mx-3 circle" size={36} />
              </RedditShareButton>
              <LinkedinShareButton url={"https://github.com/Raufmaharramov"} quote={"FullStack Developer"} hashtag="#javascript">
                <LinkedinIcon className="mx-3 circle" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;RaufMaharramov
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
