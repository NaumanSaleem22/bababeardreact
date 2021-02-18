import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './Style/About.css';
import './Style/Home.css';
import SilverLogo from './Content/PNG/SilverLogo.png';
import NavbarLogo from './Content/PNG/Silver.png';
import LoginAvatar from './Content/PNG/loginavatar.png';
import SocialMediaLogo1 from './Content/PNG/FacebookLogo.png';
import SocialMediaLogo2 from './Content/PNG/InstaLogo.png';
import SocialMediaLogo3 from './Content/PNG/TwitterLogo.png';
function About(){
    return(
        <div> 



<div className="container">
    <div className="row">
        <div className="col-lg-12 col-sm-12 col-md-12 dvabout1">
            <p className="dvaboutfont1"> Our story </p>
            <hr/>
            <div>
                <p className="aboutcontent">
                    The time when everyone was having beard craze, there was a team of friends aiming to have a
                    beard like no one else, thick, shiny and Attractive. But I noticed that growing and maintaining
                    a beard
                    was not an easy feat. They have tried almost every existing product in the market but FAILED to
                    have those
                    desired results AS PROMISED. After getting disappointed they started sorting
                    out the necessary elements that can help to grow and maintain the Beard, with no itching and
                    irritation at all.
                </p>
                <p className="aboutcontent">
                    After comparing 50+ top leading brands all over the world, researching almost every existing
                    skin friendly ingredient that can accelerate the growth of Facial Hair, make the beard look
                    shiny
                    and attractive, and can fill the patches of already grown patchy beard.
                    They started manufacturing multiple samples and trying on themselves.
                </p>

                <p className="aboutcontent">
                    The results were quite impressive and surprising. So, they decided to rescue all those who got
                    stuck
                    in the trap that required you to buy multiples of product to grow, remove patches, or maintain
                    your beard.
                </p>

                <p className="aboutcontent">
                    This is how “Baba Beard” a Beard Care Company came into existence, to cater
                    the Best product to their bearded Brothers.
                </p>
                <br/>
                <br/>
                <p className="dvaboutfont1"> Our Mission </p>
                <hr/>
                <p className="aboutcontent">
                    Baba beard aims to provide the premium Quality Product to our highly valuable customers.
                    Baba Beard values the care you are giving to your Beard.
                    That is why Baba Beard is committed to provide 100% organic Beard Oil having 0% chemical
                    tolerance.
                </p>
                <br/>
                <br/>
                <p className="dvaboutfont1"> Why Baba Beard? </p>
                <hr/>
                <p className="aboutcontent2">
                    Our beard oil contains 100% Organic Oils which are free from any harmful chemicals.
                    We have designed a step by step procedure of growing your beard in 3 stages.<br/>
                    ACTIVATE - FILL PATCHES - NOURISH

                </p>

            </div>

        </div>
    </div>
</div>

<div className="container-fluid">
    <div className="row justify-content-center emaildivbackground">
        <div className="col-lg-5 col-sm-12 col-md-5 emaildiv">
            <div>
                <p className="emailfont1">
                    To get the news and updates related to Baba Beard </p>
                    <br/>
                <p className="emailfont2">Enter your email for Subscription. </p>
             
            <input className="emailinput" type="email" id="email" name="email" placeholder="Type your email"/>
            <button className="btnemailsignup"> Signup </button>
        </div>
    </div>

</div>
</div>


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
export default About;