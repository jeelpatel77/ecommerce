import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { Card } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";



function Home() {
    return (
        <div>
            <Header />
            {/* home start */}
            <div>
                <div className="d-flex flex-column flex-md-row min-vh-100">
                    <div className=" d-flex flex-column justify-content-center px-4 px-md-5 py-5 w-100 w-md-33">
                        <p className="text-muted small mb-3">Sale up to 80% off</p>
                        <h1 className="display-4 fw-bold text-dark lh-tight"> Redefine<br /> your unique<br /> style </h1>
                        <Badge bg="light" text="dark" className='mt-4 fw-semibold px-4 py-2 shadow-sm' > SHOP NOW</Badge>
                    </div>
                    <div className="flex-grow-1 d-flex">
                        <img src={require('./img/m1.webp')} alt="" className="object-fit-cover w-100" style={{ maxHeight: '100vh', objectFit: 'cover', marginTop: '90px', padding: '30px' }} />

                    </div>
                </div>
            </div>

            {/* home end */}
            {/* icons start */}
            <div className='i'>
                <div class="container py-5">
                    <div className="row justify-content-between gy-4">
                        <div className="col-md-3 d-flex align-items-center min-w-220">
                            <i className=" text-dark fs-4 me-3"><FaShoppingCart /></i>
                            <div>
                                <p className="fw-semibold text-dark mb-1">Free shipping</p>
                                <p class="text-muted mb-0">Free shipping on orders $65.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center min-w-220">
                            <i className=" text-dark fs-4 me-3"><FaTruck /></i>
                            <div>
                                <p className="fw-semibold text-dark mb-1">Free returns</p>
                                <p className="text-muted mb-0">30-days free return policy.</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center min-w-220">
                            <i className=" text-dark fs-4 me-3"><FaCcMastercard /></i>
                            <div>
                                <p className="fw-semibold text-dark mb-1">Secured payments</p>
                                <p className="text-muted mb-0">We accept all major credit cards</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center min-w-220">
                            <i className=" text-dark fs-4 me-3"><RiCustomerServiceFill /></i>
                            <div>
                                <p className="fw-semibold text-dark mb-1">Customer service</p>
                                <p className="text-muted mb-0">Top notch customer service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* icone end */}

            {/* about start */}

                    <div>
            <Container fluid className="py-5 px-4 bg-white">
                <Row className="align-items-center">
                    
                    {/* Image Column */}
                    <Col xs={12} md={6} className="mb-4 mb-md-0 text-center">
                        <img src={require('./img/man1 .jpg')} alt="Man" className="img-fluid rounded" />
                    </Col>

                    {/* Text Column */}
                    <Col xs={12} md={6}>
                        <h6 className="text-muted text-center text-md-start">About us</h6>
                        <h2 className="fw-bold mb-3 text-center text-md-start">
                            Express yourself <br /> through fashion
                        </h2>
                        <p className="text-secondary mb-4 text-center text-md-start" style={{ maxWidth: "600px", margin: "0 auto" }}>
                            Therefore, our aim is to support people in expressing their personality
                            freely through fashion. Our passionate Fashion team empowers our customers
                            to use fashion as expression by inspiring them with a diverse range of
                            brands and styles.
                        </p>

                        <div className="text-center text-md-start">
                            <Badge pill bg="primary" style={{ fontSize: "1rem", padding: "0.6em 1.2em", cursor: "pointer" }}>
                                READ MORE
                            </Badge>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
            {/* about end */}

            {/* card start  */}

            <div class="container py-5">
                <div className="row g-4">

                    <div className="col-6 col-md-3">
                        <div className="category-card">
                            <img src={require('./img/man1 (1).jpg')} alt="" />
                            <div className="item-badge">15 Items</div>
                            <div className="category-overlay">Jackets</div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="category-card">
                            <img src={require('./img/man1 (2).jpg')} alt="" />
                            <div className="item-badge">15 Items</div>
                            <div className="category-overlay">Tops</div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="category-card">
                            <img src={require('./img/man1 (3).jpg')} alt="" />
                            <div className="item-badge">15 Items</div>
                            <div className="category-overlay">Shorts</div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="category-card">
                            <img src={require('./img/man1 (4).jpg')} alt="" />
                            <div className="item-badge">15 Items</div>
                            <div className="category-overlay">Shirts</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cerd end  */}


            {/* shop start  */}
             <div>
                <div className="container my-5">
                    <h2 className="text-center mb-4 fw-bold">Products of the week</h2>
                    <div className="row row-cols-1 row-cols-md-4 g-4">


                        <div className="col">
                            <div className="card product-card p-3">
                                <span className="sale-badge">Sale 14%</span>
                                <i className=" icon-popup"><FaHeart /></i>
                                <img src={require('./img/shop1 (1).jpg')} alt="" className='card-img-top product-img' />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Black -hoddie</h5>
                                    <p className="card-text">$45.00 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card p-3">
                                <span className="sale-badge">Sale 10%</span>
                                <i className=" icon-popup"><FaHeart /></i>
                                <img src={require('./img/shop2.jpg')} alt="" className='card-img-top product-img' />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Check tunic</h5>
                                    <p className="card-text">$20.00 <span className="price-del">$30.00</span></p>
                                </div>
                            </div>
                        </div>
                         <div className="col">
                            <div className="card product-card p-3">
                                <span className="sale-badge">Sale 24%</span>
                                <i className=" icon-popup"><FaHeart /></i>
                                <img src={require('./img/shop2.jpg')} alt="" className='card-img-top product-img' />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Check tunic</h5>
                                    <p className="card-text">$17.00 <span className="price-del">$30.00</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card product-card p-3">
                                <span className="sale-badge">Sale 20%</span>
                                <i className=" icon-popup"><FaHeart /></i>
                                <img src={require('./img/shop3.jpg')} alt="" className='card-img-top product-img' />
                                <div className="card-body text-center">
                                    <h5 className="card-title">T-shirt</h5>
                                    <p className="card-text">$37.00 </p>
                                </div>
                            </div>
                        </div>
                       


                    </div>
                </div>
            </div> 

          

            {/* shop end  */}

            {/* customer  start */}

             <div>

               <h1 style={{textAlign: 'center'}}>Customer love</h1>
                <Container fluid className="py-5 px-4 bg-white">
                    <Row className="align-items-center">
                        {/* Left Image */}
                        <Col md={6} className="text-center">
                            <img src={require('./img/m1.webp')} alt=""  className='man'/>
                            
                        </Col>

                        {/* Right Content */}
                        <Col md={6}>
                            <h6 className="info" bg="info"><IoStar />&nbsp; <IoStar />&nbsp;<IoStar />&nbsp;<IoStar />&nbsp;<IoStar /></h6>
                           
                            <p className="text-secondary mb-4 man1" style={{ maxWidth: "600px" }}>
                                Therefore, our aim is to support people in expressing their personality
                                freely through fashion. Our passionate Fashion team empowers our customers
                                to use fashion as expression by inspiring them with a diverse range of
                                brands and styles.
                            </p>
                           <h3> <p>Michel simth</p></h3>
                             <h3> <p>Product Designer</p></h3>
                        </Col>

                    </Row>

                </Container>

            </div>
            {/* customer emd */}
            <Footer />
        </div>
    )
}

export default Home
