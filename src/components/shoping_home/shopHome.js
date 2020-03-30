import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import './shopHome.css';
class ShopHome extends Component {
  state = {};
  render() {
    return (
      <div>
        <Row className="homeImage">
          <Col md={15} offset={5} className="heading">
            <div>WE SERVE FRESH VEGETABLE FRUITS & GRAINS</div>
          </Col>
          <Col offset={11} md={2}>
            <button className="button">View </button>
          </Col>
        </Row>
        <Row className="thumbs">
          <Col offset={4} md={3}>
            <div className="qualityImg"></div>
            <div>
              <b>FREE SHIPPING</b>
            </div>
            <div>ON ORDER OVER 5K</div>
          </Col>
          <Col md={3} offset={2}>
            <div className="two"></div>
            <div>
              {' '}
              <b>ALWAYS FRESH</b>
            </div>

            <div>PRODUCT WELL PACKAGE</div>
          </Col>
          <Col md={3} offset={2}>
            <div className="three"></div>
            <div>
              {' '}
              <b>SUPERIOR QUALITY</b>
            </div>

            <div>QUALITY PRODUCTS</div>
          </Col>
          <Col offset={2} md={3}>
            <div className="four"></div>
            <div>
              <b>SUPPORT</b>
            </div>
            <div>24/7 SUPPORT</div>
          </Col>
        </Row>
        <Row>
          <Col offset={3} md={6} className="friuts">
            <div>
              {/* <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img> */}
            </div>
          </Col>
          <Col offset={1} md={6}>
            <div className="vegetables">
              {/* <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img> */}
            </div>
          </Col>
          <Col offset={1} md={6}>
            <div className="grains">
              {/* <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img> */}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ShopHome;
