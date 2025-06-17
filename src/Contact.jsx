import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap'; 
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Card } from 'react-bootstrap';

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";



function Contact() {
    return (
        <div>
            <Header />
            <div>
                <div className="position-relative w-100" style={{ height: '15rem' }}>


                    <img src={require('./img/produt.webp')} alt="" className="w-100 h-100 object-fit-cover"
                        style={{ objectFit: 'cover', height: '100%' }} />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white">
                        <div className="text-uppercase small mb-1">
                            Home--Contact
                        </div>
                        <h1 className="fw-bold fs-2">
                            <h1> Contact </h1>
                        </h1>
                    </div>
                </div>
            </div>

            {/* icone start */}
            <div className="bg-white text-dark py-5">
                <Container>
                    <h2 className="text-center fw-bold fs-2 mb-5">Quick Support</h2>
                    <Row className="justify-content-center text-center g-4">
                        <Col xs={12} sm={6} md={4}>
                            <Card className="border-0">
                                <div className="rounded-circle bg-light mx-auto d-flex align-items-center justify-content-center" style={{ width: '7rem', height: '7rem' }}>
                                    <FaLocationDot size={28} className="text-dark" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-uppercase fw-semibold">Store Location</Card.Title>
                                    <Card.Text className="text-muted">
                                        14 Ringe lane, Las Vegas, NV, 89156 United States
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="border-0">
                                <div className="rounded-circle bg-light mx-auto d-flex align-items-center justify-content-center" style={{ width: '7rem', height: '7rem' }}>
                                    <FaPhone size={28} className="text-dark" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-uppercase fw-semibold">Contact Call</Card.Title>
                                    <Card.Text className="text-muted">+00-1234567890</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={4}>
                            <Card className="border-0">
                                <div className="rounded-circle bg-light mx-auto d-flex align-items-center justify-content-center" style={{ width: '7rem', height: '7rem' }}>
                                    <IoMdMailUnread size={28} className="text-dark" />
                                </div>
                                <Card.Body>
                                    <Card.Title className="text-uppercase fw-semibold">Contact Mail</Card.Title>
                                    <Card.Text className="text-muted">demo@support.com</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* icone end */}

            {/* city start */}
            <div className="container py-5">
                <h1 className="text-center mb-5 fw-semibold fs-1">Get in touch</h1>
                <div className="row g-4 text-center">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="p-4 border rounded contact-card h-100">
                            <img src={require('./img/France.jpg')} alt="" className="mb-4" />
                            <p className="mb-4">27 Eden walk eden centre orchard view, paris, France</p>
                            <p className="mb-1 fw-medium">+91 123 456 7890</p>
                            <p className="mb-3 fw-medium">support@store.com</p>
                            <h5 className="fw-semibold">France</h5>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="p-4 border rounded contact-card h-100">
                            <img src={require('./img/Canada.jpg')} alt="" className="mb-4" />
                            <p className="mb-4">523 North stockport road bridge, toronto, Canada</p>
                            <p className="mb-1 fw-medium">+91 123 456 7890</p>
                            <p className="mb-3 fw-medium">support@store.com</p>
                            <h5 className="fw-semibold">Canada</h5>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="p-4 border rounded contact-card h-100">
                            <img src={require('./img/England.jpg')} alt="" className="mb-4" />
                            <p className="mb-4">048 Holburn street 20th floor camberley, England</p>
                            <p className="mb-1 fw-medium">+91 123 456 7890</p>
                            <p className="mb-3 fw-medium">support@store.com</p>
                            <h5 className="fw-semibold">England</h5>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="p-4 border rounded contact-card h-100">

                            <img src={require('./img/London.jpg')} alt="" className="mb-4" />
                            <p clasclassNames="mb-4">425 Broadway, 20th floor pharchard view, London</p>
                            <p className="mb-1 fw-medium">+91 123 456 7890</p>
                            <p className="mb-3 fw-medium">support@store.com</p>
                            <h5 className="fw-semibold">London</h5>
                        </div>
                    </div>
                </div>
            </div>

            {/* city end */}

            {/* contact start  */}
                 <div className="bg-light min-vh-100 d-flex flex-column align-items-center p-4">
      <h1 className="text-center fw-bold display-5 text-dark mb-5">
        Keep in touch with us
      </h1>
      <Container>
        <Form className="w-100">
          <Row>
            <Col md={6} className="mb-4">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Your full name"
                  className="p-3"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Your email address"
                  className="p-3"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Your mobile number"
                  className="p-3"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="I accept the terms & conditions and I understand that my data will be held securely in accordance with the privacy policy."
                  className="text-muted"
                />
              </Form.Group>
            </Col>

            <Col md={6} className="mb-4 d-flex flex-column">
              <Form.Group className="mb-3 flex-grow-1">
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Your message here..."
                  className="p-3"
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="align-self-start px-4 py-2 fw-bold">
                SEND MESSAGE
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>

            {/* contact ens  */}
            <Footer />
        </div>
    )
}

export default Contact
