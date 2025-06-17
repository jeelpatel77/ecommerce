import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'bootstrap';

function Shop() {
  return (
    <div>
      <Header />

      {/* shop start 1  */}
        <div>
            <div className="position-relative w-100" style={{ height: '15rem' }}>
     

      <img src={require('./img/produt.webp')} alt=""   className="w-100 h-100 object-fit-cover"
        style={{ objectFit: 'cover', height: '100%' }}/>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white">
        <div className="text-uppercase small mb-1">
          HOME - PRODUCTS
        </div>
        <h1 className="fw-bold fs-2">
          Products
        </h1>
      </div>
    </div>
        </div>
        {/* shope end 1 */}



        <div>
      <div class="container py-5">
    <div class="row">
   
      <div class="col-md-3 mb-4">
        <form class="vstack gap-4">
         
          <div>
            <h6 class="fw-bold">Availability</h6>
            <div class="d-flex justify-content-between text-muted small mb-2">
              <span>0 selected</span>
              <button type="button" class="btn btn-link p-0">Reset</button>
            </div>
            <div class="form-check d-flex justify-content-between">
              <div>
                {/* <input class="form-check-input" type="checkbox" id="inStock"> */}
                <input type="checkbox" className="form-check-input" id="inStock" />
                <label class="form-check-label" for="inStock">In stock</label>
              </div>
              <span class="text-muted small">(29)</span>
            </div>
            <div class="form-check d-flex justify-content-between">
              <div>
                {/* <input class="form-check-input" type="checkbox" id="outOfStock"> */}
                <input type="checkbox"  className="form-check-input" id="outOfStock" />
                <label class="form-check-label" for="outOfStock">Out of stock</label>
              </div>
              <span class="text-muted small">(22)</span>
            </div>
          </div>

         
          <div>
            <h6 class="fw-bold">Price</h6>
            <div class="d-flex justify-content-between text-muted small mb-2">
              <span>The highest price is <strong>$76.00</strong></span>
              <button type="button" class="btn btn-link p-0">Reset</button>
            </div>
            {/* <input type="range" class="form-range" min="0" max="76" step="1" value="76"> */}
            <input type="rang" className="form-range" value="76" min="0" max="76" />
            <div class="d-flex justify-content-between align-items-center small text-muted mt-2">
              <div class="d-flex align-items-center">
                <span class="me-1">From</span>
                <div class="input-group input-group-sm">
                  <span class="input-group-text">$</span>
                  {/* <input type="number" class="form-control text-end" value="0" min="0" max="76"> */}
                  <input type="number" className="form-control text-end" value="0" min="0" max="76" />
                  
                </div>
              </div>
              <span>-</span>
              <div class="input-group input-group-sm">
                <span class="input-group-text">$</span>
                {/* <input type="number" class="form-control text-end" value="76" min="0" max="76"> */}
                <input type="number" className="form-control text-end" value="76" min="0" max="76" />
              </div>
            </div>
          </div>
        </form>
      </div>

     
      <div class="col-md-9">
        <div class="row g-4">
        
          <div class="col-md-4">
            <div class="card position-relative bg-light">
              <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small rounded-end">
                Sale 24%
              </div>
              <img src={require('./img/pro-27.jpg')} alt="" className="card-img-top"   />

              <div class="card-body text-center">
                <h5 class="card-title">Basic t-shirt</h5>
              </div>
            </div>
          </div>
        
          <div class="col-md-4">
            <div class="card position-relative bg-light">
              <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small rounded-end">
                Sale 29%
              </div>
                <img src={require('./img/pro-63.jpg')} alt="" className="card-img-top"   />

              <div class="card-body text-center">
                <h5 class="card-title">Bigsize t-shirt</h5>
              </div>
            </div>
          </div>
            <div class="col-md-4">
            <div class="card position-relative bg-light">
              <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small rounded-end">
                Sale 29%
              </div>
              <img src={require('./img/pro-41.jpg')} alt="" className="card-img-top"   />

              <div class="card-body text-center">
                <h5 class="card-title">Bigsize t-shirt</h5>
              </div>
            </div>
          </div>
            <div class="col-md-4">
            <div class="card position-relative bg-light">
              <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small rounded-end">
                Sale 29%
              </div>
             <img src={require('./img/pro-demo-5-60.jpg')} alt="" className="card-img-top"   />

              <div class="card-body text-center">
                <h5 class="card-title">Bigsize t-shirt</h5>
              </div>
            </div>
          </div>
            <div class="col-md-4">
            <div class="card position-relative bg-light">
              <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small rounded-end">
                Sale 29%
              </div>
                            <img src={require('./img/pro-demo-5-42.jpg')} alt="" className="card-img-top"   />

              <div class="card-body text-center">
                <h5 class="card-title">Bigsize t-shirt</h5>
              </div>
            </div>
          </div>
            <div class="col-md-4">
            <div class="card position-relative bg-light">
              <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small rounded-end">
                Sale 29%
              </div>
                            <img src={require('./img/pro-27.jpg')} alt="" className="card-img-top"   />

              <div class="card-body text-center">
                <h5 class="card-title">Bigsize t-shirt</h5>
              </div>
            </div>
          </div>
            <div class="col-md-4">
            <div class="card position-relative bg-light">
              <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small rounded-end">
                Sale 29%
              </div>
                            <img src={require('./img/pro-13.jpg')} alt="" className="card-img-top"   />

              <div class="card-body text-center">
                <h5 class="card-title">Bigsize t-shirt</h5>
              </div>
            </div>
          </div>
            <div class="col-md-4">
            <div class="card position-relative bg-light">
              <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small rounded-end">
                Sale 29%
              </div>
                            <img src={require('./img/shop3.jpg')} alt="" className="card-img-top"   />

              <div class="card-body text-center">
                <h5 class="card-title">Bigsize t-shirt</h5>
              </div>
            </div>
          </div>
      
          <div class="col-md-4">
            <div class="card position-relative bg-light">
              <div class="position-absolute top-0 start-0 bg-dark text-white px-2 py-1 small rounded-end">
                Sale 14%
              </div>
              <img src={require('./img/pro-demo-5-42.jpg')} alt="" className="card-img-top"   />
              <div class="card-body text-center">
                <h5 class="card-title">Check tunic</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
      <Footer />
    </div>
  )
}

export default Shop
