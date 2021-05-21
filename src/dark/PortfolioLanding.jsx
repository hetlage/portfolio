import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import HeaderThree from "../component/header/HeaderThree";
import FooterTwo from "../component/footer/FooterTwo";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import Particles from "react-particles-js";
import PortfolioList from "../elements/portfolio/PortfolioList";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import ServiceList from "../elements/service/ServiceList";
import { API } from "aws-amplify";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SlideList = [
  {
    textPosition: "text-left",
    category: "",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

const PortfolioLanding = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("hetlageAppApi", "/news")
      .then((res) => setPosts(res.posts))
      //.then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const pythonString =
    `# Simple Flask App\n` +
    `import os\n` +
    `from flask import Flask, render_template, request, redirect, url_for\n` +
    `from flask_sqlalchemy import SQLAlchemy\n\n` +
    `app = Flask(__name__)\n` +
    `... Some Config Stuff\n\n` +
    `class Todo(db.Model):\n` +
    `    id = db.Column(db.Integer, primary_key=True)\n` +
    `    text = db.Column(db.String(200))\n` +
    `    complete = db.Column(db.Boolean)\n\n` +
    `@app.route('/')\n` +
    `def index():\n` +
    `    incomplete = Todo.query.filter_by(complete=False).all()\n` +
    `    complete = Todo.query.filter_by(complete=True).all()\n\n` +
    `    return render_template('index.html', incomplete=incomplete, complete=complete)\n\n` +
    `... Some More Routes\n\n` +
    `if __name__ == '__main__':\n` +
    `    app.run(debug=True)`;

  let title = "About Me",
    description =
      "Based in the Kansas City Metro, I am a dynamic and motivated technical professional with proven results-driven leadership. A lifelong learner. Passionate about technology and the ethics behind it. Self taught and formally educated in various subject matters of technology. A coder, maker and entrepreneur.";

  return (
    <div className="active-dark">
      <Helmet pageTitle="John Hetlage" />

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      {/* Start Slider Area */}
      <div
        id="home"
        className="fix slider-activation slider-creative-agency with-particles"
      >
        <div className="frame-layout__particles">
          <Particles
            params={{
              "particles": {
                "number": {
                  "value": 555,
                  "density": {
                    "enable": true,
                    "value_area": 789.1476416322727
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.48927153781200905,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                  }
                },
                "size": {
                  "value": 2,
                  "random": true,
                  "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 0.2,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 83.91608391608392,
                    "size": 1,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}
          />
        </div>
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image"
              key={index}
            >
              <div className="container">
                <div className="row intro">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ""}
                      <h1 className="title">
                        Hi, I’m John Hetlage. <br />
                        <TextLoop>
                          <span> Web Developer</span>
                          <span> Programmer</span>
                          <span> Maker</span>
                          <span> Amateur Trader</span>
                          <span> Entrepreneur</span>
                          <span> Lifelong Learner</span>
                        </TextLoop>{" "}
                      </h1>
                      <h2>based in Kansas City, MO.</h2>
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120 bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/hetlage.png"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <TabTwo tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="skills" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Awesome Skills</h2>
                  <p>The highlight reel of my skillset.</p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner mb--55">
            <Portfolio />
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Code Area */}
      <div id="code-block" className="fix code-block">
        <div className="container">
          <div className="row ptb--30">
            <div className="col-lg-2"></div>
            <div className="code-area bg_color--5 col-lg-8">
              <SyntaxHighlighter language="python" style={a11yDark}>
                {pythonString}
              </SyntaxHighlighter>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
      {/* End Code Area */}

      {/* Start Portfolio Area */}
      <div id="projects" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Latest Projects</h2>
                    <p>The highlight reel of my personal projects.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a
                      className="rn-button-style--2 btn-solid"
                      href="https://github.com/hetlage"
                    >
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Blog Area */}
      <div id="blog" className="fix">
        <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center">
                  <h2>Latest News</h2>
                  <p>Latest blog posts.</p>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              {posts
                ? posts.slice(0, 6).map((post, i) => (
                    <div className="col-lg-4 col-md-6 col-12" key={i}>
                      <div className="blog blog-style--1">
                        <div className="thumbnail">
                          <a href="/#blog">
                            <img
                              height="390"
                              className="w-100"
                              src={post.urlToImage}
                              alt="Blog Images"
                            />
                          </a>
                        </div>
                        <div className="content">
                          <p className="blogtype">{post.source.name}</p>
                          <h4 className="title">
                            <a
                              href={post.url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {post.title}
                            </a>
                          </h4>
                          <div className="blog-btn">
                            <a
                              className="rn-btn text-white"
                              href={post.url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start COntact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <ContactThree
            contactImages="/assets/images/about/first-contact-min.png"
            contactTitle="Contact Me."
          />
        </div>
      </div>
      {/* End COntact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
