import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaMap } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";



function Footer() {
  return (
    <div >
      <footer>
        <div style={{ backgroundColor: '#f0f0f0', padding: '4rem 0' }}>
          <Container>
            <Row className="gy-4">
              {/* Company Info */}
              <Col md={4}>
                <div className="d-flex align-items-center mb-3">
              
                 <img src={require('./img/logo.png')} alt=""  className='me-2' width={'100px'} height={'50px'}/>
                </div>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.
                </p>
                <div className="text-muted small">
                  <div className="d-flex align-items-center mb-2">
                    <FaMap className="me-2" />
                    123 Main street, anytown, CA 12345 - USA.
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <IoMdMail className="me-2" />
                    info@lume.com
                  </div>
                  <div className="d-flex align-items-center">
                    <FaPhoneAlt className="me-2" />
                    (012) 800 456 789-987
                  </div>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <a href="#" className="text-muted fs-5"><FaFacebook /></a>
                  <a href="#" className="text-muted fs-5"><FaTwitter /></a>
                  <a href="#" className="text-muted fs-5"><FaInstagram /></a>
                  <a href="#" className="text-muted fs-5"><IoLogoYoutube /></a>
                </div>
              </Col>

              {/* Quick Links */}
              <Col md={2}>
                <h5 className="fw-semibold mb-3">Quick Link</h5>
                <ul className="list-unstyled text-muted">
                  <li><a href="#" className="text-decoration-none text-muted">My Account</a></li>
                  <li><a href="#" className="text-decoration-none text-muted">Cart</a></li>
                  <li><a href="#" className="text-decoration-none text-muted">Wishlist</a></li>
                  <li><a href="#" className="text-decoration-none text-muted">Privacy Policy</a></li>
                </ul>
              </Col>

              {/* Info Links */}
              <Col md={2}>
                <h5 className="fw-semibold mb-3">Information</h5>
                <ul className="list-unstyled text-muted">
                  <li><a href="#" className="text-decoration-none text-muted">About Us</a></li>
                  <li><a href="#" className="text-decoration-none text-muted">Careers</a></li>
                  <li><a href="#" className="text-decoration-none text-muted">Delivery Info</a></li>
                  <li><a href="#" className="text-decoration-none text-muted">Privacy Policy</a></li>
                  <li><a href="#" className="text-decoration-none text-muted">Terms & Conditions</a></li>
                </ul>
              </Col>

              {/* Newsletter */}
              <Col md={4}>
                <h5 className="fw-semibold mb-3">Join our newsletter now</h5>
                <p className="text-muted">Get E-mail updates about our latest shop and special offers.</p>
                <Form className="d-flex">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="me-2"
                  />
                  <Button variant="dark">Subscribe</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-dark text-white py-3">
          <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="mb-0 text-center text-md-start">
              © 2025 by <strong>spacingtech</strong>
            </p>
            <div className="d-flex gap-2">

              <img src={require('./img/master.png')} alt="" height="45" />
              <img src={require('./img/paypal.png')} alt="" height="45" />
              <img src={require('./img/amezon.png')} alt="" height="45" />
              <img src={require('./img/visa.png')} alt="" height="45" />


            </div>
          </Container>
        </div>
      </footer>
    </div>
  )
}

export default Footer
