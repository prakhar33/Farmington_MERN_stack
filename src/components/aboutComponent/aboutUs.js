import React, { Component } from 'react';
import { Col, Row, Button } from 'antd';
import './aboutUs.css';

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="about_main" id="about">
        <Row>
          <Col offset={1} md={11} className="about_1">
            <p className="head1">About Farmington</p>
            <p className="subhead1">With Us the Grass is Greener</p>
            <p className="description1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="description1">
              This is a great space to write long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </Col>
          <Col md={11}>
            <div>
              <img
                className="image_farmer"
                src="images/farm3.jfif"
                alt="farmer image"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col offset={1} md={11}>
            <div>
              <img
                src="images/farm5.jfif"
                alt="farmer image"
                className="image_farmer"
              ></img>
            </div>
          </Col>
          <Col md={11} className="about_2">
            <h1 className="head2">Get Free Help From Experts</h1>

            <Button size="large" className="subhead2">
              LogIn
            </Button>

            <h2 className="description2"> Or Call Us: 123-456-7890 </h2>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutUs;
