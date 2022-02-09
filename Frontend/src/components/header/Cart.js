import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./Header";

const Cart = ({detail}) => {
  const [allCart, setAllCart] = useState([]);
  const [dataLen, setDataLen] = useState("");
  const [prices, setPrices] = useState("");

  const arr =[];

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ userId: localStorage.getItem("email") });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/showCart", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllCart(result.data);    
        setDataLen(result.data.length);
      })
      .catch((error) => console.log("error", error));
  });

  const deletecart = (ID) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ ID: ID });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/removeCart", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  const plusQuantity = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/addquantity", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const quantity = result[0].quantity + 1;
        const price = quantity* result[0].productPrice;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ 'ID': id, 'quantity':quantity , 'price':price});

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("http://localhost:3001/updateCart", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          })
          .catch((error) => console.log("error", error));
      })
      .catch((error) => console.log("error", error));
  };

  const subQuantity = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/addquantity", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if(result[0].quantity >1){
          const quantity = result[0].quantity - 1;
          const price = result[0].productPrice*quantity;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ 'ID': id, 'quantity':quantity , 'price':price});

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("http://localhost:3001/updateCart", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          })
          .catch((error) => console.log("error", error));}
          else{
            alert("Quantity is already 1")
          }
      })
      .catch((error) => console.log("error", error));
  };

  var totalPrice= 0;


  const confirmOrder = (data) => {
    allCart.forEach((data) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        userId: localStorage.getItem("email"),
        prodtName: data.productName,
        prodtImage: data.productImage,
        totalPrice: data.price,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3001/userorder", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result === "Successfully") {
            alert("Successfully Add ");
          } else {
            alert("Login Required");
          }
        })
        .catch((error) => console.log("error", error));
    });
  };

  return (
    <div>
      <Header />
      <div
        style={{
          border: "0.2px solid gray",
          margin: "7vh",
          padding: "2vh",
          width: "50%",
        }}
      >
        <div style={{ display: "flex" }}>
          <h2 style={{ marginLeft: "2vh", marginRight: "18vh" }}>My Cart</h2>
          <h5 style={{ justifyContent: "right " }}>
            Deliver to:
            <input type="text" placeholder="Address" />
          </h5>
        </div>
        <div>
          {dataLen > 0 ? (
            allCart.map((data, index) => {

              return (
                <>
                  <div key={index}>
                    <div style={{ display: "flex" }}>
                      <>
                        <img
                          style={{
                            height: "15vh",
                            width: "15vh",
                            marginLeft: "3vh",
                            marginRight: "4vh",
                          }}
                          src={data.productImage}
                        />
                      </>
                      <div style={{ flexDirection: "col" }}>
                      <Link to="/details" style={{color:"black  "}}> <p style={{ fontSize: "28px" }} onClick={()=>detail(data.ID)}>{data.productName}</p></Link> 
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            marginTop: "10px",
                          }}
                        >
                          {data.price}
                        </p>
                        <Button onClick={() => deletecart(data.ID)}>
                          Remove
                        </Button>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <i
                        class="fa fa-plus-square"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                        onClick={() => plusQuantity(data.ID)}
                      >
                        <Button>+</Button>
                      </i>
                      <p style={{ marginLeft: "19px", fontSize: "18px" }}>
                        Qty:{data.quantity}
                      </p>
                      <i
                        class="fa fa-minus-square"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                        onClick={() => subQuantity(data.ID)}
                      >
                        <Button>-</Button>
                      </i>
                     
                    </div>
                  </div>
                  {
 <h5> Total Price: {totalPrice += parseInt(data.price)}</h5> 
                  }
                
                </>
              );
            })
          ) : (
            <p>No product Added</p>
          )}
          <Link to="/payment">
            <Button variant="warning" onClick={() => confirmOrder()}>
              Confirm Order
            </Button>
          </Link>
          <Link to="/">
            <Button variant="primary" style={{ marginLeft: "10px" }}>
              Add More Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
