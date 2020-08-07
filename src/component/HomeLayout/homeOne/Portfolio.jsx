import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";

const PortfolioList = [
  {
    image: "image-7",
    category: "E-Commerce 🛒",
    title: " Hanna's Handiworks",
    url: "https://www.hannashandiworks.com",
  },
  {
    image: "image-8",
    category: "Industry 🏭",
    title: " Superior Adhesives",
    url: "https://superioradhesivesandtools.com/",
  },
  {
    image: "image-9",
    category: "E-Commerce 🛒",
    title: " BBQ Pro Shop",
    url: "https://www.bbqproshop.com",
  },
  {
    image: "image-10",
    category: "E-Commerce 🛒",
    title: " Richlin Fabrics",
    url: "https://www.richlinfabrics.com/",
  },
  {
    image: "image-11",
    category: "Industry 🏭",
    title: " QM Power",
    url: "https://www.qmpower.com/",
  },
  {
    image: "image-12",
    category: "Business/Corporate 💼",
    title: " Maturo & Associates",
    url: "https://www.maturo.com/",
  },
];

class Portfolio extends Component {
  render() {
    let title = "Portfolio",
      description =
        "The following are sites where I was a major contributor and has been completed while working at IDP.";
    return (
      <React.Fragment>
        <div className="portfolio-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title">
                  <h2>{title}</h2>
                  <p>
                    {description}{" "}
                    <a
                      href="https://www.goidp.com/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit IDP
                    </a>{" "}
                    for more details.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-slick-activation mt--70 mt_sm--40">
            <Slider {...portfolioSlick2}>
              {PortfolioList.map((value, index) => (
                <div className="portfolio" key={index}>
                  <div className="thumbnail-inner">
                    <div className={`thumbnail ${value.image}`}></div>
                    <div className={`bg-blr-image ${value.image}`}></div>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <p>{value.category}</p>
                      <h4>
                        <a
                          href={value.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {value.title}
                        </a>
                      </h4>
                      <div className="portfolio-button">
                        <a
                          className="rn-btn"
                          href={value.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Portfolio;
