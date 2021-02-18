import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './Style/FAQS.css';
import './Style/Home.css';
import SilverLogo from './Content/PNG/SilverLogo.png';
import NavbarLogo from './Content/PNG/Silver.png';
import LoginAvatar from './Content/PNG/loginavatar.png';
import SocialMediaLogo1 from './Content/PNG/FacebookLogo.png';
import SocialMediaLogo2 from './Content/PNG/InstaLogo.png';
import SocialMediaLogo3 from './Content/PNG/TwitterLogo.png';

function FAQS(){
    return(
        <div> 


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
                        <br/>

                            <p className="collapsible">
                                Q. Are there any Side Effects?

                            </p>
                            <p className="faqans content"><b>A.</b> Absolutely not, we have sourced our ingredients from
                                verified
                                exporters and all are 100% Organic. We have make sure that there must
                                be NO chemical used in the product.
                            </p>
                      <br/>

                  
                            <p className="collapsible">
                                Q. Can Beard Oil stop my skin from being itchy?

                            </p>
                            <p className="faqans content"><b>A.</b> Oh yes, we have give extra focus on this concern, as
                                Beard
                                Oil by Baba Beard using
                                all
                                and all Organic contents
                                for our beardsmen to nourish the skin and relieves itching.
                                So yes, you can use our Beard Oil to help with itchy skin.
                            </p>
                       <br/>
                         
                            <p className="collapsible">
                                Q. How often should I use beard oil?

                            </p>
                            <p className="faqans content"><b>A.</b> That's a great question. To really enjoy the
                                benefits of
                                beard oil you should use
                                it
                                at least 2 times a day (morning and evening) for a minimum of 4-5 weeks, to get the
                                most
                                out of your beard oil. I just want you to have a great experience and really feel
                                the power of beard oil.
                                Commit to this time frame and then you can back off and use beard oil less often if
                                you prefer.
                            </p>
                     <br/>
                     
                            <p className="collapsible">
                                Q. How long will the beard oil scent last? 

                            </p>
                            <p className="faqans content"><b>A.</b> We have scented our Beard Oil with 100% pure
                                essential oils.
                                They smell amazing!
                                Depending on how
                                quickly your hair and skin absorb the oil, it's possible to still smell the beard
                                oil
                                3-4 hours after applying it. 
                            </p>
                    <br/>

                     
                            <p className="collapsible">
                                Q. What can I do to  grow an awesome beard? 

                            </p>
                            <p className="faqans content"><b>A.</b> Well, may be you already have an awesome beard but
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
                            
                            </p>
                        
                  <br/>

                        
                            <p className="collapsible">
                                Q. What is the life of the product?

                            </p>
                            <p className="faqans content"><b>A.</b> You can use Baba Beard Oil 1 year after the you have
                                opened
                                it.
                            </p>
                    <br/>

                       
                            <p className="collapsible">
                                Q. If i can grow a beard or my beard is patchy, will this give me the type of beard
                                I desperately want.

                            </p>
                            <p className="faqans content"><b>A.</b> Our products contain essential oils that increase
                                blood flow
                                to the area it is applied
                                to which helps facilitate hair growth,
                                and oils that nourish and smooth hair to reduce the amount of hair lost naturally
                                and while brushing or combing.
                            </p>
                   <br/>
                



            </div>   
        </div>
    </Row>
</Container>
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
 

{/* 
<script>
    var coll = document.getElementsByclassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classNameList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
    </script> */}


         </div>
 
 
 )};

 export default FAQS;