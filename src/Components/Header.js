import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import NavbarLogo from "../Content/PNG/Silver.png";
import LoginAvatar from "../Content/PNG/loginavatar.png";
const Header = () => {
  return (
    <Container fluid className="dvnav">
      <Row className="justify-content-between">
        <div className="col-lg-5 col-sm-12 col-md-6 navbarcontent1">
          <ul>
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/about-us">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link to="shop">
                Shop
              </Link>
            </li>
            <li>
              {" "}
              <Link to="faqs" >
                FAQS
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="ingredients" >
                Ingredients
              </Link>
            </li>
            <li>
              {" "}
              <Link to="blogs">Blogs</Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-5 col-sm-12 col-md-4 navbarcontent2">
          <a href="landingpageBB.html">
            {" "}
            <img className="nav2img" src={NavbarLogo} />{" "}
          </a>{" "}
        </div>

        <div className="col-lg-2 col-sm-12 col-md-2 btnnav">
          <button className="btnnav1">
            {" "}
            <img src={LoginAvatar} width="20px" height="20px" /> Login
          </button>
          <button className="btnnav2">Signup</button>
        </div>
      </Row>
    </Container>
  );
};

export default Header;
