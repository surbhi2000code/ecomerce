import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@mui/material/Badge";
import { MdShoppingCart } from "react-icons/md";
import { IoMdNotifications, IoMdDownload } from "react-icons/io";
import { IoBriefcase } from "react-icons/io5";
import { BiMessageAltError } from "react-icons/bi";
import { AiOutlineRise } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import Cards from './Card'
import Mod from './Modal'


export default function Header() {

  const [modalShow, setModalShow] = React.useState(false);

  const showList = () => {
    document.querySelector("#list").style.display = "block";
  };
  const hideList = () => {
    document.querySelector("#list").style.display = "none";
  };
  const showLists = () => {
    document.querySelector("#lists").style.display = "block";
  };
  const hideLists = () => {
    document.querySelector("#lists").style.display = "none";
  };
  const showPage = () => {
    setModalShow(true)
    
   // document.querySelector("#page").style.display = "block";
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} variant="primary">
        <AppBar
          position="static"
          style={{ height: "56px", backgroundColor: "#2874f0" }}
        >
          <Toolbar
            style={{
              display: "flex",
              flexDirection: "row",
              contentAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "35vh",
                marginRight: "2vh",
              }}
            >
              <a className="_21ljIi" href="/">
                <img
                  style={{ width: "75px" }}
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                  alt="Flipkart"
                  title="Flipkart"
                  className="_2xm1JU"
                />
              </a>
              <a
                href="/plus"
                style={{
                  color: "inherit",
                  fontSize: "11px",
                  fontStyle: "italic",
                  marginTop: "-1px",
                }}
              >
                Explore
                <span className="_2FVHGh" style={{ color: "gold" }}>
                  Plus
                </span>
                <img
                  style={{ width: "10px", color: "inherit" }}
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                />
              </a>
            </div>

            <div
              style={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                position: "relative",
                width: "60vh",
              }}
            >
              <InputBase
                placeholder="Search for products, brands and more"
                style={{ width: "60vh", height: "30px", paddingLeft: "3vh" }}
              />
              <SearchIcon
                style={{
                  color: "#2874f0",
                  width: "40px",
                  height: "28px",
                  paddingRight: "1px",
                }}
              />
            </div>

             
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{   
                  backgroundColor:"white",
                  border: "none",
                  marginLeft: "20vh",
                  width:"16vh", height: "3vh",borderRadius:"0", paddingTop:"1px", marginTop:"2px"
                }}
                onMouseOver={showList} onMouseOut={hideList} 
              >
              <h6 style={{fontSize: "18px",color:"#2874f0"}} onClick={()=>showPage()}>Login</h6>
              </Dropdown.Toggle>

              <Dropdown.Menu id="list"  onMouseOver={showList} onMouseOut={hideList} >
                <Dropdown.Item href="#/action-3" style={{fontWeight:"bold"}}>
                  New Customer?
                  <a style={{ marginLeft: "16vh", textAlign: "right",  color: "#2874f0", fontWeight:"bold"}} href="...">
                    Sign Up
                  </a>
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-1">
                  <IoMdNotifications
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  My Profile
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-2">
                  <IoBriefcase
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  Flipkart Plus Zone
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-3">
                  <BiMessageAltError
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  Orders
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-3">
                  <AiOutlineRise
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  Wishlist
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-3">
                  <IoMdDownload
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  Rewards
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-3">
                  <IoMdDownload
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  Gift Cards
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      
       
            <Dropdown>
            <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  
                  backgroundColor:"#2874f0",
                  border: "none",
                  marginLeft: "2vh",
                  marginRight: "5vh"
,                  width:"10vh", height: "3vh",borderRadius:"0", paddingTop:"1px", marginTop:"2px"
                  
                }}
                onMouseOver={showLists} onMouseOut={hideLists}
              >
                <h6 style={{fontSize: "18px",fontColor:"black"}}>More</h6>
              </Dropdown.Toggle>


              <Dropdown.Menu id="lists"   onMouseOver={showLists} onMouseOut={hideLists}>
                <Dropdown.Item href="#/action-1">
                  <IoMdNotifications
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  Notification Preferences
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-2">
                  <IoBriefcase
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  Sell on Flipkart
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-3">
                  <BiMessageAltError
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  24*7 Customer Care
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-3">
                  <AiOutlineRise
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  Advertise
                </Dropdown.Item>
                <hr style={{ width: "100%", color: "gray" }}></hr>
                <Dropdown.Item href="#/action-3">
                  <IoMdDownload
                    style={{ color: "#2874f0", marginRight: "10px" }}
                  />
                  Download App
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h6 style={{ fontSize: "20px" }}>
              <Badge badgeContent={4} color="warning" style={{marginRight:"10px"}}>
                <MdShoppingCart />
              </Badge>
              Cart
            </h6>
          </Toolbar>
        </AppBar>
      </Box>
      <Cards/>
      

      <Mod
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
