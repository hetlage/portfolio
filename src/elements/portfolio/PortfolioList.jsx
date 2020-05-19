import React, { Component } from "react";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Development",
    title: "This space will be Coming Soon!",
    url: "/#home",
  },
  {
    image: "image-2",
    category: "React, Wordpress",
    title: "React with Wordpress Rest API demo",
    url: "https://github.com/johnsriot/react-wordpress-demo",
  },
  {
    image: "image-3",
    category: "Twilio REST, API Gateway, AWS Lambda",
    title: "Twilio text to call app with AWS services",
    url: "https://github.com/johnsriot/twilio-text-to-call",
  },
  {
    image: "image-4",
    category: "Python",
    title: "Python Long-Exposure Simulation from Video",
    url: "https://github.com/johnsriot/long-exposure-simulation",
  },
  {
    image: "image-5",
    category: "Pixabay REST API, React",
    title: "Pixabay image finder using React",
    url: "https://github.com/johnsriot/image-finder",
  },
  {
    image: "image-6",
    category: "Alexa-sdk, AWS Lambda",
    title: "Corny Dad Alexa skill using sdk version 1",
    url: "https://github.com/johnsriot/CornyDad",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href={value.url}>{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href={value.url}>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
