import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <Helmet>
        {/* General tags */}
        <title>
          {this.props.pageTitle} | Web Developer | Programmer | Maker &
          Entrepreneur{" "}
        </title>
      </Helmet>
    );
  }
}

export default PageHelmet;
