import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './Style/Policy.css';
import './Style/Home.css';
import './Style/Blogs.css'
import SilverLogo from './Content/PNG/SilverLogo.png';
import NavbarLogo from './Content/PNG/Silver.png';
import LoginAvatar from './Content/PNG/loginavatar.png';
import SocialMediaLogo1 from './Content/PNG/FacebookLogo.png';
import SocialMediaLogo2 from './Content/PNG/InstaLogo.png';
import SocialMediaLogo3 from './Content/PNG/TwitterLogo.png';

import WebBanner from './Content/PNG/WebBanner03.png';
import Mustache from './Content/PNG/Mustache.png';

function RefundPolicy(){
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
        BabaBeard - Refund Policy

    </div>

    <div>
        <img className="blogbannerimgmustache" src={Mustache}/>

    </div>
 
</div>


<Container>
    <Row>
        <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="policymainheading">
                Refund Policy
            </div>

            <div className="refundpolicy">
                Baba Beard always keeps their customers first, that is why Baba Beard is offering a
                30 days return policy. That means you can return the product and get a refund within
                30 days of time you have received.


            </div>

            <div className="policyheading">
                Product Condition:



            </div>
            <div className="policycontent">
                The product must be in the same condition with complete original packaging, tags and
                unused. You are also required to provide proof of purchase either in the form of receipt
                or in the form of order placement message.


            </div>
            <div className="policyheading">

                Damages and issues:



            </div>
            <div className="policycontent">
                Check the product immediately after you receive it, if the product is damaged or
                defective by any means, or if you have received the wrong parcel, contact Baba beard
                team immediately, so that we could evaluate and make this issue fix.
                
            </div>

            <div className="policyheading">
                Return Criteria:



            </div>
            <div className="policycontent">
                You have to connect with us at <a href="support@bababeard.com">Support@bababeard.com </a> to initiate the refund and return
                procedure. Your return request will be reviewed and will take up to 2 days, if accepted,
                you will be provided with instructions on how and where to return the product.
                
            </div>

            <div className="policyheading">
                Refund:



            </div>
            <div className="policycontent">
                Once we receive the product and finishes inspection, we’ll notify you whether the product
                is approved or not. After approval you will be refunded immediately via any payment
                method you would prefer. You can ask any query regarding the return procedure at
                support@bababeard.com
                
                
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

export default RefundPolicy;