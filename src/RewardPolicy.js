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
function RewardPolicy(){
    return(
        <div> 

<div className="blogbanner">
    <img className="bannerimg" src={WebBanner}/>

    <div className="bannertext2">
        BabaBeard - Reward Policy

    </div>

    <div>
        <img className="blogbannerimgmustache" src={Mustache}/>

    </div>
 
</div>

<Container>
        <Row>
            <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="policymainheading">
                    Reward Policy
                </div>

                <div className="policyheading">
                    1.Articles/Blogpost Competition

                </div>
                <div className="policycontent">
                    Write an article/blogpost on the particular given Topic. The best article will be selected and rewarded at the
                        end of competition. All the members who will take part in the competition will be rewarded
                        10% off on one order. The member who will win the competition will be rewarded 30% (20 %
                        for winning and 10% for taking part in the competition) every time he/she orders. The
                        submission will be done through email.
                     <br/>  <b>NOTE </b> : If you have already won the competition before, you can take part again but you
                        won’t be eligible for discount as you will be already enjoying a lifetime discount of 30%.
                </div>
                <div className="policyheading">
                    2.Referral Discounts


                </div>
                <div className="policycontent">
                    It is as simple as it sounds, tell your friends to write your name and email in the referral
section and enjoy discount of 10% for one order. <br/>
<b>NOTE</b>: You friend should have already bought our product before referring. The emails and
name should be same which your friend used while ordering and it will be checked.

                </div>
                <div className="policyheading">
                    3. Baba Beard Points


                </div>
                <div className="policycontent">
                    Earn points through Liking Page, sharing our post, following us on Instagram, and through
                    sign up. Redeem points to avail discounts. Points can also be earned through ordering as
                    well.
                    <br/> Amount of Rupees you’ve spent on order = points earned
                  <br/>  Rs.100 off on 500 points.
                   <br/> Rs.200 off on 1000 points.
                    <br/>Rs.300 off on 1500 points.
                </div>

                <div className="policyheading">
                4. Baba Beard Facebook Group


                </div>
                <div className="policycontent">
                
                    Join our Facebook group and avail 5% discount. Baba Beard will also require Graphic
                    Designer, Content Writers and other jobs for their brand which they will post on their Fb
                    Group.
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

    export default RewardPolicy;