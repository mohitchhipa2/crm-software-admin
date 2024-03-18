import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
import BasicFormControlClass from './BasicFormControl';
import HtmlControlClass from './HtmlControl';
import EdgesInputStyleClass from './EdgesInputStyle';
import FlatInputStyleClass from './FlatInputStyle';
import RaiseInputStyleClass from './RaiseInputStyle';
import SolidInputStyleClass from './SolidInputStyle';
import InputSizingClass from './InputSizing';
import CustomControlsClass from './CustomControls';

const BaseInput = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Daily Task' parent='Forms' title='Daily Task' subParent='Forms Controls' />
      <Container fluid={true}>
        <BasicFormControlClass />
      </Container>
    </Fragment>
  );
};

export default BaseInput;
