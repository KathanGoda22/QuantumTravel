import React, { useContext, useState, useEffect, useRef } from "react";
import "./login.css";
import { Container, Row, Col, FormGroup, Button, Form } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { ThemeContext } from "../shared/Theme";
import { motion, useAnimation, useInView } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
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

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/Login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      //console.log(result.data);

      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      navigate("/");
      
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
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
                  <img src={loginImg} alt="" />
                </div>
                <div className="login_form">
                  <div className="user">
                    <img src={userIcon} alt="" />
                  </div>
                  <h2>Login</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup className="login_input">
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
                      Login
                    </Button>
                  </Form>
                  <p>
                    Don't Have An Account? <Link to="/register">Create</Link>
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

export default Login;
