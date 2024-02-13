import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row, Table } from 'react-bootstrap';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const Employtable = ({ employees, handleDelete, handleSearch, filteredEmployees, updateEmployee }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  };

  return (
    <Container>
      <div className='employ-data'>
        <h1>employee files Query</h1>
        <Formik
          initialValues={{ code: '', field: '' }}
          onSubmit={handleSearch}
        >
          <Form>
            <Row>
              <Col lg={4} xs={12}>
                <Field name="code" className="form-control mb-3" placeholder="Employee Code" />
              </Col>
              <Col lg={4} xs={12}>
                <Field name="name" className="form-control mb-3" placeholder="name" />
              </Col>
              <Col lg={4}>
                <Button type="submit" className='me-2'>Search</Button>
                <Link to="/create" className='btn btn-primary'>Create</Link>
              </Col>
            </Row>
          </Form>
        </Formik>
        <Table responsive striped>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Date Hiring</th>
              <th>Job Code</th>
            </tr>
          </thead>
          <tbody>

            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <tr key={employee.code}>
                  <td>{employee.code}</td>
                  <td>{employee.name}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.date}</td>
                  <td>{employee.jcode}</td>
                  <td>
                    <Button onClick={() => handleEdit(employee)} className='me-2 mb-2'>Edit</Button>
                    <Button onClick={() => handleDelete(employee)} className='mb-2'>Delete</Button>
                  </td>
                </tr>
              ))
            ) : (
              employees.length? employees.map((employee) => (
                <tr key={employee.code}>
                  <td>{employee.code}</td>
                  <td>{employee.name}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.date}</td>
                  <td>{employee.jcode}</td>
                  <td>
                    <Button onClick={() => handleEdit(employee)} className='me-2 mb-2'>Edit</Button>
                    <Button onClick={() => handleDelete(employee)} className='mb-2'>Delete</Button>
                  </td>
                </tr>
              )):(<p className='no-data'>No data avliable</p>)
            )}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Edit form */}
          <Formik
            initialValues={{
              code: selectedEmployee ? selectedEmployee.code : '',
              name: selectedEmployee ? selectedEmployee.name : '',
              salary: selectedEmployee ? selectedEmployee.salary : '',
              date: selectedEmployee ? selectedEmployee.date : '',
              jcode: selectedEmployee ? selectedEmployee.jcode : '',

            }}
            onSubmit={(values) => {
              const updatedEmployees = employees.map((emp) => {
                if (emp.code === selectedEmployee.code) {
                  return { ...emp, ...values };
                }
                return emp;
              });
              updateEmployee(updatedEmployees)
              handleCloseModal();
            }}
          >
            <Form>
              <Row>
                <Col lg={6} md={6} xs={12}>
                  <label>Code:</label>
                  <Field name="code" className="form-control mb-3" placeholder="Employee Code" />
                </Col>
                <Col lg={6} md={6} xs={12}>
                  <label>Name:</label>
                  <Field name="name" className="form-control mb-3" placeholder="Name" />
                </Col>
                <Col xs={12}>
                  <label>Salary:</label>
                  <Field name="salary" className="form-control mb-3" placeholder="Department" />
                </Col>
                <Col lg={6} md={6} xs={12}>
                  <label>Date:</label>
                  <Field name="date" className="form-control mb-3" placeholder="Department" />
                </Col>
                <Col lg={6} md={6} xs={12}>
                  <label>Job code:</label>
                  <Field name="jcode" className="form-control mb-3" placeholder="Department" />
                </Col>
              </Row>
              <Button type="submit">Save</Button>
            </Form>
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default Employtable
