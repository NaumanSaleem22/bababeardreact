import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import './Style/Ingredients.css';
import './Style/Home.css';
import SilverLogo from './Content/PNG/SilverLogo.png';
import NavbarLogo from './Content/PNG/Silver.png';
import LoginAvatar from './Content/PNG/loginavatar.png';
import SocialMediaLogo1 from './Content/PNG/FacebookLogo.png';
import SocialMediaLogo2 from './Content/PNG/InstaLogo.png';
import SocialMediaLogo3 from './Content/PNG/TwitterLogo.png';
import ActivateVariant from './Content/PNG/ActivateW.R..png';
import FillPatchesVariant from './Content/PNG/FillPatchesW.R..png';
import NourishVariant from './Content/PNG/ActivateW.R..png';
import ArganOil from './Content/PNG/Oil/argan.png';
import CastorOil from './Content/PNG/Oil/castor_oil.png';
import Eucalyptus from './Content/PNG/Oil/eucalyptus.png';
import JojobaOil from './Content/PNG/Oil/jojoba_oil.png';
import Lavender from './Content/PNG/Oil/lavendar.png';
import Peppermint from './Content/PNG/Oil/peppermint_oil_.png';
import Rosemary from './Content/PNG/Oil/rosemary_oil_seed.png';
import SweetAlmond from './Content/PNG/Oil/sweet_almond_oil.png';
import TeaTree from './Content/PNG/Oil/teatree.png';

function Ingredients(){
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







<Container className="ingredienthead">


    <div className="IngredientMainHeading" >
        <h2>Ingredients</h2>
        <p>Click on the boxes below:</p>
    </div>
</Container>
 
<Container>
    <Row>

        <div className="col-lg-4 col-sm-12 col-md-4">
        <div>
         <img className="ingimage1" src={ActivateVariant}/>
           <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
                        <div className="IngredientTitle">Activate</div>
                        <div className="divbtning IngredientDescription">
 
                                <button className="btnshop1" data-toggle="modal" data-target="#activate">Quick View <br/> <i
                                        className="fa fa-eye"></i> </button>
                        
        
                        </div>

                    </div>
                </div>


        </div>


        <div className="modal fade dvmodal" id="activate">
                <div className="modal-dialog  modal-dialog-centered modal-xl">
                    <div className="modal-content">
        
                      
                        <div className="modal-body">
                            <div className="row">
                                <div className="MainTitle"> Activate
        
                                </div>
                        <div className="container">
        
        
                            <div className="row justify-content-around">
                                <div className="col-lg-6 col-sm-12 col-md-4 act1">
                                    <p className="Title">Argan Oil </p>
                                    <p className="Description">It will make hair soft and shiny, and prevent skin inflammation,
                                        acne and flaky</p>
                                </div>
                                <div className="col-lg-4 col-sm-6 col-md-4 act2">
                                    <img className="ArganOilImg" src={ArganOil}/>
                                </div>
                            </div>
        
        
                            <div className="row justify-content-around">
                                <div className="col-lg-6 col-sm-12 col-md-4 act1">
                                    <p className="Title">Jojoba Oil</p>
                                    <p className="Description">Extremely nourishing to damaged skin and hair, helps to prevent
                                        protein and moisture loss in hair, protects against the sun with a thin lipid layer.</p>
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-4 act2">
                                    <img className="JojobaOil" src={JojobaOil}/>
                                </div>
                            </div>
        
                            <div className="row justify-content-around">
                                <div className="col-lg-6 col-sm-12 col-md-4 act1">
                                    <p className="Title">Eucalyptus</p>
                                    <p className="Description">Stimulates hair follicles and makes edges of hair soft. Gives
                                        your beard a
                                        pleasant smell.</p>
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-4 act2">
                                    <img className="EucalyptusImg" src={Eucalyptus}/>
                                </div>
                            </div>
        
                            <div className="row justify-content-around">
                                <div className="col-lg-6 col-sm-12 col-md-4 act1">
                                    <p className="Title">Rosemary</p>
                                    <p className="Description">
                                        Gets easily absorbed into your bloodstream and stimulates hair
                                        follicles.
                                    </p>
                                </div>
                                <div className="col-lg-4 col-sm-12 col-md-4 act2">
                                    <img className="RosemaryImg" src={Rosemary}/>
                                </div>
                            </div>
        
        
        
                        </div>
        
                            </div>
        
                        </div>
        
                       
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
        
                    </div>
                </div>
            </div>
        








     <div className="col-lg-4 col-sm-12 col-md-4" >
        <div>
                    <img className="ingimage1" src={FillPatchesVariant}/>
                    <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
                        <div className="IngredientTitle">Fill Patches</div>

                        <div className="divbtning IngredientDescription">

                            <button className="btnshop1" data-toggle="modal" data-target="#Fillpatches">Quick View <br/> <i
                                className="fa fa-eye"></i> </button>
                

                        </div>


                    </div>
         </div>
     </div>


     <div className="modal fade dvmodal" id="Fillpatches">
                <div className="modal-dialog  modal-dialog-centered modal-xl">
                    <div className="modal-content">
        
                     
                        
                        <div className="modal-body">
                            <div className="row">
                                <div className="MainTitle"> Fill Patches
        
                                </div>
                    
                            <div className="container">
            
            
                                <div className="row justify-content-around">
                                    <div className="col-lg-6 col-sm-6 col-md-4 act1">
                                        <p className="Title">Argan Oil </p>
                                        <p className="Description">It will make hair soft and shiny, and prevent skin inflammation,
                                            acne and flaky</p>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-md-4 act2">
                                        <img className="ArganOilImg" src={ArganOil}/>
                                    </div>
                                </div>
            
            
                                <div className="row justify-content-around">
                                    <div className="col-lg-6 col-sm-6 col-md-4 act1">
                                        <p className="Title">Castor Oil</p>
                                        <p className="Description">Seals in moisture to thicken hair, prevent breakage, and split
                                            ends. It also has
                                            antibacterial, anti-inflammatory and antifungal properties which can detoxify and treat
                                            infection while stimulating blood circulation to the skin.</p>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-md-4 act2">
                                        <img className="CastorOil" src={CastorOil}/>
                                    </div>
                                </div>
            
            
            
                                <div className="row justify-content-around">
                                    <div className="col-lg-6 col-sm-6 col-md-4 act1">
                                        <p className="Title">Rosemary</p>
                                        <p className="Description">
                                            Gets easily absorbed into your bloodstream and stimulates hair
                                            follicles.
                                        </p>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-md-4 act2">
                                        <img className="RosemaryImg" src={Rosemary}/>
                                    </div>
                                </div>
            
                                <div className="row justify-content-around">
                                    <div className="col-lg-6 col-sm-6 col-md-4 act1">
                                        <p className="Title">Tea Tree</p>
                                        <p className="Description">
                                            Protects facial hair, helps to unclog pores, gives your hair a
                                            non-greasy and
                                            healthy look.
                                        </p>
                                    </div>
                                    <div className="col-lg-4 col-sm-6 col-md-4 act2">
                                        <img className="TeatreeImg" src={TeaTree}/>
                                    </div>
                                </div>
            
            
            
            
            
                            </div>
        
                            </div>
        
                        </div>
         
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
        
                    </div>
                </div>
            </div>










        <div className="col-lg-4 col-sm-12 col-md-4">
        <div>
                    <img className="ingimage1" src={NourishVariant}/>
                    <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
                        <div className="IngredientTitle">Nourish</div>
                        <div className="divbtning IngredientDescription">

                            <button className="btnshop1" data-toggle="modal" data-target="#Nourish">Quick View <br/> <i
                                className="fa fa-eye"></i> </button>

                        </div>

                    </div>

                </div>
        </div>

        
        <div className="modal fade dvmodal" id="Nourish">
                <div className="modal-dialog  modal-dialog-centered modal-xl">
                    <div className="modal-content">
        
                     
                     
                        <div className="modal-body">
                            <div className="row">
                                <div className="container">


                                    <div className="row justify-content-around">
                                        <div className="col-lg-6 col-sm-6 col-md-4 act1">
                                            <p className="Title">Jojoba Oil</p>
                                            <p className="Description">Extremely nourishing to damaged skin and hair, helps to prevent
                                                protein and moisture loss in hair, protects against the sun with a thin lipid layer.</p>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4 act2">
                                            <img className="JojobaOil" src={JojobaOil}/>
                                        </div>
                                    </div>
                    
                                    <div className="row justify-content-around">
                                        <div className="col-lg-6 col-sm-6 col-md-4 act1">
                                            <p className="Title">Sweet Almond Oil </p>
                                            <p className="Description">It helps normalize the pH levels of the skin under the beard
                                                and is known
                                                for its ability to soothe inflamed skin, preventing beard itch while conditioning hair.</p>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4 act2">
                                            <img className="SweetAlmondOil" src={SweetAlmond}/>
                                        </div>
                                    </div>
                    
                    
                    
                    
                    
                                    <div className="row justify-content-around">
                                        <div className="col-lg-6 col-sm-6 col-md-4 act1">
                                            <p className="Title">Peppermint</p>
                                            <p className="Description"> It helps to stimulate better blood flow beneath the skin which
                                                brings more
                                                nutrients to the hair follicles.</p>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4 act2">
                                            <img className="PeppermintImg" src={Peppermint}/>
                                        </div>
                                    </div>
                    
                                    <div className="row justify-content-around">
                                        <div className="col-lg-6 col-sm-6 col-md-4 act1">
                                            <p className="Title">Lavender</p>
                                            <p className="Description">
                                                It has a calming fragrance and helps to grow hair thicker and
                                                faster.
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 col-md-4 act2">
                                            <img className="LavenderImg" src={Lavender}/>
                                        </div>
                                    </div>
                    
                    
                    
                                </div>
            
            
            
                            </div>
        
                            
        
                        </div>
        
                         
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
        
                    </div>
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

    export default Ingredients;