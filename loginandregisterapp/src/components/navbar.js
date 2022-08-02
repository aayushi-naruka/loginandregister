import React from "react"
import "./home/home.css"
import {Button,Navbar,Container,Nav,Col,Row,NavDropdown,Dropdown, NavLink} from 'react-bootstrap';
import { HiOutlineLogout } from "react-icons/hi";
const NavigationBar = ({setLoginUser}) => {
   
    return (
  <>
<Navbar className="p-0">
<Container fluid className="NavbarContainer pe-0">
        <Row className="navbartop pt-3">
          <Col xs={9} sm={9} md={9} lg={9}>
            <Container >
              <Row className='addproduct'>
                Add Product
              </Row>
              <Row className='breadcrumb-row'>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item "><a className='text-decoration-none dashboard-link' href="#">Dashboard</a></li>
                  <li className="breadcrumb-item dashboard-link active" aria-current="page">Product</li>
                </ol>
              </Row>
            </Container>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <ul className='header-list float-end list-inline'>
                <li>
                    <NavLink ></NavLink>
                </li>
              <li className='me-3'>
              <Button variant="primary" onClick={() => setLoginUser({})} >Logout</Button>
                
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      </Navbar>
          
           
            </>
    );
}

export default NavigationBar