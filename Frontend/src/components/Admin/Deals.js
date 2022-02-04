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
               <div style={{  paddingBottom:"3rem",paddingTop:"3rem",backgroundColor:"#89a6eb",}}>
    <div style={{ display:"flex", justifyContent:"center", border:"1px solid white", width:"110vh", height:"90vh", paddingTop:"4vh", marginLeft:"50vh", backgroundColor:"white", borderShadow:"10px 10px 8px 10px black" , borderRadius:"60%"}}>
      <Form style={{ width:"60vh",height:"70vh",justifyContent:"center"}}>
        <h3 style={{ textAlign:"center", paddingBottom:"4vh"}}>Add Products</h3>
  
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
  <Button class="btn btn-dark" type="submit" onClick={sendProducts}>
    Submit
  </Button>
</Form>
  </div></div>
  </>
    
    
    
    
    
    );
}

export default Deals;
