import React from "react"
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { ImEnlarge2 } from "react-icons/im";
import Modal from 'react-bootstrap/Modal';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdStarRate } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from 'react';
const ProductCard = () => {
   
    const [show, setShow] = useState(false);
    const [productItem, setItem] = useState();

    return (
  <>
        <Card className="product-cards mt-3" style={{ width: '18rem' }}>


        <div className='product-offer'>
          20%
        </div>

        <div className='edit-delete-buttons'>
         
          <div>
            <Button className='edit-button' onClick={() => { setShow(true); }}>
              <ImEnlarge2 />
            </Button>

          </div>

        </div>
        <div className='product-image-container'>

          <Card.Img className='product-image' variant="top" src="https://www.kindpng.com/picc/m/421-4211157_hp-notebook-15s-du0023tx-hd-png-download.png" />
        </div>

        <Card.Body>
          <Card.Title className='product-title mb-0'>HP 15s 15.6inch(39.6cm) FHD Laptop</Card.Title>

          <Card.Text className='product-rating mb-0 mt-3'>
            <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
          </Card.Text>

          <Card.Text className='product-category mt-3'>
            Category: <strong>Electronics</strong>
          </Card.Text>

          <Row className="mt-3">
            <Col xs={6} sm={6} md={6} lg={6}>
              <div className='product-price'>
                <div className='product-MRP'>
                  <strike>Rs. 1299</strike>
                </div>
                <div className='product-final-price'>
                  Rs.500
                </div>
              </div>

            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <div className='product-stock'>
                Stock : <strong>125 </strong>
              </div>

            </Col>

          </Row>




        </Card.Body>



      </Card>


      <Modal className='modal-container' show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='product-modal-body'>
          <Container fluid className='product-modal-body-container'>
            <Row className='product-modal-body-row'>
              <Col sm={12} md={6} lg={6} className="product-modal-left">

                <Container className="product-modal-left-container">
                  <Row className='modal-large-image'>
                    <div className='large-image-container'>
                      <img src='https://www.kindpng.com/picc/m/421-4211157_hp-notebook-15s-du0023tx-hd-png-download.png' alt='product large' className="img-fluid product-all-images"></img>
                    </div>
                  </Row>
                  <Row className='product-modal-image-list mt-1'>
                    <Col md={3} className='product-modal-small-images'>
                      <div className='product-modal-small-image'>
                        <button>
                          <img src='https://www.kindpng.com/picc/m/421-4211157_hp-notebook-15s-du0023tx-hd-png-download.png' className="img-fluid product-all-images" alt='product'></img>
                        </button>
                      </div>
                    </Col>
                    <Col md={3} className='product-modal-small-images'>
                      <div className='product-modal-small-image'>
                        <button>
                          <img src='https://www.kindpng.com/picc/m/421-4211157_hp-notebook-15s-du0023tx-hd-png-download.png' className="img-fluid product-all-images" alt='product'></img>
                        </button>
                      </div>
                    </Col>
                    <Col md={3} className='product-modal-small-images'>
                      <div className='product-modal-small-image'>
                        <button>
                          <img src='https://www.kindpng.com/picc/m/421-4211157_hp-notebook-15s-du0023tx-hd-png-download.png' className="img-fluid product-all-images" alt='product'></img>
                        </button>
                      </div>
                    </Col>
                    <Col md={3} className='product-modal-small-images'>
                      <div className='product-modal-small-image'>
                        <button>
                          <img src='https://www.kindpng.com/picc/m/421-4211157_hp-notebook-15s-du0023tx-hd-png-download.png' alt='product' className="img-fluid product-all-images"></img>
                        </button>
                      </div>
                    </Col>

                  </Row>
                </Container>


              </Col>
              <Col sm={12} md={6} lg={6}>
                <Container className='modal-product-details'>
                  <Row className='modal-product-title'>
                  HP 15.6inch(39.6cm) FHD Laptop (8GB RAM/512GB SSD)
                  </Row>
                  <Row className=''>
                    <div className='modal-product-id col-md-5'>GGFIY1553GWUY </div>
                    <div className='col-md-7 modal-product-category'><small>Category : </small><strong>Electronics</strong></div>
                  </Row>

                  <Row className='modal-product-description pt-3'>
                    hshfihfihvi hiusdfi hdushfhfis fiuw fw ywiufy wihgkjddg dhghd goh dsgug gfguihg d oso hgfuao aguaghagho hga hgahga hshfihfihvi hiusdfi hdushfhfis fiuw fw ywiufy wihgkjddg dhghd goh dsgug gfguihg d oso hgfuao aguaghagho hga hgahga hshfihfihvi hiusdfi hdushfhfis fiuw fw ywiufy wihgkjddg dhghd goh dsgug gfguihg d oso hgfuao aguaghagho hga hgahga hshfihfihvi hiusdfi hdushfhfis fiuw fw ywiufy wihgkjddg dhghd goh dsgug gfguihg d oso hgfuao aguaghagho hga hgahga
                  </Row>




                  <Row className='modal-product-price mt-2'>
                    <div>


                      <span className='product-final-price float-start'>
                        <strong>Rs. 500</strong>
                      </span>
                      <span className='product-rating p-0 mb-2 float-end pe-5'>
                        <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate />
                      </span>
                    </div>


                  </Row>
                  <Row className='mt-2'>

                    <div>
                      <span className='modal-product-stock float-start'>
                        stock: <strong>20</strong>
                      </span>
                      <span className='modal-product-creation-date float-end'>
                        <small>CreationDate :</small> <strong>5 July 1999</strong>
                      </span>
                    </div>



                  </Row>

                </Container>
              </Col>
            </Row>
          </Container>




        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>

    );
}

export default ProductCard