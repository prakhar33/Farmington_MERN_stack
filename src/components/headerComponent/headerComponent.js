import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import './headerComponent.css';
import {Link} from 'react-scroll';
class Header extends Component {
  state = {};
  render() {
    return (
      <div style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Row className="header">
          <Col md={2} offset={2}>
            <div className="trade_name">Farmington</div>
          </Col>
          {/* <Col md={5} offset={15}>
            <div className="phone_number">Call Us Now : 123-456-7890</div>
          </Col> */}
        </Row>
        <Row className="sub_header">
          <Col md={2} offset={2}>
            <a href="/">Home</a>
          </Col>
          <Col md={2}>
            <Link to="services" smooth={true} duration={1000} >Services</Link>
          </Col>
          <Col md={2}>
            <Link to="about" smooth={true} duration={1000}>About</Link>
          </Col>
          <Col md={3}>
            <Link to="testimonials" smooth={true} duration={1000}>Testimonials</Link>
          </Col>
          <Col md={2}>
            <a>Gallery</a>
          </Col>
          <Col md={2}>
            <a href="/subsidy" >Subsidy</a>
          </Col>
          <Col md={2}>
            <Link to="contact" smooth={true} duration={1000}>Contact</Link>
          </Col>
          <Col md={2} offset={4}>
            <a href="signup">
              {/* <Icon type="login" style={{ paddingRight: 8 }} /> */}
              LogIn
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
