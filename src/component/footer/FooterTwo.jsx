import React from "react";
import { FaTwitter, FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/johnhetlage" },
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/john-hetlage-8747826b",
  },
  { Social: <FaTwitter />, link: "https://twitter.com/hetlagejohn" },
  { Social: <FaGithub />, link: "https://github.com/hetlage" },
];

const FooterTwo = () => {
  return (
    <div
      className="footer-style-2 ptb--30 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <a href="/#home">
                  <img
                    className="rounded"
                    src="/assets/images/logo/john_hetlage.png"
                    alt="Hetlage Logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text">
                <p>Copyright © 2020 John Hetlage. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
