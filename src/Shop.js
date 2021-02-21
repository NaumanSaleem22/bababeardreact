import React, { useState } from "react";
import { Container, Col, Row, Modal } from "react-bootstrap";
import "./Style/Shop.css";
import "./Style/Home.css";
import SilverLogo from "./Content/PNG/SilverLogo.png";
import NavbarLogo from "./Content/PNG/Silver.png";
import LoginAvatar from "./Content/PNG/loginavatar.png";
import SocialMediaLogo1 from "./Content/PNG/FacebookLogo.png";
import SocialMediaLogo2 from "./Content/PNG/InstaLogo.png";
import SocialMediaLogo3 from "./Content/PNG/TwitterLogo.png";
import ActivateVariant from "./Content/PNG/ActivateW.R..png";
import FillPatchesVariant from "./Content/PNG/FillPatchesW.R..png";
import NourishVariant from "./Content/PNG/ActivateW.R..png";

function Shop() {
  const [activate, setActivate] = useState(false);
  const [fillpatches, setFillPatches] = useState(false);
  const [nourish, setNourish] = useState(false);
  return (
    <div>
      <Container>
        <div className="dvshop1">Beard Oil Variants</div>
        <hr />
      </Container>
      <Container fluid>
        <Row>
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="IngredientTitle">Products</div>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <div className="col-lg-4 col-sm-12 col-md-4 dvshoping1">
            <div className="dvshopfont1">Activate - Arvore Aquilaria </div>
            <img className="dv9shopingimg1" src={ActivateVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="dv9imgshopdescription">
                <button className="btnshop1" onClick={() => setActivate(true)}>
                  Quick View <br />
                  <i className="fa fa-eye"></i>
                </button>
              </div>
            </div>
            <Modal
              size="lg"
              show={activate}
              onHide={() => setActivate(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                Activate - Beard Oil
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="row">
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className="dv9shopingimg1" src={ActivateVariant} />
                      </div>
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="fontproduct">Activate - Beard Oil</div>
                        <hr />
                        <div className="fontprice">Rs 799.00</div>
                        <hr />
                        <div>
                        Those who lack beard hair follicles, need a product that can stimulate growth of hair
                                            follicles and get absorbed in the skin to facilitate beard growth.
                                       <br/>     Our Arvore aquilaria Activating Oil contains Eucalyptus oil which is one of the best
                                            oils to accelerate beard growth and
                        </div>
                        <hr />
                        <div>
                          <a href="#">View Full Details</a>
                        </div>
                      </div>
                    </div>
              </Modal.Body>
            </Modal>
            
          </div>
          <div className="col-lg-4 col-sm-12 col-md-4 dvshoping2">
            <div className="dvshopfont1">Fill Patches - Grama Fresca</div>
            <img className="dv9shopingimg1" src={FillPatchesVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="dv9imgshopdescription">
                <button
                  className="btnshop1"
                  data-toggle="modal"
                  data-target="#fillpatches"
                  onClick={() => setFillPatches(true)} 
                >
                  Quick View <br /> <i className="fa fa-eye"></i>
                </button>
              </div>
            </div>
          </div>
          <Modal
              size="lg"
              show={fillpatches}
              onHide={() => setFillPatches(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                Fill Patches - Grama Fresca
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="row">
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <img className="dv9shopingimg1" src={fillpatches} />
                      </div>
                      <div className="col-lg-6 col-sm-12 col-md-6">
                        <div className="fontproduct">Fill Patches - Grama Fresca</div>
                        <hr />
                        <div className="fontprice">Rs 799.00</div>
                        <hr />
                        <div>
                        Grama Fresca Oil for filling patches of beard, helps to make your beard complete by
                                            removing patches off your beard.
                                            <br/>Having Tea tree Oil, Fill patches Oil helps to unclog pores, protect facial hair, and
                                            stimulate facial hair growth by absorbing in skin fastly.
                        </div>
                        <hr />
                        <div>
                          <a href="#">View Full Details</a>
                        </div>
                      </div>
                    </div>
              </Modal.Body>
            </Modal>
          
         

          <div className="col-lg-4 col-sm-12 col-md-4 dvshoping3">
            <div className="dvshopfont1">Nourish - Grama Fresca</div>
            <img className="dv9shopingimg1" src={NourishVariant} />
            <div className="Ingredientimgoverlay Ingredientimgoverlay--blur">
              <div className="dv9imgshopdescription">
                <button
                  className="btnshop1"
                  data-toggle="modal"
                  data-target="#nourish"
                  onClick={() => setNourish(true)}
                >
                  {" "}
                  Quick View <br /> <i className="fa fa-eye"></i>
                </button>
              </div>
            </div>
          </div>
          <Modal
              size="lg"
              show={nourish}
              onHide={() => setNourish(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                Fill Patches - Grama Fresca
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Row>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                      <img className="dv9shopingimg1" src={NourishVariant} />
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">
                      <div className="fontproduct">Nourish - Beard Oil</div>
                      <hr />
                      <div className="fontprice">Rs 799.00</div>
                      <hr />
                      <div>
                      To tame the mane you proudly own, you need some whip in the form of Our Serein
                                            epic Nourishing Oil.
                                            
                      </div>
                      <hr />
                      <div>
                        <a href="#">View Full Details</a>
                      </div>
                    </div>
                  </Row>
              </Modal.Body>
            </Modal>
          
          <div className="modal fade dvmodal" id="nourish">
            <div className="modal-dialog  modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-body">
                 
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
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
              <p className="footerlogo">
                {" "}
                <a href="#">
                  {" "}
                  <img className="footerlogopic" src={SilverLogo} />
                </a>
                BabaBeard<strong>BB</strong>{" "}
              </p>
            </div>
            <div className="footer1content">
              BabaBeard is a private beard oil company that manufacture 100%
              organic beard oil.
            </div>
            <div>
              <a href="www.facebook.com/bababeardco">
                {" "}
                <img src={SocialMediaLogo1} width="50px" height="50px" />{" "}
              </a>
              <a href="www.instagram.com/bababeardco">
                {" "}
                <img src={SocialMediaLogo2} width="40px" height="40px" />{" "}
              </a>
              <a href="www.twitter.com/bababeardco">
                {" "}
                <img src={SocialMediaLogo3} width="40px" height="40px" />{" "}
              </a>
            </div>
            <div>
              Got any query?
              <br /> Send us an email on{" "}
              <a href="support@bababeard.com">support@bababeard.com</a>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-md-2 Footer2">
            <div className="footer2content1">Product</div>
            <div className="footer2content2">
              <p>
                {" "}
                <a className="linktag" href="RewardPolicy.html">
                  {" "}
                  Reward Policy
                </a>
              </p>
              <p>
                {" "}
                <a className="linktag" href="ReplacingPolicy.html">
                  Replacing Policy{" "}
                </a>
              </p>
              <p>
                {" "}
                <a className="linktag" href="RefundPolicy.html">
                  {" "}
                  Refund Policy
                </a>
              </p>

              <p>
                {" "}
                <a className="linktag" href="Blogs.html">
                  Blogs{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-md-2 Footer3">
            <div className="footer2content1">Engage</div>
            <div className="footer3content1">
              <p>
                {" "}
                <a className="linktag" href="landingpageBB.html">
                  BabaBeard
                </a>{" "}
              </p>
              <p>
                {" "}
                <a className="linktag" href="FAQS.html">
                  {" "}
                  FAQS
                </a>
              </p>
              <p>
                {" "}
                <a className="linktag" href="RewardPolicy.html">
                  {" "}
                  Rewards
                </a>
              </p>
              <p>
                {" "}
                <a className="linktag" href="About.html">
                  {" "}
                  About Us
                </a>
              </p>
              <p>
                {" "}
                <a className="linktag" href="PrivacyPolicy.html">
                  {" "}
                  Privacy Policy
                </a>
              </p>
              <p>
                {" "}
                <a className="linktag" href="Terms.html">
                  {" "}
                  Terms of Service{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12 col-md-2 Footer4">
            <div className="footer2content1">Contact</div>
            <div className="footer3content1">
              <p>
                <a className="linktag" href="contactus.html">
                  {" "}
                  Contact us{" "}
                </a>{" "}
              </p>
            </div>
          </div>
        </Row>
      </Container>



      
    </div>
  );
}

export default Shop;
