import React, { useEffect, useRef, useContext } from "react";
import "./thankyou.css";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { ThemeContext } from "../shared/Theme";

const Thankyou = () => {
  const controls = useAnimation();
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const { theme } = useContext(ThemeContext);

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
              <Col lg="12" className="pt-5 text-center">
                <div className="thank_you">
                  <span>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  <h1 className="mb-3 fw-semibold">Thank You</h1>
                  <h3 className="mb-4">Your Tour Is Booked</h3>
                  <Button className="thank w-25">
                    <Link to="/home">Back To Home</Link>
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </motion.section>
      </div>
    </>
  );
};

export default Thankyou;
