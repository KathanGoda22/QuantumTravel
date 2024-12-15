import React, { useEffect, useContext, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import "./home.css";
import { motion, useAnimation, useInView } from "framer-motion";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import expreienceImg from "../assets/images/experience.png";

import Subtitle from "./../shared/Subtitle";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Testimonails from "../components/Testimonial/Testimonails";
import Newsletter from "../shared/Newsletter";
import ServicesCard from "../shared/ServicesCard";
import { ThemeContext } from "../shared/Theme";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const controls = useAnimation();
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <>
      <div
        className={theme === "light" ? "dark-theme" : "light-theme"}
        ref={elementRef}
        style={{ position: "relative" }}
      >
        <motion.section
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5, delay: 0.9 }}
        >
          <Container>
            <Row>
              <Col lg="6">
                <div className="hero_content">
                  <div className="hero_subtitle d-flex">
                    <h5 className="service_subtitle">Know Before You Go</h5>
                    <img src={worldImg} alt="" />
                  </div>
                  <h1>
                    Travelling Opens The Door To Creating
                    <span className="highlight"> Memories</span>
                  </h1>
                  <p>
                    A Dream Stay For Your Bucket List Trips. Make A Trip To
                    Remember In A Vacation Home.
                  </p>
                </div>
              </Col>

              <Col lg="2">
                <div className="hero_img-box">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero_img-box mt-5">
                  <video src={heroVideo} alt="" autoPlay muted loop />
                </div>
              </Col>
              <Col lg="2">
                <div className="hero_img-box">
                  <img src={heroImg02} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </motion.section>

        <section>
          <Container>
            <Row>
              <Col>
                <h5 className="service_subtitle">Offers</h5>
                <h2 className="service_title">
                  Promotions, Deals, And Special Offers For You
                </h2>
              </Col>
              <ServicesCard />
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg-="3">
                <Subtitle subtitle={"Explore"} />
                <h2 className="featured_tour-title">Our Featured Tours</h2>
              </Col>

              <FeaturedTourList />
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="6">
                <div className="exp_content">
                  <Subtitle subtitle={"Expreience"} />
                  <h2>
                    With Our All Experience <br /> We Will Serve You
                  </h2>
                </div>
                <div className="counter_wrapper d-flex align-items-center gap-5">
                  <div className="counter_box">
                    <span>12k+</span>
                    <h6>Successfull Trip</h6>
                  </div>
                  <div className="counter_box">
                    <span>2k+</span>
                    <h6>Regular Clients</h6>
                  </div>
                  <div className="counter_box">
                    <span>15</span>
                    <h6>Years Experience</h6>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="exp_img">
                  <img src={expreienceImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row>
              <Col lg="12">
                <Subtitle subtitle={"Fans Love"} />
                <h2 className="test_title">What Our Fans Say About Us</h2>
              </Col>
              <Col lg="12">
                <Testimonails />
              </Col>
            </Row>
          </Container>
        </section>

        <Newsletter />
      </div>
    </>
  );
};

export default Home;
