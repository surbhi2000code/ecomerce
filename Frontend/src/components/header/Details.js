import React, {useEffect, useState} from 'react';
import Header from './Header';
import {Card} from "react-bootstrap"

function Details() {
  const [category, setCate] = useState([])

useEffect(() => {
  showCat();

},[])

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

  </div>;
}

export default Details;
