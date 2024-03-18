import React, { Fragment, useState } from 'react';
import { Plus } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Container, Row, Input, Button, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../Todo/leadsetting.css";
import { MdOutlineModeEdit } from "react-icons/md";
import TodoList from './TodoList';
import { Breadcrumbs } from '@mui/material';

const TodoContain = () => {

  return (
    <Fragment>
      <Container fluid={true}>
        <div className='todo-manage'>
          <TodoList name="Lead Type" placeholder="Add Lead Type ..." Modals="Edit Lead Type" />
          <TodoList name="Lead Source" placeholder="Add Lead Source ..." Modals="Edit Lead Source" />
        </div>
        <div className='todo-manage'>
          <TodoList name="Seller Type" placeholder="Add Seller Type ..." Modals="Edit Seller Type" />
          <TodoList name="Skill Type" placeholder="Add Skill Type ..." Modals="Edit Skill Type" />
        </div>
        <div className='todo-manage'>
          <TodoList name="Product Type" placeholder="Add Product Type ..." Modals="Edit Product Type" />
          <TodoList name="Available Product" placeholder="Add Available Product ..." Modals="Edit Available Product " />
        </div>
      </Container>
    </Fragment>
  );
};

export default TodoContain;
