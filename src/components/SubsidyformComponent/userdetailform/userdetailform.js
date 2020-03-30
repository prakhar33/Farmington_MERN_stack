import React, {Component } from 'react';

import { Row, Col, Form, Icon, Input, Button, Select, Progress} from 'antd';
import './userdetailform.css'

const {Option}= Select;
 
export class userdetailform extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextstep();
    }
    render(){
        const {values, handlechange}= this.props;   
        return(
            <div className="container">
                <Form onSubmit={this.continue} className="form container">
                    <Row>
                    <Progress
                    strokeColor={{
                        from: '#108ee9',
                        to: '#87d068',
                    }}
                    percent={0}
                    status="active"
                    />
                    </Row>
                    <h2>Personal Details-</h2>
                    <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>First Name</label>
                        <Form.Item>
                        <Input
                            placeholder=" enter your First Name"
                            onChange={handlechange('FirstName')}
                            defaultValue={values.FirstName}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={7}>
                        <label>Last Name</label>
                        <Form.Item>
                        <Input
                            placeholder="enter your Last Name"
                            onChange={handlechange('LastName')}
                            defaultValue={values.LastName}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={6}>
                        <label>Father Name</label>
                        <Form.Item>
                        <Input
                            placeholder="enter your Father Name"
                            onChange={handlechange('FatherName')}
                            defaultValue={values.FatherName}
                        />
                        </Form.Item>  
                        </Col>
                    </Row>
                    <br/>
                    <Row className="inline">
                        <Col md={6} offset={0}>
                        <label>Age</label>
                        <Form.Item>
                        <Input
                            placeholder="in years"
                            onChange={handlechange('Age')}
                            defaultValue={values.Age}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={7}>
                        <label>Sex</label>
                        <Form.Item>
                        <Input
                            placeholder="Male/Female"
                            onChange={handlechange('Sex')}
                            defaultValue={values.Sex}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={7}>
                        <label>Marital Status</label>
                        <Form.Item>
                        <Input
                            placeholder="Married/Unmarried"
                            onChange={handlechange('Maritalstatus')}
                            defaultValue={values.Maritalstauts}
                        />
                        </Form.Item>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="inline">
                        <Col md={10} offset={0}>
                            <label>Occupation</label>
                            <Form.Item>
                            <Input
                                placeholder=" enter your occupation"
                                onChange={handlechange('Occupation')}
                                defaultValue={values.Occupation}
                            />
                            </Form.Item>
                        </Col>
                        <Col md={5}>
                            <label>Annual Income</label>
                            <Form.Item>
                            <Input
                                placeholder=""
                                onChange={handlechange('Annualincome')}
                                defaultValue={values.Annualincome}
                            />
                            </Form.Item>
                        </Col>
                        <Col md={5}>
                            <label>Priority/Minority</label>
                            <Form.Item>
                            <Input
                                placeholder="if belongs to any minor category"
                                onChange={handlechange('Priority')}
                                defaultValue={values.Priority}
                            />
                            </Form.Item>
                        </Col>
                    </Row>
                    <br/>
                    <Row >
                        <Col md={20} offset={1}>
                            <label>Address</label>
                            <Form.Item>
                            <Input
                                placeholder=" enter your permanent address belong to property"
                                onChange={handlechange('Address')}
                                defaultValue={values.Address}
                            />
                            </Form.Item>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Aadhar Number</label>
                        <Form.Item>
                        <Input
                            placeholder="16-digit number"
                            onChange={handlechange('Aadhar')}
                            defaultValue={values.Aadhar}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={7}>
                        <label>Contact Number</label>
                        <Form.Item>
                        <Input
                            placeholder="(91+) "
                            onChange={handlechange('Phone')}
                            defaultValue={values.Phone}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={6}> 
                        </Col>
                    </Row>
                    <br/>
                    <Row className="inline">
                    <Button className="continue"
                            onClick={this.continue}>
                        Continue
                        <Icon type="right" />
                    </Button>
                    </Row>
                    <br/>
                </Form>
            </div>
        )
    }
}

export default userdetailform;