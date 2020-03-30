import React, {Component } from 'react';

import { Row, Col, Form, Icon, Input, Button, Select, Progress} from 'antd';
import './subsidydetailform.css'

const {Option}= Select;
 
export class subsidydetailform extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextstep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevstep();
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
                    percent={30}
                    status="active"
                    />
                    </Row>
                    <h2>Subsidy Details-</h2>
                    <Row className="inline">
                        <Col md={10} offset={0}>
                        <label>Subsidy type</label>
                        <Form.Item>
                        <Select 
                            onChange={handlechange('Subsidytype')}
                            defaultValue={values.Subsidytype}>
                            <Option value="NAIS">National Agricultural Insurance Scheme </Option>
                            <Option value="RKVY">Rashtriya Krishi Vikas Yojana</Option>
                            <Option value="PMKSY">Pradhan Mantri Krishi Sinchayee Yojana</Option>
                        </Select>
                        </Form.Item>
                        </Col>
                        <Col md={5}>
                        </Col>
                        <Col md={5}>
                        </Col>
                    </Row>
                    <Row className="inline">
                        <Col md={6} offset={0}>
                        <label>Total Invested Amount</label>
                        <Form.Item>
                        <Input
                            placeholder="enter invested amount"
                            onChange={handlechange('Investedamount')}
                            defaultValue={values.Investedammount}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={7}>
                        <label>Sanctioned Loan Amount</label>
                        <Form.Item>
                        <Input
                            placeholder="enter amount of loan"
                            onChange={handlechange('Loanamount')}
                            defaultValue={values.Sex}
                        />
                        </Form.Item>
                        </Col>
                        <Col md={7}>
                        <label>Total Land Area</label>
                        <Form.Item>
                        <Input
                            placeholder="land area under project"
                            onChange={handlechange('Landarea')}
                            defaultValue={values.Landarea}
                        />
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row >
                        <Col md={20} offset={1}>
                            <label>Additional detail-</label>
                            <Form.Item>
                            <Input
                                placeholder="if any additional information available"
                                onChange={handlechange('Additionaldetail')}
                                defaultValue={values.Additionaldetail}
                            />
                            </Form.Item>
                        </Col>
                    </Row>
                    <br/>
                    <h2>Bank Details-</h2>
                    <Row className="inline">
                        <Col md={10} offset={0}>
                            <label>Loan Account Holder Name</label>
                            <Form.Item>
                            <Input
                                placeholder=" enter loan account holder Name"
                                onChange={handlechange('Accountholdername')}
                                defaultValue={values.Accountholdername}
                            />
                            </Form.Item>
                        </Col>
                        <Col md={5}>
                            <label>Bank Name</label>
                            <Form.Item>
                            <Input
                                placeholder=""
                                onChange={handlechange('Bankname')}
                                defaultValue={values.Bankname}
                            />
                            </Form.Item>
                        </Col>
                        <Col md={5}>
                            <label>Branch Name</label>
                            <Form.Item>
                            <Input
                                placeholder=""
                                onChange={handlechange('Branchname')}
                                defaultValue={values.Branchname}
                            />
                            </Form.Item>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="inline">
                        <Col md={7} offset={0}>
                            <label>Loan Acount Number</label>
                            <Form.Item>
                            <Input
                                placeholder=" enter Loan account number"
                                onChange={handlechange('Loanaccountnumber')}
                                defaultValue={values.Loanaccountnumber}
                            />
                            </Form.Item>
                        </Col>
                        <Col md={6}>
                            <label>IFSC Code</label>
                            <Form.Item>
                            <Input
                                placeholder=""
                                onChange={handlechange('IFSCcode')}
                                defaultValue={values.IFSCcode}
                            />
                            </Form.Item>
                        </Col>
                        <Col md={7}>
                            <label>PAN Card Number</label>
                            <Form.Item>
                            <Input
                                placeholder="enter PAN number"
                                onChange={handlechange('PAN')}
                                defaultValue={values.PAN}
                            />
                            </Form.Item>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="inline">
                    <Button className="back"
                            onClick={this.back}>       
                        <Icon type="left" />
                        Back
                    </Button>
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

export default subsidydetailform;