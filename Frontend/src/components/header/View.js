import React, {useState, useEffect} from 'react';
import { Carousel,Card, CardGroup, Button } from 'react-bootstrap';
import {Link, useNavigate } from "react-router-dom"

function View({detail}) {
    const [products, setProdt] = useState([])
    let navigate = useNavigate();
  
    useEffect(() => {
      showProduct();
  
    },[])
  
    const showProduct = async () => {
      const ress = await fetch('http://localhost:3001/showProducts')
      const products = await ress.json();
      console.log(products);
      console.log('dgh');
      setProdt(products)
    }

    const checkoutProduct = (products) => {
      console.log(products);
      var myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({ "userId": localStorage.getItem("email"), "productId": products.ID , "productName":products.prodtName, "productImage": products.prodtImage1, "productPrice": products.prodtPrice , "quantity":1 ,"price": products.prodtPrice});

      var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
      };

      fetch("http://localhost:3001/cartProduct", requestOptions)
          .then(response => response.json())
          .then(result => {
              if (result === 'Successfully') {
                  
                  alert('Successfully Add ')
                  
              } else {
                  alert('Login Required')
              }
          })
          .catch(error => console.log('error', error));
  }

  return (
  <div style={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>

{
    products.map(products =>(
        <>
        <CardGroup>
  <Card style={{width:"250px", height:"470px", marginLeft:"2vh" , display: "block"}}>
  <Carousel variant="dark" >
  <Carousel.Item style={{width:"250px", height:"300px", }}>
    <img
      className="d-block w-100"
      src={products.prodtImage1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{width:"250px", height:"300px", }}>
    <img
      className="d-block w-100"
      src={products.prodtImage2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{width:"250px", height:"300px", }}>
    <img
      className="d-block w-100"
      src={products.prodtImage3}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item style={{width:"250px", height:"300px", }}>
    <img
      className="d-block w-100"
      src={products.prodtImage4}
      alt="First slide"
    />
  </Carousel.Item>  
</Carousel>
    <Card.Body style={{textAlign:"center"}}>
      <Card.Title>{products.prodtName}</Card.Title>
      <small className="text-muted" style={{fontSize:"20px"}}>Rs. {products.prodtPrice}</small>
      <Card.Text style={{width:"200px", textOverflow: "ellipsis",whiteSpace:"nowrap", overflow:"hidden" }}>
      {products.prodtDetail}...
      </Card.Text>
    </Card.Body>
    <div style={{display:"flex", justifyContent:"center"}}>
   <Link to="/cart"> <Button style={{marginRight:"2vh"}} onClick={() => checkoutProduct(products)}>Add to Cart</Button></Link>
   <Link to="/details"> <Button  onClick={()=>detail(products.ID)}>View</Button></Link>
    </div>
   
  </Card>
</CardGroup> 

</>
))
}
  </div>
  );
}

export default View;
