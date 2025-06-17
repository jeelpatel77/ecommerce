import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container, Row, Col, } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { TbIroning1 } from "react-icons/tb";
import { TbBleachOff } from "react-icons/tb";
import { TbWashDrycleanOff } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";



function Blog() {
  return (
    <div>
      <Header />

      {/* start */}
      <Container className="py-5">
        <h4 className="mb-4">Description</h4>
        <Row className="align-items-center">
          <Col md={4} sm={12} className="mb-4 mb-md-0 text-center">

            <img src={require('./img/womanjpg.jpg')} alt=""   style={{ borderRadius: '50%' }}/>
          </Col>

          <Col md={8} sm={12}>
            <Row>
              <Col md={6} sm={12} className="mb-4">
                <h6 className="fw-bold">Product Specifications</h6>
                <p>
                  Care for fiber: 30% more recycled polyester. We label garments
                  manufactured using environmentally friendly technologies and raw
                  materials with the Join Life label.
                </p>

                <h6 className="fw-bold">Washing Instructions</h6>
                <ul className="list-unstyled">
                  <li> <TbIroning1 /> &nbsp; Iron maximum 100°C.</li>
                  <li> <TbBleachOff /> &nbsp;Do not bleach/bleach.</li>
                  <li> <TbWashDrycleanOff />&nbsp; Do not dry clean.</li>
                </ul>
              </Col>

              <Col md={6} sm={12} className="mb-4">
                <h6 className="fw-bold">Material</h6>
                <p>
                  The Green to Wear 2.0 standard aims to minimize the environmental
                  impact of textile production. To this end, we have developed
                  Inditex's The List program.
                </p>

                <h6 className="fw-bold">Wearing</h6>
                <p>Model is 1.84 m wearing</p>
                <p>Size M</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* end */}

      {/* start */}
      <Container fluid className="py-5" style={{ backgroundColor: '#fff' }}>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={require('./img/woman.jpg')} alt="New Woman Fashion" className="img-fluid rounded"
              style={{ maxHeight: '600px', objectFit: 'cover'}} />

          </Col>

          <Col md={6} className="px-5">
            <h2 className="fw-bold mb-4">New woman fashion arrivals</h2>
            <p className="mb-4" style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
              As part of our mission to create space for women to express their sensuality without shame, fear, or the patriarchal gaze, we’re asking women to invite us into their most intimate space.
            </p>
            <Button
              variant="dark"
              size="lg"
              className="px-4 py-2"
              style={{
                borderRadius: '10px',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#333';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#000';
                e.target.style.transform = 'scale(1)';
              }}
            >
              SHOP NOW
            </Button>
          </Col>
        </Row>
      </Container>

      {/* End */}
      {/* start */}
      <Container fluid className="py-5" style={{ backgroundColor: '#fff' }}>
        <Row className="align-items-center">


          <Col md={6} className="px-5">
            <h2 className="fw-bold mb-4">New woman fashion arrivals</h2>
            <p className="mb-4" style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
              As part of our mission to create space for women to express their sensuality without shame, fear, or the patriarchal gaze, we’re asking women to invite us into their most intimate space.
            </p>
            <Button
              variant="dark"
              size="lg"
              className="px-4 py-2"
              style={{
                borderRadius: '10px',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#333';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#000';
                e.target.style.transform = 'scale(1)';
              }}
            >
              SHOP NOW
            </Button>
          </Col>

          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={require('./img/woman1.jpg')} alt="New Woman Fashion" className="img-fluid rounded"
              style={{ maxHeight: '600px', objectFit: 'cover' }} />
          </Col>
        </Row>
      </Container>
      {/* end  */}

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

      <Footer />
    </div>
  )
}

export default Blog
