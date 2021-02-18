import React from 'react';
import './Style/Home.css';
import {Container, Col, Row} from 'react-bootstrap';
import SilverLogo from './Content/PNG/SilverLogo.png';
import ThreeVariant from './Content/PNG/3VariantW.R..png';
import mustache from './Content/PNG/Mustache.png';
import BeYou from './Content/PNG/BeYouBeard.png';
import NavbarLogo from './Content/PNG/Silver.png';
import LoginAvatar from './Content/PNG/loginavatar.png';
import BackgroundBeard from './Content/PNG/Beard1.png';
import ActivateVariant from './Content/PNG/ActivateW.R..png';
import FillPatchesVariant from './Content/PNG/FillPatchesW.R..png';
import NourishVariant from './Content/PNG/ActivateW.R..png';
import MustacheAddToCart from './Content/PNG/MustacheAddCart.png';
import SlideShowPic1 from './Content/PNG/Slideshow1.jpg';
import SlideShowPic2 from './Content/PNG/Slideshow2.jpg';
import SlideShowPic3 from './Content/PNG/Slideshow3.jpg';
import SocialMediaLogo1 from './Content/PNG/FacebookLogo.png';
import SocialMediaLogo2 from './Content/PNG/InstaLogo.png';
import SocialMediaLogo3 from './Content/PNG/TwitterLogo.png';
import BeardTexture from './Content/PNG/BeardTexture.png'
function Home(){
    return(
        <div> 
           
        <Container fluid className="dv1">
    
    
    
    
    </Container>
    <Container fluid className="banner">
        <Row className="justify-content-center ">
            <div className="col-lg-4 col-sm-4 col-md-4 mt-4 col-xs-4 bannerleft">
              
                <img className="leftpic" src={SilverLogo}></img>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4 mt-4  bannermiddle">
                
                     <img className="middlepic" src={ThreeVariant}/>
    
                     <div className="shopnow">
                        <a className="shopnowlink" href="#">Shop now </a>
                          <img className="mustache" src={mustache}/>
                          
                         
                      </div>
          
    
    
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4 col-xs-4 mt-4 bannerright">
                <img className="rightpic" src={BeYou}/>
            </div>
    
        </Row>
    
       
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
    
    
    
    
    
    <Container>
        <Row>
        <div class="col-lg-12 col-sm-12 col-md-12 quote">
                <img class="quoteimg" src={BackgroundBeard}/>
                <div class="quotefont1 centered">
                    Quote
                </div>
                <div class="quotefont2 centeredquote2">
                    "GROWING A BEARD IS A HABIT,
                    MOST NATURAL SCRIPTURAL,
                    MANLY AND BENEFICIAL."<br/>
                    -C.H. SPURGEON


                </div>
                <div class="quote2font1 Whycentered">
                    WHY BABA BEARD?
                </div>
                <div class="quote2font2 quotecentered2">

                    Our beard oil contains 100% Organic Oils which are free from any harmful chemicals. We
                    have designed a step by step procedure of growing your beard in 3 stages.<br/>
                    ACTIVATE - FILL PATCHES - NOURISH


                </div>
            </div>
    
        </Row>
    
    </Container>
    
   
    <Container fluid className="fullimg">
    
    </Container>
    
    
    
    <Container fluid className="organic">
        <Row>
        <div class="col-lg-12 col-sm-12 col-md-12 organic">
                <img class="organicimg" src={BackgroundBeard}/>
                <div class="quotefont1 centered">
                  100% Organic
                </div>
                <div class="quotefont2 centeredorganic2">
                    The oils used in our products are 100% pure and free from any harmful chemicals. Inorganic
                    materials can cause itchiness and change the color of your beard to white therefore we have
                    refrained from using it in our Beard Oils


                </div>
             
            </div>
        </Row>
    </Container>
    
    
    <Container fluid>
        <Row>
            <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="organicheading"> PRODUCTS </div>
    
            </div>
        </Row>
    </Container>
    
    <Container>
        <Row>
            <div className="col-lg-6 col-sm-12 col-md-6">
                <img className="VariantImg1" src={ActivateVariant}/>
                <div className="Variantbtn1div">
                    <button className="Addtocartbtn">
                        Add to Cart <br/>
    
                        <img className="mustacheAddtoCart" src={MustacheAddToCart} />
                    </button>
    
                </div>
            </div>
    
            <div className="col-lg-6 col-sm-12 col-md-6 Productdiv">
    
             <div className="Variantheading"> Activate</div>
                <div><img className="Variantimg2" src={BeardTexture}/>
    
                    <div className="Variantcontent centered92">
                        <ul>
                            <li> Those who lack beard hair follicles, need a product that can stimulate growth of hair
                                follicles and get absorbed in the skin to facilitate beard growth.</li> <br/>
                            <li>Our Árvore Aquilaria Activating Oil contains Eucalyptus oil which is one of the best
                                oils to accelerate beard growth</li><br/>
                            <li>Stimulating beard Hair follicles and making edges soft by providing power of
                                Rosemary essential Oil.
                            </li><br/>
                            <li>Providing the essence of a fresh hay day to boost your tranquility. </li>
                        </ul>
                  
                    
             
                    </div>
                </div>
             </div>
             
        </Row>
        <Row>
    
            <div className="col-lg-6 col-sm-12 col-md-6 Productfill1div">
    
                <div className="Variantheadingfill"> Fill Patches</div>
                <div><img className="Variantimg1fill" src={BeardTexture}/>
    
                    <div className="Variantcontent centered92">
                        <ul>
                            <li> Grama Fresca Oil for filling patches of beard, helps to make your beard complete by
                                removing patches off your beard.</li> <br/>
                            <li>Having Tea tree Oil, Fill Patches Oil helps to unclog pores, protect facial hair, and
                                stimulate facial hair growth.
                            </li><br/>
                            <li>
                                It feels non-greasy because it has the quality of absorption in your skin rapidly.
                            </li> <br/>
                            <li> Having Calm and peaceful Lavender essence.
                            </li><br/>
                        </ul>
                    </div>
    
                </div>
    
    
            </div>
            <div className="col-lg-6 col-sm-12 col-md-6 Productfill2div">
                <img className="Variantimg2fill" src={FillPatchesVariant}/>
                <div className="Variantbtn2divfill">
                    <button className="Addtocartbtn">
                        Add to Cart <br/>
    
                        <img className="mustacheAddtoCart" src={MustacheAddToCart}/>
                    </button>
    
    
                </div>
            </div>
    
        </Row>
    
    
    
    
        <Row>
            <div className="col-lg-6 col-sm-12 col-md-6">
                <img className="VariantImg1" src={NourishVariant}/>
    
                <div className="Variantbtn1div">
                    <button className="Addtocartbtn">
                        Add to Cart <br/>
    
                        <img className="mustacheAddtoCart" src={MustacheAddToCart}/>
                    </button>
                </div>
            </div>
    
            <div className="col-lg-6 col-sm-12 col-md-6 Productdiv">
                <div className="Variantheading"> Nourish</div>
                <div><img className="Variantimg2" src={BeardTexture}/>
                    <div className="Variantcontent centered92">
                        <ul>
                            <li>To tame the mane you proudly own, you need some whip in the form of Our Sérein
                                épicés Nourishing Oil.
                            </li><br/>
                            <li>Having Jojoba Oil it protects your  eard from sun, prevent moisture and protein loss
                                to make your beard thick.
                            </li><br/>
                            <li>Also contain Sweet Almond’s Oil to maintain the PH Level of skin under the beard
                                and to reduce beard itch and dryness.
                            </li><br/>
                            <li>Having earthy essence can make your beard feel and smell exceptional.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Row>
    
        <Row>
            <div className="col-lg-12 col-sm-12 col-md-12 Howtoapplyheading">
                <div className="Howtoheadingfont1">
                    How to apply
                </div>
            </div>
        </Row>
    </Container>
   
    
    <Container>
        <Row className="justify-content-around applypicsdiv">
            <div className="col-lg-2 col-sm-12 col-md-2 dv11">
                <div className="Howtosubheading">
                    Lorem Ipsum
                </div>
    
            </div>
            <div className="col-lg-2 col-sm-12 col-md-2 dv12">
                <div className="Howtosubheading">
                    Lorem Ipsum
                </div>
    
            </div>
            <div className="col-lg-2 col-sm-12 col-md-2 dv13">
                <div className="Howtosubheading">
                    Lorem Ipsum
                </div>
    
            </div>
            <div className="col-lg-2 col-sm-12 col-md-2 dv14">
                <div className="Howtosubheading">
                    Lorem Ipsum
                </div>
    
            </div>
    
    
        </Row>
        <Row>
            <div className="col-lg-12 col-sm-12 col-md-12 quotefont2 centered72">
                Rub our beard oil in your palm and then apply it on your beard. Massage it properly to evenly
                spread the oil underneath and to increase blood circulation to stimulate hair growth.
    
                The quantity of the oil should be:
                <li>3-6 drops for light or no beard</li>
                <li>10 drops for stubble beard</li>
                <li>20 drops for a fully grown heavy beard </li>
    
            </div>
        </Row>
    
    
    </Container>
   
    
    <Container fluid>
        <Row>
            <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="ingredientfont1">
                    Ingredients
                </div>
            </div>
    
        </Row>
    </Container>
    <Container fluid>
        <Row>
            <div className="col-lg-4 col-sm-12 col-md-4 ActivateIngredient">
                <img className="IngredientImage" src={ActivateVariant}/>
                <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
                    <div className="IngredientTitle">Activate</div>
    
                    <ul className="IngredientDescription">
                        <li> <b><u>Argan Oil</u> </b>: It will make hair soft and shiny, and prevent skin inflammation,
                            acne and flaky
                            skin.</li>
                        <li> <b><u>Jojoba Oil</u></b>: Extremely nourishing to damaged skin and hair, helps to prevent
                            protein and
                            moisture loss in hair, protects against the sun with a thin lipid layer.</li>
                        <li> <b><u>Eucalyptus</u></b>: Stimulates hair follicles and makes edges of hair soft. Gives
                            your beard a
                            pleasant smell.</li>
                        <li> <b><u>Rosemary</u></b>: Gets easily absorbed into your bloodstream and stimulates hair
                            follicles.</li>
                        <li> Other carrier oils and essential oils are used to increase hair growth, stimulate hair
                            follicles
                            and add aroma.</li>
                    </ul>
                 
    
                </div>
    
            </div>
            <div className="col-lg-4 col-sm-12 col-md-4 FillPatchesIngredient">
                <img className="IngredientImage" src={FillPatchesVariant}/>
                <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
                    <div className="IngredientTitle">Fill Patches</div>
    
                    <ul className="IngredientDescription">
                        <li> <b><u>Argan Oil</u> </b>: It will make hair soft and shiny, and prevent skin inflammation,
                            acne and flaky
                            skin.</li>
                        <li> <b><u>Castor Oil</u></b>: seals in moisture to thicken hair, prevent breakage, and split
                            ends. It also has
                            antibacterial, anti-inflammatory and antifungal properties which can detoxify and treat
                            infection while stimulating blood circulation to the skin.</li>
                        <li> <b><u>Rosemary</u></b>: Gets easily absorbed into your bloodstream and stimulates hair
                            follicles.
                        </li>
                        <li> <b><u>Tea Tree</u></b>: Protects facial hair, helps to unclog pores, gives your hair a
                            non-greasy and
                            healthy look</li>
                        <li> Other carrier oils and essential oils are used to increase hair growth, stimulate hair
                            follicles
                            and add aroma.</li>
                    </ul>
                   
    
                </div>
            </div>
    
            <div className="col-lg-4 col-sm-12 col-md-4 NourishIngredient">
                <img className="IngredientImage" src={NourishVariant}/>
                <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
                    <div className="IngredientTitle">Nourish</div>
    
                    <ul className="IngredientDescription">
    
                        <li> <b><u>Jojoba Oil</u></b>: Extremely nourishing to damaged skin and hair, helps to prevent
                            protein and
                            moisture loss in hair, protects against the sun with a thin lipid layer.</li>
                        <li> <b><u>Sweet Almond Oil</u></b>:It helps normalize the pH levels of the skin under the beard
                            and is known
                            for its ability to soothe inflamed skin, preventing beard itch while conditioning hair.
                        </li>
                        <li> <b><u>Peppermint</u></b>: It helps to stimulate better blood flow beneath the skin which
                            brings more
                            nutrients to the hair follicles.
                        </li>
                        <li> <b><u>Lavender</u></b>: It has a calming fragrance and helps to grow hair thicker and
                            faster.
                        </li>
                        <li> Other carrier oils and essential oils are used to increase hair growth, stimulate hair
                            follicles
                            and add aroma.</li>
                    </ul>
                    
    
                </div>
            </div>
    
        </Row>
    </Container>
    
    
    
    
    
    <Container fluid>
        <Row>
            <div className="col-lg-12 col-sm-12 col-md-12 HowtoApply">
                <div className="Howtoheadingfont1">
                    Feedbacks
                </div>
            </div>
        </Row>
    </Container>
    
    <Container fluid>
        <div className="col-lg-12 col-sm-12 col-md-12 Sliderdiv">
            <div id="demo" className="carousel slide" data-ride="carousel">
    
               
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
    
              
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={SlideShowPic1} alt="feeedback" width="1200" height="400"/>
                    </div>
                    <div className="carousel-item">
                        <img src={SlideShowPic2} alt="feeedback" width="1200" height="400"/>
                    </div>
                    <div className="carousel-item">
                        <img src={SlideShowPic3} alt="feeedback" width="1200" height="400"/>
                    </div>
                </div>
    
          
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    
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
     
    );

 }
export default Home;