import { Formik } from 'formik';
import React, { useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const Createemploy = ({ createemploy }) => {
    const [savedValues, setSavedValues] = useState(null);
    const navigate = useNavigate()
    //modal function 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //handleSubmitone function
    const handleSubmitone = (values) => {
        setSavedValues(values);
        handleShow()
    }
    // handleSubmittwo function
    const handleSubmittwo = () => {
        createemploy(savedValues);
        handleClose();
        setTimeout(() => {
            alert('success to create employee')
            navigate('/')
        }, 500);
        setSavedValues(null)
    }
    //formik initialvalues
    const initialValues = {
        code: '',
        name: '',
        salary: '',
        date: '',
        jcode: ''
    };
    //formik validation
    const validate = (values) => {
        const errors = {};
        if (!values.code) {
            errors.code = 'Code is required';
        }

        if (!values.name) {
            errors.name = 'Name is required';
        }

        if (!values.salary) {
            errors.salary = 'Salary is required';
        }

        if (!values.date) {
            errors.date = 'Date is required';
        }

        if (!values.jcode) {
            errors.jcode = 'Job code is required';
        }

        return errors;
    };
    return (
        <div className='employ-create'>
            <div className='employ-container'>
                <h1>Add New Employee </h1>
                <Container>
                    <Formik initialValues={initialValues} onSubmit={handleSubmitone} validate={validate} validateOnBlur validateOnChange>
                        {({ handleSubmit, handleChange, values, errors, resetForm }) => (
                            <Form onSubmit={handleSubmit} >
                                <Row>
                                    <Col lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Code:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="code"
                                                value={values.code}
                                                onChange={handleChange}
                                                className={errors.code ? 'form-control is-invalid' : 'form-control'}
                                            />
                                            {errors.code && <div className="invalid-feedback">{errors.code}</div>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                className={errors.name ? 'form-control is-invalid' : 'form-control'}
                                            />
                                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Salary:</Form.Label>
                                            <Form.Select
                                                name="salary"
                                                value={values.salary}
                                                onChange={handleChange}
                                                className={errors.salary ? 'form-select is-invalid' : 'form-select'}
                                            >
                                                <option >Select salary</option>
                                                <option value="5000">5000</option>
                                                <option value="15000">15000</option>
                                                <option value="30000">30000</option>
                                            </Form.Select>
                                            {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Date of Hiring:</Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="date"
                                                value={values.date}
                                                onChange={handleChange}
                                                className={errors.date ? 'form-control is-invalid' : 'form-control'}
                                            />
                                            {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Job code:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="jcode"
                                                value={values.jcode}
                                                onChange={handleChange}
                                                className={errors.jcode ? 'form-control is-invalid' : 'form-control'}
                                            />
                                            {errors.jcode && <div className="invalid-feedback">{errors.jcode}</div>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <div className="form-button">
                                    <Button type="submit">Save</Button>
                                    <Button type='reset' onClick={resetForm}>Cancel</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Employee</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Formik initialValues={savedValues} onSubmit={handleSubmittwo} validate={validate} validateOnBlur validateOnChange>
                                {({ handleSubmit, handleChange, values, errors }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col lg={6} xs={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Code:</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="code"
                                                        value={values.code}
                                                        onChange={handleChange}
                                                        className={errors.code ? 'form-control is-invalid' : 'form-control'}
                                                    />
                                                    {errors.code && <div className="invalid-feedback">{errors.code}</div>}
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} xs={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Name:</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        className={errors.name ? 'form-control is-invalid' : 'form-control'}
                                                    />
                                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Salary:</Form.Label>
                                                    <Form.Select
                                                        name="salary"
                                                        value={values.salary}
                                                        onChange={handleChange}
                                                        className={errors.salary ? 'form-select is-invalid' : 'form-select'}
                                                    >
                                                        <option value="">Select salary</option>
                                                        <option value="5000">5000</option>
                                                        <option value="15000">15000</option>
                                                        <option value="30000">30000</option>
                                                    </Form.Select>
                                                    {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={6} xs={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Date of Hiring:</Form.Label>
                                                    <Form.Control
                                                        type="date"
                                                        name="date"
                                                        value={values.date}
                                                        onChange={handleChange}
                                                        className={errors.date ? 'form-control is-invalid' : 'form-control'}
                                                    />
                                                    {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} xs={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Job code:</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="jcode"
                                                        value={values.jcode}
                                                        onChange={handleChange}
                                                        className={errors.jcode ? 'form-control is-invalid' : 'form-control'}
                                                    />
                                                    {errors.jcode && <div className="invalid-feedback">{errors.jcode}</div>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="form-button">
                                            <Button type="submit">Save</Button>
                                            <Button onClick={handleClose}>Cancel</Button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </Modal.Body>

                    </Modal>
                </Container>
            </div>

        </div>
    )
}

export default Createemploy
