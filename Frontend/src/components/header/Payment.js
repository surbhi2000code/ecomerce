import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from "react-bootstrap"
import Header from "./Header"
function Payment() {
  return (
    <>
    <Header/>
<div style={{ marginTop:"200px"}}>
    <h2 style={{color:"#2874f0", textAlign:"center"}}>Add Payment Option</h2>
    <div style={{border:" 0.5px solid gray", width:"500px",padding:"5vh",margin:"50px",marginLeft:"700px",}}>
        

    <h5>Phonepe/Google pay (UPI ID)</h5>
    <div >
        <input placeholder='Enter UPI'style={{margin:"10px", height:"45px",width:"400px"}}/>
        </div>
    <h5>Credit / Debit / ATM Card</h5>
    <div>
    <input placeholder='Enter Account Number' style={{margin:"10px", height:"45px",width:"400px"}}/>
    <br/>
    <input placeholder='Enter IFSE Code' style={{margin:"10px", height:"45px",width:"200px"}}/>
    <input type="month" style={{margin:"10px", height:"45px",width:"100px"}}/></div>
    <h5>Cash On Delivery</h5>
    <Link to="/placed">
            <Button variant="warning" style={{ marginTop:"30px"}} >
              Confirm Order
            </Button>
          </Link>
    </div>
    </div>
    </>
  )
}

export default Payment