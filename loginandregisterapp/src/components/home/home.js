import React from "react"
import "./home.css"
import NavigationBar from "../navbar";
import {Button,Navbar,Container,Nav,Row} from 'react-bootstrap';
import Productcontent from "../productcontent";

const Home = ({setLoginUser}) => {
   
    return (
        <div className="home">
           <NavigationBar setLoginUser={setLoginUser}/> 

       
          <Productcontent />
    
          {/* <Route exact path='/master/product/editor' element={<EditorPage />} /> */}
          
        
       

         
        </div>
    )
}

export default Home