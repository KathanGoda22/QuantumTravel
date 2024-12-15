import React, { useContext } from "react";
import "./footer.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../shared/Theme";

const Footer = () => {
  const year = new Date().getFullYear();

  const { theme } = useContext(ThemeContext);

  return (
    <footer className={theme === "light" ? "dark-theme" : "light-theme"}>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="12">
              <div className="logo">
                <h1 className="subtitle">Quantum Travel</h1>
                <p>
                  Adventure Is Worthwhile, Discover New Places With Us.
                </p>

                <div className="social_links d-flex  align-items-center gap-4">
                  <span>
                    <i className="ri-instagram-fill"></i>
                  </span>
                  <span>
                    <i className="ri-facebook-box-fill"></i>
                  </span>
                  <span>
                    <i className="ri-youtube-fill"></i>
                  </span>
                  <span>
                    <i className="ri-github-fill"></i>
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="3">
              <h5 className="footer_links-title">Discover</h5>
              <div className="navigation">
                <ul className="foot_item">
                  <Link to="/home">Home</Link>
                </ul>
                <ul className="foot_item">
                  <Link to="/about">About</Link>
                </ul>
                <ul className="foot_item">
                  <Link to="/tours">Tours</Link>
                </ul>
              </div>
            </Col>
            <Col lg="3">
              <h5 className="footer_links-title">Quick Links</h5>
              <div className="navigation">
                <ul className="foot_item">
                  <Link to="/Newsletter">Newsletter</Link>
                </ul>
                <ul className="foot_item">
                  <Link to="/login">Login</Link>
                </ul>
                <ul className="foot_item">
                  <Link to="/register">Register</Link>
                </ul>
              </div>
            </Col>
            <Col lg="3">
              <h5 className="footer_links-title">More</h5>
              <div className="gene">
                <div className="d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:<p className="mb-0">Sylhet, Banglore</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:<p className="mb-0">kathangoda123@gmail.com</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  Phone:<p className="mb-0">+1234567890</p>
                </div>
              </div>
            </Col>
            <Col lg="12" className="text-center pt-5">
              <p className="cp">
                Copyright {year}, Designed and Developed by Kathan Goda
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
