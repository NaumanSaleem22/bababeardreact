import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './Style/Blogs.css';
import './Style/Home.css';
import './Style/Policy.css';
import SilverLogo from './Content/PNG/SilverLogo.png';
import NavbarLogo from './Content/PNG/Silver.png';
import LoginAvatar from './Content/PNG/loginavatar.png';
import SocialMediaLogo1 from './Content/PNG/FacebookLogo.png';
import SocialMediaLogo2 from './Content/PNG/InstaLogo.png';
import SocialMediaLogo3 from './Content/PNG/TwitterLogo.png';
import WebBanner from './Content/PNG/WebBanner03.png';
import Mustache from './Content/PNG/Mustache.png';
function ReplacingPolicy(){
    return(
        <div> 


<Container fluid className="dv1">




</Container>
<Container fluid className="dvnav">
        <Row className="justify-content-between">
            <div className="col-lg-5 col-sm-12 col-md-6 navbarcontent1">
                <ul>
                    <li><a href="landingpageBB.html">Home</a> </li>
                    <li> <a href="About.html" target="_blank">About</a></li>
                    <li> <a href="Shop.html" target="_blank">Shop</a></li>
                    <li> <a href="FAQS.html" target="_blank">FAQS</a> </li>
                    <li> <a href="Ingredients.html" target="_blank">Ingredients</a></li>
                    <li> <a href="Blogs.html">Blogs</a></li>
                </ul>
            </div>
    
            <div className="col-lg-5 col-sm-12 col-md-4 navbarcontent2">
                <a href="landingpageBB.html"> <img className="nav2img" src={NavbarLogo}/> </a>             </div>
    
            <div className="col-lg-2 col-sm-12 col-md-2 btnnav">
                <button className="btnnav1"> <img src={LoginAvatar} width="20px" height="20px"/>  Login</button>
                <button className="btnnav2">Signup</button>
            </div>
    
        </Row>
    
    </Container>


<div className="blogbanner">
    <img className="bannerimg" src={WebBanner}/>

    <div className="bannertext2">
        BabaBeard - Replacing Policy

    </div>

    <div>
        <img className="blogbannerimgmustache" src={Mustache}/>

    </div>
 
</div>

<Container>
    <Row>
        <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="policymainheading">
                Replacing Policy
            </div>

            <div className="refundpolicy">
                If the bottle is delivered damaged or if you feel any irritation on your skin after applying, you
                can contact us at support@bababeard.com to get your bottle replaced.



            </div>

            <div className="policyheading">
                Conditions:



            </div>
            <div className="policycontent">
                1. The box should not be damaged. <br/>
                2. The invoice should not be damaged, if damaged you will be sent a copy of invoice at your
                email so you can print it and use as a proof of your order.

            </div>


        </div>
    </Row>

</Container>

<Container fluid>
<Row className="Footerrow">
    <div className="col-lg-6 col-sm-12 col-md-6 Footer1">
        <div className="logo17">
            <p className="footerlogo"> <a href="#"> <img className="footerlogopic" src={SilverLogo}/></a>
                BabaBeard<strong>BB</strong> </p>

        </div>
        <div className="footer1content">
            BabaBeard is a private beard oil company that manufacture 100% organic beard oil.
        </div>
        <div>
         <a href="www.facebook.com/bababeardco">   <img src={SocialMediaLogo1} width="50px" height="50px"/> </a>
         <a href="www.instagram.com/bababeardco">  <img src={SocialMediaLogo2} width="40px" height="40px"/> </a>  
         <a href="www.twitter.com/bababeardco">      <img src={SocialMediaLogo3} width="40px" height="40px"/> </a> 
     
        </div>
        <div>
          Got any query?
          <br/>  Send us an email on <a href="support@bababeard.com">support@bababeard.com</a>
        </div>
    </div>
    <div className="col-lg-2 col-sm-6 col-md-2 Footer2">
        <div className="footer2content1">Product</div>
        <div className="footer2content2">
            <p> <a className="linktag" href="RewardPolicy.html"> Reward Policy</a></p>
            <p> <a className="linktag" href="ReplacingPolicy.html">Replacing Policy </a></p>
            <p> <a className="linktag" href="RefundPolicy.html"> Refund Policy</a></p>

            <p> <a className="linktag" href="Blogs.html">Blogs </a></p>

        </div>
    </div>
    <div className="col-lg-2 col-sm-6 col-md-2 Footer3">
        <div className="footer2content1">Engage</div>
        <div className="footer3content1">
            <p> <a className="linktag" href="landingpageBB.html">BabaBeard</a> </p>
            <p> <a className="linktag" href="FAQS.html"> FAQS</a></p>
            <p> <a className="linktag" href="RewardPolicy.html"> Rewards</a></p>
            <p> <a className="linktag" href="About.html"> About Us</a></p>
            <p> <a className="linktag" href="PrivacyPolicy.html"> Privacy Policy</a></p>
            <p> <a className="linktag" href="Terms.html"> Terms of Service </a></p>

        </div>
    </div>
    <div className="col-lg-2 col-sm-12 col-md-2 Footer4">
        <div className="footer2content1">
            Contact
         </div>
        <div className="footer3content1">
            <p><a className="linktag" href="contactus.html"> Contact us </a> </p>


        </div>
    </div>
</Row>
</Container>
 



            </div>

    )};

    export default ReplacingPolicy;