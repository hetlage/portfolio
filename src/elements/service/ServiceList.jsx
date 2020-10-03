import React, { Component } from "react";
import {
  FaCode,
  FaDatabase,
  FaAws,
  FaMagento,
  FaWordpress,
} from "react-icons/fa";
import { FiLayers } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FaCode />,
    title: "Polyglot Programmer",
    description:
      "Written code in C/C++, C#, Java, Node, Python, and PHP for work, school, and personal interests.",
  },
  {
    icon: <FiLayers />,
    title: "Software Development",
    description:
      "Fundamental understanding of development concepts such as data structures, SDLC, REST APIs, and Git.",
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    description:
      "Familiarity with database technologies such as MySQL, Postgres, and MongoDB.",
  },
  {
    icon: <FaAws />,
    title: "Public Cloud",
    description: "Utilized AWS services such as Lambda, EC2, S3 and More.",
  },
  {
    icon: <FaMagento />,
    title: "Ecommerce Development",
    description:
      "Created and maintained several ecommerce sites using Magento 2 and WooCommerce.",
  },
  {
    icon: <FaWordpress />,
    title: "Content Management System",
    description:
      "Hands on experience customizing and publishing content with WordPress.",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/#skills">
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
