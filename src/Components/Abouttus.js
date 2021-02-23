import React from 'react';
import "../Style/Abouttus.css"
import BB from '../Content/PNG/Silver.png'
import {Container, Col, Row, Media } from "react-bootstrap";
import WebBanner from '../Content/PNG/WebBanner03.png';
import Mustache from '../Content/PNG/Mustache.png';
import BeardMan from '../Content/PNG/Beardman.webp';
import sunbottle from '../Content/PNG/exist.JPG';
const Abouttus=()=>{
    return(
        <div>
        
          


            <div className="blogbanner">
                <img className="bannerimg" src={WebBanner}/>

                <div className="bannertext2">
                  BabaBeard - Blogs

                </div>

                 
            </div>


            <Container>
                <Row className="justify-content-end">
                
                <Col lg={6} xl={6} md={12} sm={12} xs={12} className="aboutsection1">
                    <div>
                    <p className="aboutfont1heading"> Our story </p>
         
        
                <hr/>
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
                    </div>


                </Col>
                
                <Col lg={6} xl={6} md={12} sm={12} xs={12} >
                    <div className="AboutColumnimg">
                        <img className="Columnimg1" src={sunbottle}/>
                    </div>


                </Col>
                </Row>





            </Container>

    
      

        </div>
 

     );}
     export default Abouttus;