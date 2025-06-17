import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Card } from 'react-bootstrap';
import { FaTruckMoving } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";




function Page() {
    return (
        <div>
            <Header />
            <div>
                <div className="position-relative w-100" style={{ height: '15rem' }}>


                    <img src={require('./img/produt.webp')} alt="" className="w-100 h-100 object-fit-cover"
                        style={{ objectFit: 'cover', height: '100%' }} />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white">
                        <div className="text-uppercase small mb-1">
                            Home-About
                        </div>
                        <h1 className="fw-bold fs-2">
                            <h1> About Us </h1>
                        </h1>
                    </div>
                </div>
            </div>

            {/* about start  */}
            <div className='contact-card:hover' style={{ textAlign: 'center' }} >
                <h4>slince 1982 story</h4>
                <h1> Our about story</h1>
                {/* <img src={require('./img/about-us.webp')} alt="" sizes="" srcset="" /> */}
                <Image src={require('./img/about-us.webp')} alt="About us" fluid />
                <div style={{ backgroundColor: 'white', fontFamily: 'Montserrat, sans-serif' }}>
                    <Container className="py-5">
                        <Row className="text-center gy-4">
                            <Col sm={12} md={4}>
                                <h2 className="text-dark fw-semibold fs-6 mb-3">
                                    5,000+ HAPPY CUSTOMER
                                </h2>
                                <p className="text-muted small mx-auto" style={{ maxWidth: '20rem' }}>
                                    The customer's perception is your reality. Your most unhappy customers are your greatest source of learning.
                                </p>
                            </Col>
                            <Col sm={12} md={4}>
                                <h2 className="text-dark fw-semibold fs-6 mb-3">
                                    29+ AWARDS WON
                                </h2>
                                <p className="text-muted small mx-auto" style={{ maxWidth: '20rem' }}>
                                    Awards can give you a tremendous amount of encouragement to keep getting better, no matter how young or old you are.
                                </p>
                            </Col>
                            <Col sm={12} md={4}>
                                <h2 className="text-dark fw-semibold fs-6 mb-3">
                                    40 YEARS OF EXPERIENCES
                                </h2>
                                <p className="text-muted small mx-auto" style={{ maxWidth: '20rem' }}>
                                    The major problem is that we tend to live our life in our head, in our thoughts, cut off from our actual experience.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
            {/* about end  */}

            {/* carsol start  */}

            <div>
                <div class="container py-5">
                    <div class="text-center mb-5">
                        <p class="text-muted mb-1">Highly skilled</p>
                        <h2 class="fw-semibold fs-1">Meet our teams</h2>
                    </div>
                    <div class="row g-4">
                        {/* <Team Member 1  */}
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="text-center category-card">
                                <img src={require('./img/team-1.jpg')} alt="Harvey Jones" class="team-img" height="400" />
                                <h5 class="mt-3 fw-semibold">HARVEY JONES</h5>
                                <p class="text-muted">CEO &amp; Founder</p>
                            </div>
                        </div>

                        {/* <Team Member 2  */}
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="text-center category-card">

                                <img src={require('./img/team-2.jpg')} alt="Harvey Jones" class="team-img" height="400" />
                                <h5 class="mt-3 fw-semibold">MORY ORLANDO</h5>
                                <p class="text-muted">Marketing</p>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="text-center category-card">

                                <img src={require('./img/team-3.jpg')} alt="Harvey Jones" class="team-img" height="400" />
                                <h5 class="mt-3 fw-semibold">HARLIE PUTH</h5>
                                <p class="text-muted">Designer &amp; Model</p>
                            </div>
                        </div>

                        {/* <Team Member 4 */}
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="text-center category-card">

                                <img src={require('./img/team-4.jpg')} alt="Harvey Jones" class="team-img" height="400" />
                                <h5 class="mt-3 fw-semibold">TRISTIN CHINEZE</h5>
                                <p class="text-muted">Distribution</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* carsol end  */}

            <hr />

             <div className="bg-white text-dark py-5">
                <Container>
                    <h2 className="text-center fw-bold fs-2 mb-5">Quick Support</h2>
                    <Row className="justify-content-center text-center g-4">
                        <Col xs={12} sm={6} md={4}>
                            <Card className="border-0">
                                <div className="rounded-circle bg-light mx-auto d-flex align-items-center justify-content-center" style={{ width: '7rem', height: '7rem' }}>
                                    <FaTruckMoving size={28} className="text-dark" />
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
                                    <LuRefreshCw size={28} className="text-dark" />
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
                                    <FiDollarSign size={28} className="text-dark" />
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
            <Footer />
        </div>
    )
}

export default Page
