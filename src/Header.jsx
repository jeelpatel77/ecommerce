
import React from 'react';
import { Navbar, Nav, Container, Dropdown, Form, InputGroup } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
// import{Container} from 'react-bootstrap'
// import { Dropdown } from 'react-bootstrap';
// im
import { FaPhone, FaSearch, FaUser, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div >
      {/* Top Bar */}
      <div style={{ backgroundColor: '#2c2c2c', color: 'white', fontSize: '14px' }}>
        <Container className="d-flex justify-content-between py-2 flex-wrap fixed">
          <div>
            <FaPhone className="me-2" />
            (+01) 1234 8888
          </div>
          <div>Free shipping, 30-day return or refund guarantee.</div>
          <div className="d-flex gap-3">
            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-white text-decoration-none p-0">
                ENGLISH
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>ENGLISH</Dropdown.Item>
                <Dropdown.Item>SPANISH</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-white text-decoration-none p-0">
                USD $
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>USD $</Dropdown.Item>
                <Dropdown.Item>EUR €</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" bg="white" className="border-bottom">
        <Container>
          <Navbar.Brand className="d-flex justify-content-between py-2 flex-wrap" >
            {/* <span style={{ fontFamily: 'serif' }}>LUME</span> */}
            <img src={require('./img/logo.png')} alt="" height={'50px'} />
          </Navbar.Brand>

          {/* Toggler for mobile */}
          <Navbar.Toggle aria-controls="main-navbar" className="order-lg-1" />

          {/* Navigation items */}
          <Navbar.Collapse id="main-navbar" className="order-lg-1 order-3 w-100">
            <Nav className="me-auto d-flex align-items-lg-center gap-lg-3">
              {/* <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link> */}
              <Nav.Link><Link to="/" className="text-dark">Home</Link></Nav.Link>
              <Nav.Link><Link to="/Shop" className="text-dark">Shop</Link></Nav.Link>
              <Nav.Link><Link to="/Blog" className="text-dark">Blog</Link></Nav.Link>
              <Nav.Link><Link to="/Contact" className="text-dark">Contact</Link></Nav.Link>
              <Link to="/page" className="text-dark">Page</Link>
            </Nav>
          </Navbar.Collapse>

          {/* Right icons */}
          <div className="d-flex align-items-center gap-3 order-lg-3">
            <FaSearch />
            <FaUser />
            <div className="position-relative">
              <FaHeart />
              <span className="position-absolute   top-0 start-100 translate-middle badge rounded-pill bg-dark">0</span>
            </div>
            <div className="position-relative">
              <FaShoppingBag />
              <span className="position-absolute   top-0 start-100 translate-middle badge rounded-pill bg-dark">0</span>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
