import React, { useContext, useState, useEffect, useRef } from "react";
import "./login.css";
import { Container, Row, Col, FormGroup, Button, Form } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { ThemeContext } from "../shared/Theme";
import { motion, useAnimation, useInView } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {
  const { theme } = useContext(ThemeContext);

  const controls = useAnimation();
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
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
            <Col lg="9">
              <div className="login_container d-flex justify-content-between">
                <div className="login_img">
                  <img src={registerImg} alt="" />
                </div>
                <div className="login_form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Register</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup className="login_input">
                      <input
                        type="text"
                        placeholder="username"
                        required
                        id="username"
                        onChange={handleChange}
                      />
                      <input
                        type="email"
                        placeholder="email"
                        required
                        id="email"
                        onChange={handleChange}
                      />
                      <input
                        type="password"
                        placeholder="password"
                        required
                        id="password"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <Button
                      className="btn secondary_btn auth_btn"
                      type="submit"
                    >
                      Create Account
                    </Button>
                  </Form>
                  <p>
                    Already Have An Account? <Link to="/Login">Login</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.section>
    </div>
  );
};

export default Register;
