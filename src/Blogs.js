import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';

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
import Launchingsoon from './Content/PNG/launchingsoon.jpeg';

function Blogs(){
    return(
        <div> 

<div className="blogbanner">
    <img className="bannerimg" src={WebBanner}/>

    <div className="bannertext2">
        BabaBeard - Blogs

    </div>

     
</div>






<Container>
        <Row>
            <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="blogfont1">
                    BB- BabaBeard
                </div>
                <div className="blogfont2"> Baba beard is one of the leading beard oil brands all over Pakistan </div>
            </div>


        </Row>

    </Container>

    <Container fluid>
        <Row className="justify-content-center mt-4">
        <Col lg={4} xl={4} md={6} sm={8} xs={8} >
          
                <div className="overlaycontainer">
                    <img className="blogimg" src={Launchingsoon}/>

                    <div className="blogoverlay">
                        <div className="text">6 Reasons Why Girls Should Date A Man With A Beard  <br/>
                            <button href="#" className="blogbtn"> View post</button>
                        </div>
                    </div>



                </div>


            </Col>

            <Col lg={4} xl={4} md={6} sm={8} xs={8} >
                <div className="overlaycontainer">
                    <img className="blogimg" src={Launchingsoon}/>

                    <div className="blogoverlay">
                        <div className="text">Celebrities who have used beard oils  <br/>
                            <button href="#" className="blogbtn"> View post</button>
                        </div>
                    </div>



                </div>
           </Col>

           <Col lg={4} xl={4} md={6} sm={8} xs={8}>
                <div className="overlaycontainer">
                    <img className="blogimg" src={Launchingsoon}/>

                    <div className="blogoverlay">
                        <div className="text">Why men have white hair in their beard  <br/>
                            <button href="#" className="blogbtn"> View post</button>
                        </div>
                    </div>



                </div>
           </Col>

        </Row>



        <Row className="justify-content-center mt-4">
           <Col lg={4} xl={4} md={6} sm={8} xs={8} >
                <div className="overlaycontainer">
                    <img className="blogimg" src={Launchingsoon}/>

                    <div className="blogoverlay">
                        <div className="text">10 WOW facts about the beard you should know. <br/>
                            <button href="#" className="blogbtn"> View post</button>
                        </div>
                    </div>



                </div>
          </Col>

          <Col lg={4} xl={4} md={6} sm={8} xs={8} >
                <div className="overlaycontainer">
                    <img className="blogimg" src={Launchingsoon}/>

                    <div className="blogoverlay">
                        <div className="text">What 100% organic oil does to your beard  <br/>
                            <button href="#" className="blogbtn"> View post</button>
                        </div>
                    </div>



                </div>
        </Col>

        <Col lg={4} xl={4} md={6} sm={8} xs={8} >
                <div className="overlaycontainer">
                    <img className="blogimg" src={Launchingsoon}/>

                    <div className="blogoverlay">
                        <div className="text">Which is the best time to apply beard oil  <br/>
                            <button href="#" className="blogbtn"> View post</button>
                        </div>
                    </div>



                </div>

           </Col>
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

export default Blogs;