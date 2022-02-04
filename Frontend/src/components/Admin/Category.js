import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
function Category() {
  const [cateName, setname] = useState("");
  const [cateImg, setimage] = useState("");

  const sendData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ cateName: cateName, cateImage:cateImg });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/category", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div style={{  paddingBottom:"10rem",paddingTop:"10rem",backgroundColor:"#89a6eb",}}>
    <div style={{ display:"flex", justifyContent:"center", border:"1px solid white", width:"90vh", height:"70vh", paddingTop:"16vh", marginLeft:"60vh", backgroundColor:"white", borderShadow:"10px 10px 8px 10px black" , borderRadius:"60%"}}>
      <Form style={{ width:"70vh",justifyContent:"center"}}>
        <h3 style={{ textAlign:"center", paddingBottom:"7vh"}}>Add Categories</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  style={{fontWeight:"bold"}}>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{fontWeight:"bold"}}>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image"
            onChange={(e) => setimage(e.target.value)}
          />
        </Form.Group>

        <Button class="btn btn-dark" type="submit" onClick={sendData}>
          Submit
        </Button>
      </Form>
    </div>
    </div>
  );
}

export default Category;
