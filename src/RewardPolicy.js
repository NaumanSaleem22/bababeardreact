import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
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

 

<Container>
        <Row>
            <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="bannertext2">
        BabaBeard - Reward Policy

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



            </div>

    )};

    export default RewardPolicy;