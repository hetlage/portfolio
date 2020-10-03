import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Experience",
      tab3 = "Education & Certification";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/#home">
                            Web and user interface design
                            <span> - Development</span>
                          </a>
                          Websites, web experiences, ...
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a
                            href="https://www.goidp.com/"
                            title="IDP Web Developer"
                          >
                            Web Developer
                            <span>
                              {" "}
                              - Internet Design &amp; Publishing, Inc.
                            </span>
                          </a>{" "}
                          2019 - Current
                          <br />
                          <span>
                            IDP is a professional web design and development
                            company that has been around since 2003. We
                            primarily develop WordPress sites for a wide range
                            of businesses. I have had the opportunity to work
                            with several e-commerce sites and build my skills in
                            PHP, jQuery, CSS, HTML, and Bootstrap. I am also the
                            curator of ancient .Net sites for the team.
                          </span>
                        </li>
                        <li>
                          <a href="https://kavservice.com/" title="KAV Service">
                            Drone Tech/Web Developer<span> - KAV Service</span>
                          </a>{" "}
                          2016 - 2019
                          <br />
                          <span>
                            KAV Service was a drone repair facility that
                            serviced Yuneec and DJI brands. During my time there
                            I worked on drones and multiple web projects.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a
                            href="https://www.park.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Park University"
                          >
                            BS in Computer Science
                            <span> - Park University, Parkville, MO</span>
                          </a>{" "}
                          2021
                          <br />
                          <span>
                            <strong>Relevant Coursework:</strong> Data
                            Structures, Relational Databases, Object Oriented
                            Programming (Java, C++)
                          </span>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
