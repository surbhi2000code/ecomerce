import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Box from '@material-ui/core/Box';
import { makeStyles, fade, InputBase, List, ListItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Dropdown,DropdownToggle,DropdownItem, Nav, NavDropdown,Container,Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }} variant="primary" >
      <AppBar position="static" >
        <Toolbar style={{ display: "flex", flexDirection: "row", contentAlign: "center"}}>
          <div style={{display:"flex", flexDirection:"column"}}>
            <a class="_21ljIi"href="/">
              <img style={{width:"75px"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="Flipkart" title="Flipkart" class="_2xm1JU"/>
            </a>
            <a href="/plus" style={{color:"inherit"}}>
              Explore
              <span className="_2FVHGh" style={{color:"gold"}}>Plus</span>
              <img style={{width:"10px" ,color:"inherit"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"/>
            </a>
          </div>
          
          <div style={{ backgroundColor:"white", display:"flex", flexDirection:"row"}}>
          <InputBase placeholder="Search for products, brands and more" style={{ width:"39vh", height:"30px"}}  />
              <SearchIcon style={{color: "blue", width:"40px", height:"28px"}} />
            </div>
          <div>
          <Button class="btn-light" style={{width:"9vh", height: "3.6vh"}}><span style={{color:"blue", fontWeight: "bold"}}>Login</span></Button></div>
<Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    More
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Notification Preferences</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Sell on Flipkart</Dropdown.Item>
    <Dropdown.Item href="#/action-3">24*7 Customer Care</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Advertise</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Download App</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        
        </Toolbar>
      </AppBar>
    </Box>

<div style={{display:"flex", flexDirection:"row"}}>
<div class="card" style={{width:"18rem"}}>
<a href="https://www.flipkart.com/mobiles-big-saving-days-sale-c658-n876-store?fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.AIDH8F3BCTJQ&otracker=hp_rich_navigation_1_1.navigationCard.RICH_NAVIGATION_Mobiles_AIDH8F3BCTJQ&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L0_view-all&cid=AIDH8F3BCTJQ">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/e2b2795ad9e97a57.png?q=100" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Mobiles</h5>
  </div>
</a></div>
<div class="card" style={{width:"18rem"}}>
<a href="https://www.flipkart.com/fashion-republic-day-sale-jan-2022-store?param=19867736376343&fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.NYEMHX57LP8R&otracker=hp_rich_navigation_2_1.navigationCard.RICH_NAVIGATION_Fashion_NYEMHX57LP8R&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_2_L0_view-all&cid=NYEMHX57LP8R">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/5c44091c4cde5527.png?q=100" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Fashion</h5>
  </div>
</a></div><div class="card" style={{width:"18rem"}}>
<a href="https://www.flipkart.com/electronics-big-savings-days-store?param=19867736376343&fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.3JCSYRATTA23&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Electronics_3JCSYRATTA23&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L0_view-all&cid=3JCSYRATTA23">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/9468f7c638007682.png?q=100" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Electronics</h5>
  </div>
</a></div><div class="card" style={{width:"18rem"}}>
<a href="https://www.flipkart.com/republicday-22-sale-store?param=19867736376343&fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.U6TMALLBLJZY&otracker=hp_rich_navigation_4_1.navigationCard.RICH_NAVIGATION_Home_U6TMALLBLJZY&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_4_L0_view-all&cid=U6TMALLBLJZY">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/0a4e27792f699b67.png?q=100" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Home</h5>
  </div>
</a></div><div class="card" style={{width:"18rem"}}>
<a href="https://www.flipkart.com/travel/flights?param=NavBSDJan22&fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.7IBT9QR5QKBW&otracker=hp_rich_navigation_5_1.navigationCard.RICH_NAVIGATION_Travel_7IBT9QR5QKBW&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_5_L0_view-all&cid=7IBT9QR5QKBW">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/692f09b7ab4dcf06.png?q=100" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Travel</h5>
  </div>
</a></div><div class="card" style={{width:"18rem"}}>
<a href="https://www.flipkart.com/tv-and-appliances-big-savings-days-sale-store?param=198677363763&fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.B91H0WQT3PRK&otracker=hp_rich_navigation_6_1.navigationCard.RICH_NAVIGATION_Appliances_B91H0WQT3PRK&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L0_view-all&cid=B91H0WQT3PRK">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/d42b57d8569fccc3.png?q=100" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Appliances</h5>
  </div>
</a></div><div class="card" style={{width:"18rem"}}>
<a href="https://www.flipkart.com/furniture-rd-sale1-store?fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.8TVKUWT87M16&otracker=hp_rich_navigation_7_1.navigationCard.RICH_NAVIGATION_Furniture_8TVKUWT87M16&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_7_L0_view-all&cid=8TVKUWT87M16">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Furniture</h5>
  </div>
</a></div>
<div class="card" style={{width:"18rem"}}>
<a href="https://www.flipkart.com/bgm-republicdaysale-22-store?param=19867736376343&fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.FASV00V1AKV7&otracker=hp_rich_navigation_8_1.navigationCard.RICH_NAVIGATION_Beauty%252CToys%2B%2526%2Bmore_FASV00V1AKV7&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_8_L0_view-all&cid=FASV00V1AKV7">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/db4875975dc033aa.png?q=100" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Beauty,Toys & more</h5>
  </div>
</a></div>
<div class="card" style={{width:"18rem"}}>
<a href="https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY&param=4546677678928174465&fm=neo%2Fmerchandising&iid=M_9ff5bff8-411f-42b5-980e-e219d8fdc65a_1_9XMGQ283ICSB_MC.8WQ1LO5EIJ31&otracker=hp_rich_navigation_9_1.navigationCard.RICH_NAVIGATION_Grocery_8WQ1LO5EIJ31&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_9_L0_view-all&cid=8WQ1LO5EIJ31">
  <img src="https://rukminim1.flixcart.com/flap/128/128/image/d270faabceb32f09.png?q=100" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Grocery</h5>
  </div>
</a></div>
</div>
</>
  );
}