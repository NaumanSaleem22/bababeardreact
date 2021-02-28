import React from 'react';
import {Container, Col, Row,Card,Accordion,Button} from 'react-bootstrap';
import './Style/FAQS.css';
import './Style/Home.css';
import SilverLogo from './Content/PNG/SilverLogo.png';
import NavbarLogo from './Content/PNG/Silver.png';
import LoginAvatar from './Content/PNG/loginavatar.png';
import SocialMediaLogo1 from './Content/PNG/FacebookLogo.png';
import SocialMediaLogo2 from './Content/PNG/InstaLogo.png';
import SocialMediaLogo3 from './Content/PNG/TwitterLogo.png';
import Footer from './Components/Footer';
import Services from './Components/Services';

function FAQS(){
    return(
        <div> 

<div>
<div className="faqbackground">

</div>


</div>
<Container>
    <Container>
      
            
        <Row>
            <div className="col-lg-12 col-sm-12 col-md-12 dvfaqs1">
                <p className="faqsmainheading"> FAQS </p>
                <hr/>
                <div>

                    <p className="faqquestionheading">
                        Questions that can come across your mind
                    </p>
         
<Accordion>

 
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      <p className="collapsible">
                                Q. Are there any Side Effects?

                            </p>
                          
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>  <p className="faqans content"><b>A.</b> Absolutely not, we have sourced our ingredients from
                                verified
                                exporters and all are 100% Organic. We have make sure that there must
                                be NO chemical used in the product.
                            </p></Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
      <p className="collapsible">
                                Q. Can Beard Oil stop my skin from being itchy?

                            </p>
                           
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body> <p className="faqans content"><b>A.</b> Oh yes, we have give extra focus on this concern, as
                                Beard
                                Oil by Baba Beard using
                                all
                                and all Organic contents
                                for our beardsmen to nourish the skin and relieves itching.
                                So yes, you can use our Beard Oil to help with itchy skin.
                            </p></Card.Body>
    </Accordion.Collapse>
  </Card>


  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
      <p className="collapsible">
                                Q. How often should I use beard oil?

                            </p>
                         
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>   <p className="faqans content"><b>A.</b> That's a great question. To really enjoy the
                                benefits of
                                beard oil you should use
                                it
                                at least 2 times a day (morning and evening) for a minimum of 4-5 weeks, to get the
                                most
                                out of your beard oil. I just want you to have a great experience and really feel
                                the power of beard oil.
                                Commit to this time frame and then you can back off and use beard oil less often if
                                you prefer.
                            </p></Card.Body>
    </Accordion.Collapse>
  </Card>


  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
        
      <p className="collapsible">
                                Q. How long will the beard oil scent last? 

                            </p>
                           
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body> <p className="faqans content"><b>A.</b> We have scented our Beard Oil with 100% pure
                                essential oils.
                                They smell amazing!
                                Depending on how
                                quickly your hair and skin absorb the oil, it's possible to still smell the beard
                                oil
                                3-4 hours after applying it. 
                            </p></Card.Body>
    </Accordion.Collapse>
  </Card>



  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="5">
      <p className="collapsible">
                                Q. What can I do to  grow an awesome beard? 

                            </p>
             
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="5">
      <Card.Body>               <p className="faqans content"><b>A.</b> Well, may be you already have an awesome beard but
                                you just
                                don't know it yet,
                                  If  you  just started growing, Use the tips below:
                        
                              <br/>  1) Apply Baba Beard regularly and with consistency. 
                              <br/>     2) Keep away the scissors at least a month from your fuzz.  
                              <br/>   3) Don’t use shampoo more than twice a week as it contains harmful chemicals. 
                                <br/>      4) Eat protein rich food , after all that's what our hair is made of. 
                                <br/>  5) HEAD TO THE GYM!!! As,  more Testosterone = more Hair.
                                <br/>   6) Check out and pick the shape of beard that suits you, and then stick to it. 
                                <br/>   7) Show off the Hard work and Take pride in your Beard. 
                            
                            </p></Card.Body>
    </Accordion.Collapse>
  </Card>



  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="6">
      <p className="collapsible">
                                Q. What is the life of the product?

                            </p>
                           
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="6">
      <Card.Body> <p className="faqans content"><b>A.</b> You can use Baba Beard Oil 1 year after the you have
                                opened
                                it.
                            </p></Card.Body>
    </Accordion.Collapse>
  </Card>



  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="7">
          
      <p className="collapsible">
                                Q. If i can grow a beard or my beard is patchy, will this give me the type of beard
                                I desperately want.

                            </p>
                          
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="7">
      <Card.Body> <p className="faqans content"><b>A.</b> Our products contain essential oils that increase
                                blood flow
                                to the area it is applied
                                to which helps facilitate hair growth,
                                and oils that nourish and smooth hair to reduce the amount of hair lost naturally
                                and while brushing or combing.
                            </p>y</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>




            </div>   
        </div>
    </Row>
</Container>
</Container>
 
 
 <Footer/>


         </div>
 
 
 )};

 export default FAQS;