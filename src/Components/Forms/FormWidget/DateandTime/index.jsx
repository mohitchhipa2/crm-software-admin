import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs, H5 } from '../../../../AbstractElements';
import DateTimeForm from './DateTimeForm';
import NotificationNoticed from '../../../../Layout/Header/RightHeader/NotificationNoticed';

const DateTimeContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent="Forms" title="Date and Time Picker" subParent='Form Widgets' mainTitle="Date and Time Picker" />
      <Container fluid={true}>
        <NotificationNoticed/>
      </Container>
    </Fragment>
  );
};
export default DateTimeContain;