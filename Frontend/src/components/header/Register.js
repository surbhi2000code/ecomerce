import React from 'react';
import { Modal, Button, Form, ModalFooter } from "react-bootstrap";

const Register = (props) => {
  return(
  <div>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <div style={{ display: "flex", }} >
        <div style={{ maxWidth:"36%" ,backgroundColor:"#2874f0"}} >
          <Modal.Title id="contained-modal-title-vcenter" style={{ marginTop:"20px", textAlign:"center", color:"white",fontSize:"28px"}}>Login</Modal.Title>
        
        <Modal.Body >
          <div >
            <h6></h6>
            <p style={{fontSize:"20px",textAlign:"center",fontWeight:"8px", color:"white"}}>Get access to your Orders, Wishlist and Recommendations</p>
          </div>
          </Modal.Body>
          <ModalFooter style={{border:"none"}}>
<img style={{marginTop:"15vh"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"/>
          </ModalFooter>
          </div>
      <div>
      <div closeButton></div>
        <Form style={{paddingLeft:"50px",marginLeft:"4vh", marginTop:"7vh",width:"35vh"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter Email/Moblie No." style={{borderTop:"none",borderLeft:"none",borderRight:"none", width:"35vh"}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" style={{borderTop:"none",borderLeft:"none",marginTop:"25px",marginBottom:"25px",borderRight:"none", width:"35vh"}} />
            <Form.Text className="text-muted" style={{marginTop:"25px"}}>
            By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.            </Form.Text>
          </Form.Group>
         <div style={{justifyItems:"center", display:"grid",marginTop:"20px"}}>
          <Button type="submit" style={{width:"35vh", backgroundColor:"#fb641b", border:"none", borderRadius:"0px", height:"6vh"}} >
            Login
          </Button></div>
          <h6 style={{ color: "gray", textAlign:"center", paddingTop:"1vh", paddingBottom:"1vh",marginLeft:"5vh"}}>OR</h6>
          <div style={{justifyItems:"center", display:"grid",marginTop:"20px"}}>
          <Button variant="light" type="submit" style={{width:"35vh", border:"none", borderRadius:"0px", height:"6vh", color: "#2874f0"}} >
            Request Otp
          </Button></div>
          <Modal.Footer style={{border:"none",width:"35vh", marginTop:"30px", marginBottom:"8px"}}>
           <h7 style={{ color: "#2874f0",width:"35vh", textAlign:"center" }} >
              New to Flipkart? Create an account
            </h7>
          </Modal.Footer>
        </Form>
        
      </div>
      </div>
    </Modal>

  </div>
  ) ;
}

export default Register;
