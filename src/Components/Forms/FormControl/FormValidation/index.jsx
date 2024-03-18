import React, { Fragment } from 'react';
import TooltipForm from '../TooltipForm';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import { Tooltips } from '../../../../Constant';
import { Breadcrumbs, H5 } from '../../../../AbstractElements';
import CustomStylesClass from './CustomStyles';
import BrowserDefaultsClass from './BrowserDefaults';
import SupportedElementsClass from './SupportedElements';

const FormValidation = () => {

    return (
        <Fragment>
            <Breadcrumbs mainTitle='Project Commision Setting' parent="Forms" title="Project Commision Setting " subParent='Forms Controls' />
            <Container fluid={true}>
                <Row>
                <BrowserDefaultsClass />
                </Row>
            </Container>
        </Fragment>
    );
};

export default FormValidation;