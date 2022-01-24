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
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image"
            onChange={(e) => setimage(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={sendData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Category;
