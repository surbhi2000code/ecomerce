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
import Card from './Card';

export default function Header() {
  return (
    <>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
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
</>
  );
}