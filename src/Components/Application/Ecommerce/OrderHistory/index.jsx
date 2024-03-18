import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements';
import { Container, Row } from 'reactstrap';
import NewOrderClass from './NewOrder';
import ShippedOrdersClass from './ShippedOrder';
import CancelledOrdersClass from './CancelledOrder';
import OrderHistoryTableCard from './OrderHistoryTableCard';

const OrderHistoryContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='Ecommerce' title='KYC Approval' mainTitle='KYC Approval' />
      <Container fluid={true} className='orderhistory'>
        <Row>
          <NewOrderClass/>
        </Row>
      </Container>
    </Fragment>
  );
};
export default OrderHistoryContain;
