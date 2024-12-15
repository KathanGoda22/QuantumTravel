import React from "react";
import "./newsletter.css";
import { Container, Row, Col, Button } from "reactstrap";
import Subtitle from "./../shared/Subtitle";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content ">
              <Subtitle subtitle={"Newsletter"} />
              <h5>Subscribe Now To Get Useful Travelling Information</h5>

              <div className="newsletter_input">
                <input type="email" placeholder="Enter Your Email" />
                <Button className="newsletter_btn">Subscribe</Button>
              </div>
              <p>
                Our newsletter delivers valuable content straight to your inbox,
                including informative articles, special promotions, and insider
                tips. Sign up now to stay informed and connected!"
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
