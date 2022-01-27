import React, {useState, useEffect} from 'react';
import { Carousel,Card, CardGroup } from 'react-bootstrap';

function View() {
    const [products, setProdt] = useState([])
  
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
  return (
  <div style={{ display:"flex", flexDirection:"row", justifyContent:"center"}}>

{
    products.map(products =>(
        <>
        <CardGroup>
  <Card style={{width:"250px", height:"450px", marginLeft:"2vh" , display: "block"}}>
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
  </Card>
</CardGroup> 

</>
))
}
  </div>
  );
}

export default View;
