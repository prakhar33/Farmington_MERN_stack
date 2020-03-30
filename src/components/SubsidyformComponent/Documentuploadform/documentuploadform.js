import React, {Component } from 'react';

import { Row, Col, Form, Icon, Input, Button, Select, Upload, label, Progress} from 'antd';
import './documentuploadform.css'

const {Option}= Select;
 
export class documentuploadform extends Component{
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
        const { Aadharcard,  PANcard, Bankpassbook, Incomecerti,
            Cropregistercerti, Landcerti, Photo, Signature}= this.props;
        return(
            <div className="container">
                <Form onSubmit={this.continue} className="form container">
                <Row>
                <Progress
                    strokeColor={{
                        from: '#108ee9',
                        to: '#87d068',
                    }}
                    percent={60}
                    status="active"
                />
                </Row>
                    <h2>Upload Documents-</h2>
                    <Row className="inline">
                        <Col md={8} offset={0}>
                        <Form.Item label="Aadhar card">
                        <Upload 
                                action="/upload.do"
                                onChange={handlechange('Aadharcard')}
                                defaultFileList={Aadharcard}>
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>
                        </Form.Item>
                        </Col>
                        <Col md={4}> 
                        </Col>
                        <Col md={8}> 
                        <Form.Item label="PAN card">
                        <Upload 
                                action="/upload.do"
                                onChange={handlechange('PANcard')}
                                defaultFileList={PANcard}>
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row className="inline">
                        <Col md={8} offset={0}>
                        <Form.Item label="Bank Passbook">
                        <Upload 
                                action="/upload.do"
                                onChange={handlechange('Bankpassbook')}
                                defaultFileList={Bankpassbook}>
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>
                        </Form.Item>
                        </Col>
                        <Col md={4}> 
                        </Col>
                        <Col md={8}> 
                        <Form.Item label="Income Certificate">
                        <Upload 
                                action="/upload.do"
                                onChange={handlechange('Incomecerti')}
                                defaultFileList={Incomecerti}>
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row className="inline">
                        <Col md={8} offset={0}>
                        <Form.Item label="Land Certificate">
                        <Upload 
                                action="/upload.do"
                                onChange={handlechange('Landcerti')}
                                defaultFileList={Landcerti}>
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>
                        </Form.Item>
                        </Col>
                        <Col md={4}> 
                        </Col>
                        <Col md={8}> 
                        <Form.Item label="Crop Registeraton Certificate">
                        <Upload 
                                action="/upload.do"
                                onChange={handlechange('Cropregistercerti')}
                                defaultFileList={Cropregistercerti}>
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row className="inline">
                        <Col md={8} offset={0}>
                        <Form.Item label="Photo">
                        <Upload 
                                action="/upload.do"
                                onChange={handlechange('Photo')}
                                defaultFileList={Photo}>
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>
                        </Form.Item>
                        </Col>
                        <Col md={4}> 
                        </Col>
                        <Col md={8}> 
                        <Form.Item label="Signature">
                        <Upload 
                                action="/upload.do"
                                onChange={handlechange('Signature')}
                                defaultFileList={Signature}>
                        <Button>
                            <Icon type="upload" /> Click to upload
                        </Button>
                        </Upload>
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
                </Form>
            </div>
        )
    }
}

export default documentuploadform;