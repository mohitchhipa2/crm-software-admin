import React, { Fragment, useContext, useState } from 'react';
import { Plus } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Container, Row, Input } from 'reactstrap';


// import "./leadsetting.css";

const BasicFormControlClass = () => {
    return (
        <>
            <Container fluid={true} className='email-wrap bookmark-wrap todo-wrap'>
                <Row>
                    <Col xl='9' className='xl-50 box-col-6'>
                        <Card>
                            <CardBody>
                                <h6 style={{ color: "#7366FF" }}>Referral Commission for joining in amount :-</h6>
                                <h4 style={{ display: "flex", justifyContent: "center" }}>200 Rs.</h4>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl='9' className='xl-50 box-col-6'>
                        <Card>
                            <CardBody>
                                <h6 style={{ color: "#7366FF" }}> Task Completed Amount :-</h6>
                                <h4 style={{ display: "flex", justifyContent: "center" }}>300 Rs.</h4>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BasicFormControlClass;