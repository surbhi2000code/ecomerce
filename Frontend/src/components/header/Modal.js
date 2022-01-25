import React, {useState, useEffect} from "react";
import emailjs from '@emailjs/browser';
import { Modal, Button, Form, ModalFooter } from "react-bootstrap";

const Mod = (props) => {
  const showRegister = () => {
    document.querySelector("#show1").style.display = "none";
    document.querySelector("#page").style.display = "block";
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xngypus', 'template_qosnxfp', e.target, 'user_ti1lKayI0yiBHTNNbCFG3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const showDiv = (e) => {
    sendEmail(e)
    document.querySelector("#otp").style.display = "block";
    document.querySelector("#sign").style.display = "block";
    document.querySelector("#cont").style.display = "none";
  };
  const showLogin = () => {
    document.querySelector("#show1").style.display = "block";
    document.querySelector("#page").style.display = "none";
  };
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [otp, setOtp] = useState("");
  const [userotp, setUserotp] = useState("")

  useEffect(() => {
    const otp = Math.floor(1000+ Math.random() * 9000);
    setOtp(otp)
  }, [])

  const verify = () =>{
    if(userotp == otp){
      alert('login')
    }
    else{
     alert('otp wrong') 
    }
  }

  const sendUser = () => {
    verify()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
     "email": email,
      "password": password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/userSignin", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result === "Successfully"){
          alert("success")
        }
        else{
          alert("no")
        }
      })
    
      .catch(error => console.log('error', error));
    }

    const sendUserLogin = () => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
       "email": email,
        "password": password
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:3001/userLogin", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result === "successfully"){
            alert("success")
          }
          else{
            alert("no")
          }
        })
      
        .catch(error => console.log('error', error));
      }
  
    
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{ display: "block" }} id="show1">
          <div style={{ display: "flex" }}>
            <div style={{ maxWidth: "36%", backgroundColor: "#2874f0" }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  color: "white",
                  fontSize: "28px",
                }}
              >
                Login
              </Modal.Title>

              <Modal.Body>
                <div>
                  <p
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "8px",
                      color: "white",
                    }}
                  >
                    Get access to your Orders, Wishlist and Recommendations
                  </p>
                </div>
              </Modal.Body>
              <ModalFooter style={{ border: "none" }}>
                <img
                  style={{ marginTop: "15vh" }}
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
                />
              </ModalFooter>
            </div>
            <div>
              <div></div>
              <Form
                style={{
                  paddingLeft: "50px",
                  marginLeft: "4vh",
                  marginTop: "7vh",
                  width: "35vh",
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter Email/Moblie No."
                    style={{
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      width: "35vh",
                    }}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{
                      borderTop: "none",
                      borderLeft: "none",
                      marginTop: "25px",
                      marginBottom: "25px",
                      borderRight: "none",
                      width: "35vh",
                    }}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                  <Form.Text
                    className="text-muted"
                    style={{ marginTop: "25px" }}
                  >
                    By continuing, you agree to Flipkart's Terms of Use and
                    Privacy Policy.{" "}
                  </Form.Text>
                </Form.Group>
                <div
                  style={{
                    justifyItems: "center",
                    display: "grid",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    type="submit"
                    style={{
                      width: "35vh",
                      backgroundColor: "#fb641b",
                      border: "none",
                      borderRadius: "0px",
                      height: "6vh",
                    }}
                    onClick={sendUserLogin}
                  >
                    Login
                  </Button>
                </div>
                <h6
                  style={{
                    color: "gray",
                    textAlign: "center",
                    paddingTop: "1vh",
                    paddingBottom: "1vh",
                    marginLeft: "5vh",
                  }}
                >
                  OR
                </h6>
                <div
                  style={{
                    justifyItems: "center",
                    display: "grid",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant="light"
                   
                    style={{
                      width: "35vh",
                      border: "none",
                      borderRadius: "0px",
                      height: "6vh",
                      color: "#2874f0",
                      boxShadow:"2px 2px 2px 2px #888888" 
                    }}
                  >
                    Request Otp
                  </Button>
                </div>
                <Modal.Footer
                  style={{
                    border: "none",
                    width: "35vh",
                    marginTop: "30px",
                    marginBottom: "8px",
                  }}
                >
                  <h7
                    style={{
                      color: "#2874f0",
                      width: "35vh",
                      textAlign: "center",
                      cursor:"pointer"
                    }}
                    onClick={() => showRegister()}
                  >
                    New to Flipkart? Create an account
                  </h7>
                </Modal.Footer>
              </Form>
            </div>
          </div>
        </div>



        <div style={{ display: "none" }} id="page">
          <div style={{ display: "flex" }}>
            <div style={{ maxWidth: "36%", backgroundColor: "#2874f0" }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  color: "white",
                  fontSize: "28px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
               Looks like you're new here!
              </Modal.Title>

              <Modal.Body>
                <div>
                  <p
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      fontWeight: "8px",
                      color: "white",
                    }}
                  >
                    Sign up with your mobile number to get started
                  </p>
                </div>
              </Modal.Body>
              <ModalFooter style={{ border: "none" }}>
                <img
                  style={{ marginTop: "15vh" }}
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
                />
              </ModalFooter>
            </div>
            <div>
              <div></div>
              <Form
                style={{
                  paddingLeft: "50px",
                  marginLeft: "4vh",
                  marginTop: "7vh",
                  width: "35vh",
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                  <Form.Control
                    type="email"
                    placeholder="Enter Email/Moblie No."
                    style={{
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      width: "35vh",
                    }}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Group>
                <div style={{ display:"none" }} id="otp">
                <Form.Group className="mb-3" controlId="formBasicOtp" >
                  <Form.Control
                    type="otp"
                    name = "otp"
                    
                    placeholder="Enter OTP"
                    style={{
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      width: "35vh",
                    }}
                    onChange={(e) => setUserotp(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Set Password"
                    style={{
                      borderTop: "none",
                      borderLeft: "none",
                      marginTop: "25px",
                      marginBottom: "25px",
                      borderRight: "none",
                      width: "35vh",
                    }}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                   </Form.Group>
                   </div>
                  <Form.Text
                    className="text-muted"
                    style={{ marginTop: "25px" }}

                  >
                    By continuing, you agree to Flipkart's Terms of Use and
                    Privacy Policy.
                  </Form.Text>
               
                <div
                  style={{
                    justifyItems: "center",
                    display: "grid",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    id="cont"
                    style={{
                      width: "35vh",
                      backgroundColor: "#fb641b",
                      border: "none",
                      borderRadius: "0px",
                      height: "6vh",
                      display:"block"
                    }}
                    onClick= {showDiv}
                  >
                   Continue
                  </Button>
                  <Button
                    type="submit"
                    style={{
                      width: "35vh",
                      backgroundColor: "#fb641b",
                      border: "none",
                      borderRadius: "0px",
                      height: "6vh",
                      display:"none"
                    }}
                    onClick={sendUser}
                    id="sign"
    
                  >
                   Sign In
                  </Button>
                </div>
                <h6
                  style={{
                    color: "gray",
                    textAlign: "center",
                    paddingTop: "2vh",
                    paddingBottom: "1vh",
                    marginLeft: "5vh",
                  }}
                >
                  OR
                </h6>
                <div
                  style={{
                    justifyItems: "center",
                    display: "grid",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant="light"
                    style={{
                      width: "35vh",
                      border: "none",
                      borderRadius: "0px",
                      height: "6vh",
                      color: "#2874f0",
                      boxShadow:"2px 2px 2px 2px #888888" 
                    }}
                    onClick={showLogin}
                  >
                   Existing User? Login
                  </Button>
                </div>
                <Modal.Footer
                  style={{
                    border: "none",
                    width: "35vh",
                    marginTop: "30px",
                    marginBottom: "8px",
                  }}
                >
                 
                </Modal.Footer>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Mod;
