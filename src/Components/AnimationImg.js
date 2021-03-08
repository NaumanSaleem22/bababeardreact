import React from 'react';
import {Container, Col, Row, Media } from "react-bootstrap";
import '../Style/Animation.css';
import animation1 from '../Content/PNG/Animation Pics/ani1.JPG';
import animation2 from '../Content/PNG/Animation Pics/ani2.JPG'
import animation3 from '../Content/PNG/Animation Pics/ani3.jpg'
const AnimationImg=()=>{
    return(

<div>
        <Container className="animationcontainer">
        <Row>
        <Col lg={6} xl={6} md={12} sm={12} xs={12} className="anicol">
  
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
           . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
             essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, 
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
           </p> 
        </Col>
        <Col lg={3} xl={3} md={12} sm={12} xs={12} className="anicol">
        <img className="an1" src={animation1}/> 
        <img  className="an2" src={animation2}/>
 
        
        </Col>

        <Col lg={3} xl={3} md={12} sm={12} xs={12} className="anicol">
 
        <img  className="an3" src={animation3}/>
        
        </Col>
        </Row>



        </Container>




</div>



    );}
export default AnimationImg;