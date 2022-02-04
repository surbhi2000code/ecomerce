import React from 'react';
import { Link } from "react-router-dom";
import { Card,Button } from "react-bootstrap";

function Login() {
  return (
  <>
  
  <div style={{  paddingBottom:"17rem",paddingTop:"17rem",backgroundColor:"#89a6eb",}}>
        <h1 style={{textAlign:"center", paddingBottom:"10vh"}}>Flipkart Admin Page</h1>
        <div style={{ display:"flex", justifyContent:"center"}}>
           
        <Card style={{ width: '30rem',height:"25rem", marginRight:"9vh" }}>
        <Card.Img variant="top" src="https://resources.workable.com/wp-content/uploads/2016/01/category-manager-640x230.jpg " />

             <Card.Body style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <Card.Title> category page</Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Button variant="primary"><Link to="/category" style={{color:"white"}}> Go for category </Link></Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '30rem',height:"25rem",marginRight:"9vh" }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-hl_nHqNn8wVWTrHtCvSXxZ9WdPWKoQllQ&usqp=CAU  " />

            <Card.Body>
                <Card.Title>Products Page</Card.Title>
                <Card.Text>
                
                </Card.Text>
                <Button variant="primary"> <Link to="/deals" style={{color:"white"}}>Go for product</Link></Button>
            </Card.Body>
            </Card>

            <Card style={{ width: '30rem',height:"25rem" , marginRight:"9vh"}}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZY29k4Oe4ThhnOAZ7Fn3uALuUBBnOMCIYEw&usqp=CAU" />

            <Card.Body>
            <Card.Title>Deals Page</Card.Title>
            <Card.Text>
            
            </Card.Text>
            <Button variant="primary"><Link to="/products" style={{color:"white"}}> Go for deal</Link></Button>
            </Card.Body>
            </Card>
          
           
           
        </div>
           
        </div>
  
  </>);
}

export default Login;
