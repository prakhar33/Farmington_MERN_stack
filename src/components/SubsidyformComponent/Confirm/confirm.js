import React, {Component } from 'react';

import { Row, Col, Form, Icon, Input, Button, Select, Upload, label, Progress} from 'antd';
import './confirm.css'

const {Option}= Select;
 
export class confirm extends Component{
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
        const {values:{FirstName, LastName, FatherName, Age, Sex, Occupation, Address, Aadhar, Phone,
            Maritalstatus, Annualincome, Priority, Subsidytype, Investedamount, LoanaccountNumber,
            Loanamount, Landarea, Additionaldetail, Accountholdername, Bankname,
            Branchname, IFSCcode, PAN, Aadharcard, PANcard, Bankpassbook, Incomecerti,
            Cropregistercerti, Landcerti, Photo, Signature}} = this.props;
        return(
            <div className="form container">
                <Row>
                <Progress
                    strokeColor={{
                        from: '#108ee9',
                        to: '#87d068',
                    }}
                    percent={100}
                    status="active"
                />
                </Row>
                <h2>Confirm Personal detail-</h2>
                <br/>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>First Name</label>
                        <h4>{ FirstName }</h4>
                        </Col>
                        <Col md={7}>
                        <label>Last Name</label>
                        <h4>{ LastName }</h4>
                        </Col>
                        <Col md={6}> 
                        <label>Father Name</label>
                        <h4>{ FatherName }</h4>
                        </Col>
                </Row>
                <br/>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Age</label>
                        <h4>{ Age }</h4>
                        </Col>
                        <Col md={7}>
                        <label>Sex</label>
                        <h4>{ Sex }</h4>
                        </Col>
                        <Col md={6}> 
                        <label>Occupation</label>
                        <h4>{ Occupation }</h4>
                        </Col>
                </Row>
                <br/>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Address</label>
                        <h4>{ Address }</h4>
                        </Col>
                        <Col md={7}>
                        <label>Aadhar Number</label>
                        <h4>{Aadhar }</h4>
                        </Col>
                        <Col md={6}> 
                        <label>Contact Number</label>
                        <h4>{ Phone }</h4>
                        </Col>
                </Row>
                <br/>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Marital Status</label>
                        <h4>{ Maritalstatus }</h4>
                        </Col>
                        <Col md={7}>
                        <label>Annual Income</label>
                        <h4>{ Annualincome }</h4>
                        </Col>
                        <Col md={6}> 
                        <label>Priority</label>
                        <h4>{ Priority }</h4>
                        </Col>
                </Row>
                <br/>
                <h2>Confirm Subsidy detail-</h2>
                <br/>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Subsidy Type</label>
                        <h4>{ Subsidytype }</h4>
                        </Col>
                        <Col md={7}>
                        <label>Invested Amount</label>
                        <h4>{ Investedamount }</h4>
                        </Col>
                        <Col md={6}> 
                        <label>Land Area</label>
                        <h4>{ Landarea }</h4>
                        </Col>
                </Row>
                <br/>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Loan Amount</label>
                        <h4>{ Loanamount }</h4>
                        </Col>
                        <Col md={7}>
                        <label>Account Holder Name</label>
                        <h4>{ Accountholdername }</h4>
                        </Col>
                        <Col md={6}> 
                        <label>Bank Name</label>
                        <h4>{ Bankname }</h4>
                        </Col>
                </Row>
                <br/>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Branch Name</label>
                        <h4>{ Branchname }</h4>
                        </Col>
                        <Col md={7}>
                        <label>IFSC Code</label>
                        <h4>{ IFSCcode }</h4>
                        </Col>
                        <Col md={6}> 
                        <label>PAN Number</label>
                        <h4>{ PAN }</h4>
                        </Col>
                </Row>
                <br/>
                <Row className="inline">
                        <Col md={7} offset={0}>
                        <label>Loan Account Number</label>
                        <h4>{ Maritalstatus }</h4>
                        </Col>
                        <Col md={6}>
                        <label></label>
                        <h4>{ }</h4>
                        </Col>
                        <Col md={7}> 
                        <label>Additional Information</label>
                        <h4>{ Additionaldetail }</h4>
                        </Col>
                </Row>
                <br/>
                <br/>
                    <Row className="inline">
                    <Button className="back"
                            onClick={this.back}>       
                        <Icon type="left" />
                        Back
                    </Button>
                    <Button className="continue"
                            onClick={this.continue}>
                        Submit
                        <Icon type="right" />
                    </Button>
                    </Row>
                    <br/>
            </div>
        )
    }
}

export default confirm;