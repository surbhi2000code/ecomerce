import React, {useState, useEffect} from "react";
import { Carousel, CardGroup, Card } from "react-bootstrap";
import Header from "./Header";
import View from './View'

function Cards() {
  const [category, setCate] = useState([])
  const [product, setProd] = useState([])
  
  useEffect(() => {
    showProduct();
    showCat();

  },[])

  const showProduct = async () => {
    const ress = await fetch('http://localhost:3001/allProduct')
    const products = await ress.json();
    console.log(products);
    console.log('dgh');
    setProd(products)
  }


  const showCat = async () => {
    const ress = await fetch('http://localhost:3001/showCategory')
    const category = await ress.json();
    setCate(category)
  }

  return (
    
    <>
    <Header/>
                  
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "35vh",
          paddingRight: "35vh",
          backgroundColor: "white",
        }}
      >
        {  
                category.map(category=>(
        <div style={{ paddingRight: "5vh" }}>
          <Card style={{ border: "none" }}>
            <a href="https://www.flipkart.com/mobiles-big-saving-days-sale-c658-n876-store?fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.AIDH8F3BCTJQ&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Mobiles_AIDH8F3BCTJQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=AIDH8F3BCTJQ">
              <Card.Img
                variant="top"
               src = {category.cateImage}/>
              <h6 style={{ textAlign: "center", color: "black" }}>{category.cateName}</h6>
            </a>
          </Card>
        </div>
        ))}
        </div>
    
      <hr style={{ width: "100%", color: "gray" }}></hr>
      <div style={{ paddingLeft: "15vh", paddingRight: "15vh" }}>
        <Carousel
          style={{
            width: "100%",
            height: "10%",
            paddingBottom: "1vh",
            paddingTop: "3vh",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/flap/844/140/image/03340cb965e90250.jpg?q=50"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/flap/3376/560/image/735613597f70f882.jpg?q=50"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://rukminim1.flixcart.com/flap/3376/560/image/2a0261c8f00a78f2.jpg?q=50"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <img
              src="https://hotdealszone.com/wp-content/uploads/2020/06/Flipkart-ICICI-Bank-Cards-Offer-1024x147.jpg"
              alt=".."
             
              style={{
                width: "85.2%",
                height: "15vh",
                paddingBottom: "1vh",
                marginLeft: "15vh"
               
              }}
            />

      <CardGroup
        style={{
          marginRight: "15vh",
          marginLeft: "15vh",
          paddingBottom:"10vh",
          border: "0.6px solid gray",
          display: "flex",
          height: "40vh",
        }}
      >
        <div
          style={{ padding: "2vh", display: "flex", flexDirection: "column",textAlign: "center", marginTop:"10vh" }}
        >
          <h1>Top Offers</h1>
          <button className="btn btn-primary">View All</button>
        </div>
        <div
          style={{ display: "flex" }}
        >
           {  
                product.map(product=>(
          <Card style={{ marginTop:"3vh",marginBottom:"3vh", border:"none" ,width:"180px" ,height:"250px", marginRight:"5vh"}}>
            <Card.Img
              variant="top"
              style={{ height:"200px"}}
              src={product.prodImage}
            />
            <Card.Body style={{textAlign: "center"}}>
              <Card.Title style={{ fontSize: "16px" }}>
                {product.prodName}
              </Card.Title>
              <Card.Text style={{color:"green"}}>{product.prodPrice}</Card.Text>
            
            <small className="text-muted" style={{textAlign: "center"}}>{product.prodDetail}</small></Card.Body> 
          </Card>
                ))}
                </div>
                <div>
          <Card style={{ width: "25vh", marginTop:"3vh",marginBottom:"3vh"  }}>
            <Card.Img
              variant="top"
              style={{width:"230px", height:"319px"}}
              src="https://rukminim1.flixcart.com/flap/464/708/image/df46a77c530cbd85.jpeg?q=70"
            />
          </Card>
        </div>
      </CardGroup>
      <div style={{marginTop:"5vh", contentAlign:"center"}}>
      <View/></div>
<div style={{marginTop:"30vh",display:"grid ", justifyContent:"center"}}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h6 style={{ color: "gray" }}>Top Stories:</h6>
        <h6 style={{ color: "#172337" }}>Brand Directory</h6>
      </div>

      <div>
        <p>
          MOST SEARCHED FOR ON FLIPKART:TV & Appliances Big Saving Days
          Sale|EOSS Sale|iPhone 13|iPhone 13 Pro|iPhone 13 Pro Max|iPhone 13
          Mini|TV & Appliances Big Billion Days Sale|Flipkart Pay Later EMI|Big
          Billion Days|Flipkart Motor Vehicle Insurance|Flipkart Quic|Ed A Mamma
          Clothing|BooksFlipkart Electronics: TV & Home Appliances SaleGrand
          Kitchen & Home Appliances SaleAuto Accessories StoreStreak
          SunglassesGold CoinsFlipkart PlusFlipkart Super CoinFlipkart COVID-19
          InsuranceFlipkart Help CentreFlipkart Track OrdersFlipkart Manage
          OrdersFlipkart Return OrdersFlipkart Gift Cards StoreSareesFlipkart
          Axis Bank Credit CardFlipkart Pay LaterJewelleryWatchesGold
          CoinMangalsutraSunglassesMi SunglassesBackpacksRay Ban Sunglasses
        </p>
      </div>
      </div>
    </>
  );
}

export default Cards;
