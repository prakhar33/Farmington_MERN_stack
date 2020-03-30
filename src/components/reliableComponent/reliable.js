import React, { Component } from 'react';
import { Row, Col,Icon} from 'antd';
import './reliable.css';
class Relaible extends Component {
  state = {};
  render() {
    return (
      <Row className="reliable">
        <Col md={8} className="rel1">
          <Icon type="safety-certificate" />
          <p>Fully Bonded</p>
        </Col>
        <Col md={8} className="rel2">
          <Icon type="star" />
          <p>Relaible & Trustworthy</p>
        </Col>
        <Col md={8} className="rel3">
          <Icon type="file-protect" />
          <p>Professional & Experienced</p>
        </Col>
      </Row>
    );
  }
}

export default Relaible;
