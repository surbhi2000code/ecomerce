import React, {useEffect, useState} from 'react';
import Header from './Header';
import {Card, Button} from "react-bootstrap"
import { MdProductionQuantityLimits } from 'react-icons/md';
import {IoMdCart} from "react-icons/io";
import {BsFillLightningFill} from "react-icons/bs";
import {Link} from "react-router-dom"

function Details({productdetail}) {
  const [category, setCate] = useState([])
  const [details, setProduct] = useState([])
  const [products, setProdt] = useState([])

  const showImage = () => {
    document.querySelector("#image1").style.display = "block";
    document.querySelector("#image2").style.display = "none";
    document.querySelector("#image3").style.display = "none";
    document.querySelector("#image4").style.display = "none";
  };
  const showImage2 = () => {
    document.querySelector("#image1").style.display = "none";
    document.querySelector("#image2").style.display = "block";
    document.querySelector("#image3").style.display = "none";
    document.querySelector("#image4").style.display = "none";
  };
  const showImage3 = () => {
    document.querySelector("#image1").style.display = "none";
    document.querySelector("#image2").style.display = "none";
    document.querySelector("#image3").style.display = "block";
    document.querySelector("#image4").style.display = "none";
  };
  const showImage4 = () => {
    document.querySelector("#image1").style.display = "none";
    document.querySelector("#image2").style.display = "none";
    document.querySelector("#image3").style.display = "none";
    document.querySelector("#image4").style.display = "block";  };


useEffect(() => {
  showCat();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ productId: productdetail });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3001/productDetail", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setProduct(result)
      setProdt(result)
      console.log(result)
    })
    .catch((error) => console.log("error", error));

},[])

const checkoutProducts = (products) => {
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

 

const showCat = async () => {
  const ress = await fetch('http://localhost:3001/showCategory')
  const category = await ress.json();
  setCate(category)
}
  return <div>
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
        <div style={{ display:"flex", justifyContent:"center"}}>
<div style={{border: "0.5px solid gray",borderColor:"#e8e7e6", borderShadow:"10px 10px 8px 10px black",width:"70%", height:"70%", padding:"20px"}}>
{  
                details.map(details=>(

<div style={{ display:"flex", flexDirection:"row"}}>

<div style={{ display:"flex", flexDirection:"column"}}>
  <img src={details.prodtImage1} alt="Girl in a jacket" style={{width:"50px", height:"50px", padding: "3px",border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6"}} onMouseOver={showImage} />
<img src={details.prodtImage2} alt="Girl in a jacket" style={{width:"50px", height:"50px",padding:"3px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6"}} onMouseOver={showImage2}/>
<img src={details.prodtImage3} alt="Girl in a jacket" style={{width:"50px", height:"50px",padding:"3px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6"}} onMouseOver={showImage3}/>
<img src={details.prodtImage4} alt="Girl in a jacket" style={{width:"50px", height:"50px",padding:"3px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6"}} onMouseOver={showImage4}/>
</div>
<div>
<img src={details.prodtImage1} alt="Girl in a jacket" style={{width:"500px", height:"500px",padding:"20px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6", display:"block"}} id="image1" />
<img src={details.prodtImage2} alt="Girl in a jacket" style={{width:"500px", height:"500px",padding:"20px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6", display:"none"}} id="image2" />
<img src={details.prodtImage3} alt="Girl in a jacket" style={{width:"500px", height:"500px",padding:"20px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6", display:"none"}} id="image3" />
<img src={details.prodtImage4} alt="Girl in a jacket" style={{width:"500px", height:"500px",padding:"20px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6", display:"none"}} id="image4" />
<div >
  <Link to="/cart"><Button style={{width:"245px", height:"60px", marginRight:"10px", marginTop:"8px", backgroundColor:"#f79307", border:"none", paddingTop:"2vh", borderRadius:"3px"}} onClick={() => checkoutProducts(details)}> <h5><IoMdCart style={{width:"26px", height:"26px"}}/> Add to Cart</h5> </Button></Link>
  <Button style={{width:"245px", height:"60px", marginTop:"8px", backgroundColor:"#f76b07", border:"none", paddingTop:"2vh",borderRadius:"3px"}}><h5><BsFillLightningFill style={{width:"26px", height:"26px"}}/> Buy Now </h5> </Button>
</div>
</div>
<div style={{margin:"50px"}}>
  <h3>{details.prodtName}</h3>
  <h1>Rs. {details.prodtPrice}</h1>
  <p><span style={{color:"gray",fontSize:"22px", fontWeight:"bold"}}>Description: </span> {details.prodtDetail}</p>
</div>
</div>))}
</div>
</div>

</div>

 ;
}

export default Details;
