import CartData from './CartData';
import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { Card, Col, Container, Row } from 'reactstrap';

const ProductCartConatain = () => {
    return (
        <Fragment>
            <Breadcrumbs parent="Ecommerce" title="Account Detail" mainTitle='Account Detail' />
            <Container fluid={true}>
                <Row>
                    <CartData/>
                </Row>
            </Container>
        </Fragment>
    );
};
export default ProductCartConatain;