import React, {useState  } from 'react';
import {Form, Button} from 'react-bootstrap'

function Deals() {
  
  const [prodtName, setsname] = useState("");
  const [prodtImage1, setsimage] = useState("");
  const [prodtImage2, setsimagee] = useState("");
  const [prodtImage3, setsimageee] = useState("");
  const [prodtImage4, setsimageeee] = useState("");
  const [prodtPrice, setsprice] = useState("");
  const [prodtDetail, setsdetail] = useState("");

  const sendProducts = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ prodtName: prodtName, prodtImage1:prodtImage1, prodtImage2:prodtImage2, prodtImage3:prodtImage3, prodtImage4:prodtImage4, prodtPrice: prodtPrice, prodtDetail:prodtDetail});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/products", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return( <>
                <Form>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="Enter category" onChange={(e) => setsname(e.target.value)} />
  </Form.Group> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Enter category" onChange={(e) => setsprice(e.target.value)} />
  </Form.Group> 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Image No. 1</Form.Label>
    <Form.Control type="text" placeholder="Image"  onChange={(e) => setsimage(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Image No. 2</Form.Label>
    <Form.Control type="text" placeholder="Image"  onChange={(e) => setsimagee(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Image No. 3</Form.Label>
    <Form.Control type="text" placeholder="Image"  onChange={(e) => setsimageee(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Image No. 4</Form.Label>
    <Form.Control type="text" placeholder="Image"  onChange={(e) => setsimageeee(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Details</Form.Label>
    <Form.Control type="text" placeholder="Enter category"  onChange={(e) => setsdetail(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={sendProducts}>
    Submit
  </Button>
</Form>
  
  </>
    
    
    
    
    
    );
}

export default Deals;
