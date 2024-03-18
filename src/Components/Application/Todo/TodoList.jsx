import React, { Fragment, useState } from 'react';
import { Plus } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Container, Row, Input, Button, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../Todo/leadsetting.css";
import { MdOutlineModeEdit } from "react-icons/md";

const TodoList = ({ name, placeholder, Modals }) => {
  const [leadTypes, setLeadTypes] = useState([]);
  const [newLeadType, setNewLeadType] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editedLeadType, setEditedLeadType] = useState('');

  const handleAddLeadType = () => {
    if (newLeadType.trim() !== '') {
      setLeadTypes([...leadTypes, newLeadType]);
      setNewLeadType('');
    }
  };

  const handleDeleteLeadType = (index) => {
    const updatedLeadTypes = [...leadTypes];
    updatedLeadTypes.splice(index, 1);
    setLeadTypes(updatedLeadTypes);
  };

  const handleEditLeadType = (index) => {
    setEditIndex(index);
    setEditedLeadType(leadTypes[index]);
    setModalOpen(true);
  };

  const handleSaveLeadType = () => {
    const updatedLeadTypes = [...leadTypes];
    updatedLeadTypes[editIndex] = editedLeadType;
    setLeadTypes(updatedLeadTypes);
    setModalOpen(false);
  };

  return (
    <Fragment>
      <Container style={{ marginTop: "30px" }} fluid={true} className='email-wrap bookmark-wrap todo-wrap'>
        <Row>
          <Col xl='9' className='xl-100 box-col-6'>
            <Card>
              <CardHeader>
                <h4 style={{ color: 'blueviolet' }}>{name}</h4>
              </CardHeader>
              <CardBody className='lead-type'>
                {leadTypes.map((leadType, index) => (
                  <div key={index} className='lead-types-flex'>
                    <p>{leadType}</p>
                    <div className='lead-type-icon'>
                      <i onClick={() => handleEditLeadType(index)}><MdOutlineModeEdit /></i>
                      <i className='icon-trash' onClick={() => handleDeleteLeadType(index)}></i>
                    </div>
                  </div>
                ))}
              </CardBody>
              <CardFooter style={{ gap: "20px" }} className='d-flex'>
                <Input placeholder={placeholder} value={newLeadType} onChange={(e) => setNewLeadType(e.target.value)} />
                <Button onClick={handleAddLeadType}>Add</Button>
              </CardFooter>
            </Card>
          </Col>

        </Row>

        <Modal style={{ width: "300px" }} isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <ModalHeader toggle={() => setModalOpen(!modalOpen)}>{Modals}</ModalHeader>
          <ModalBody>
            <Input placeholder={Modals} value={editedLeadType} onChange={(e) => setEditedLeadType(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleSaveLeadType}>Save</Button>{' '}
            <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default TodoList;
