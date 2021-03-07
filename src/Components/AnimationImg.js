import React from 'react';
import {Container, Col, Row, Media } from "react-bootstrap";
import '../Style/Animation.css';
import animation1 from '../Content/PNG/Animation Pics/ani1.JPG';
import animation2 from '../Content/PNG/Animation Pics/ani2.JPG'
import animation3 from '../Content/PNG/Animation Pics/ani3.jpg'
const AnimationImg=()=>{
    return(

<div>
        <Container>
        <Row>
        <Col lg={6} xl={6} md={6} sm={6} xs={12} className="anicol">
        <img className="an1" src={animation1}/> 
        <img  className="an2" src={animation2}/>
       

        </Col>
        <Col lg={6} xl={6} md={6} sm={6} xs={12} className="anicol">
        <img  className="an3" src={animation3}/>
        
        </Col>

        </Row>



        </Container>




</div>



    );}
export default AnimationImg;