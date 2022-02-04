import React, { useState } from 'react'
import {Form, Button} from "react-bootstrap"
import Login from './Login';
 
function Admin() { 
    const [adminemail, setadminemail] =  useState("");
    const [adminpassword, setadminpassword] =  useState("");
    const detail = () => {
        document.querySelector("#detail").style.display = "block";
        document.querySelector("#form").style.display = "none";

      };

    const adminLogin = () => {
       
      if(adminemail==='admin123@gmail.com' && adminpassword === 'admin123'){
        detail()
      }else{
          alert('user not found')
      }
      }
    
    return (
        < >
       <div style={{  paddingBottom:"17rem",paddingTop:"17rem",backgroundColor:"#89a6eb",display:"block"}} id="form">
        <h1 style={{textAlign:"center", paddingBottom:"10vh"}}>Admin Login </h1>
        <div style={{ display:"flex", justifyContent:"center"}}>

        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setadminemail(e.target.value)}
/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  onChange={(e) => setadminpassword(e.target.value)}/>
  </Form.Group>
<Button variant="primary" onClick={() => adminLogin()}>
    Submit
  </Button>
  </Form>
           </div></div>
           <div style={{display:"none"}} id='detail'>
       <Login /></div>
        </>
    )
}

export default Admin
