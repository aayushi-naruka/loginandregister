import ProductCard from "./productcards";
import {Button,Navbar,Container,Nav,Row} from 'react-bootstrap';
const Productcontent = ({setLoginUser}) => {
   
    return (

        <div className="Productcontent mt-4">
        <Container fluid className='product-container'>
   <Row xs={1} md={2} lg={3} xl={4} className="justify-content-around">
         
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      

        </Row>
        </Container>
        </div>
    );
}
export default Productcontent