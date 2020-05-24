import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {this.props.pageTitle} || Web Developer, Programmer, Maker &
            Entrepreneur{" "}
          </title>
          <meta
            name="description"
            content="Welcome to JohnHetlage.com. This site is dedicated to provide a view into my world."
          />
          <meta property="og:url" content="https://www.johnhetlage.com" />
          <meta
            property="og:description"
            content="Welcome to JohnHetlage.com. This site is dedicated to provide a view into my world."
          />
          <meta
            property="og:image"
            content="/assets/images/matrix-2354492_1280.jpg"
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
