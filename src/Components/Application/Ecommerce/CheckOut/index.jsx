import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import { BillingDetails } from '../../../../Constant';
import CheckoutTableData from './CheckoutTableData';
import ProductPlaceOrder from './ProductPlaceOrder';


const CheckOutContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='Ecommerce' title='Task Reward' mainTitle='Task Reward' />
      <Container fluid={true}>
        <Row>
<CheckoutTableData/>
        </Row>
      </Container>
    </Fragment>
  );
};
export default CheckOutContain;
