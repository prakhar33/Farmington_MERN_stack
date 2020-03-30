import React, { Component } from 'react';
import { Row, Col,Icon } from 'antd';
import './home.css';
import { Button } from 'antd/lib/radio';
class Home extends Component {
  state = {};

  render() {
    return (
      <div className="home_main" id="home">
        <Row>
          <Col md={20}>
            <Col md={10} offset={16} className="home_text">
              <div>
                <p>Quality Product</p>
                <p>Reliale Services</p>
                <div className="home_buttons">
                  {' '}
                  <Button className="home_log">Log In</Button>
                  <Button className="home_arrow">></Button>
                </div>
              </div>
            </Col>
            <div className="home_image"></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
