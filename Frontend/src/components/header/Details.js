import React, {useEffect, useState} from 'react';
import Header from './Header';
import {Card, Button} from "react-bootstrap"
import { MdProductionQuantityLimits } from 'react-icons/md';
import {IoMdCart} from "react-icons/io";
import {BsFillLightningFill} from "react-icons/bs";

function Details() {
  const [category, setCate] = useState([])
  const [details, setProduct] = useState([])

useEffect(() => {
  showCat();
  //productDetail();
},[])

// const productDetail = () => {
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   var raw = JSON.stringify({ productId: products.ID });

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };

//   fetch("http://localhost:3001/productDetail", requestOptions)
//     .then((response) => response.json())
//     .then((result) => {
//       setProduct(result.details);
//     })
//     .catch((error) => console.log("error", error));
// });

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


<div style={{ display:"flex", flexDirection:"row"}}>

<div style={{ display:"flex", flexDirection:"column"}}>
  <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Girl in a jacket" style={{width:"50px", height:"50px", padding: "3px",border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6"}}/>
<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Girl in a jacket" style={{width:"50px", height:"50px",padding:"3px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6"}}/>
<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Girl in a jacket" style={{width:"50px", height:"50px",padding:"3px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6"}}/>
<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Girl in a jacket" style={{width:"50px", height:"50px",padding:"3px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6"}}/>
</div>
<div>
<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="Girl in a jacket" style={{width:"500px", height:"500px",padding:"20px", border:"0.5px solid #e8e7e6 ",borderColor:"#e8e7e6"}}/>
<div >
  <Button style={{width:"245px", height:"60px", marginRight:"10px", marginTop:"8px", backgroundColor:"#f79307", border:"none", paddingTop:"2vh", borderRadius:"3px"}}> <h5><IoMdCart style={{width:"26px", height:"26px"}}/> Add to Cart</h5> </Button>
  <Button style={{width:"245px", height:"60px", marginTop:"8px", backgroundColor:"#f76b07", border:"none", paddingTop:"2vh",borderRadius:"3px"}}><h5><BsFillLightningFill style={{width:"26px", height:"26px"}}/> Buy Now </h5> </Button>
</div>
<div>
  
</div>
</div>
</div>
</div>

</div>

  </div>;
}

export default Details;
