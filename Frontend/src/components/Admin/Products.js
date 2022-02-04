import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'

export const Products = () => {

  const [prodName, setname] = useState("");
  const [prodImg, setimage] = useState("");
  const [prodPrice, setprice] = useState("");
  const [prodDetail, setdetail] = useState("");

  const sendData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ prodName: prodName, prodImage:prodImg,prodPrice: prodPrice, prodDetail:prodDetail});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/product", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

    return (
        <>
               <div style={{  paddingBottom:"6rem",paddingTop:"6rem",backgroundColor:"#89a6eb",}}>
    <div style={{ display:"flex", justifyContent:"center", border:"1px solid white", width:"110vh", height:"80vh", paddingTop:"10vh", marginLeft:"50vh", backgroundColor:"white", borderShadow:"10px 10px 8px 10px black" , borderRadius:"60%"}}>
      <Form style={{ width:"70vh",justifyContent:"center"}}>
        <h3 style={{ textAlign:"center", paddingBottom:"7vh"}}>Add Deals</h3>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter category" onChange={(e) => setname(e.target.value)} />
  </Form.Group> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Enter category" onChange={(e) => setprice(e.target.value)} />
  </Form.Group> 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="Image"  onChange={(e) => setimage(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Details</Form.Label>
    <Form.Control type="text" placeholder="Enter category"  onChange={(e) => setdetail(e.target.value)}/>
  </Form.Group>
  <Button class="btn btn-dark" type="submit" onClick={sendData}>
    Submit
  </Button>
</Form>
</div></div>
        </>
    )
}
