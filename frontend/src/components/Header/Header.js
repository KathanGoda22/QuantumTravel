import React, { useRef, useEffect, useContext } from "react";
import { Button, Container, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import SearchBar from "../../shared/SearchBar";
import { ThemeContext } from "../../shared/Theme";
import { motion, useAnimation, useInView } from "framer-motion";
import ReactSwitch from "react-switch";
import { AuthContext } from "./../../context/AuthContext";

const Header = () => {
  const controls = useAnimation();
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const { theme, toggleTheme } = useContext(ThemeContext);
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header
      className={theme === "light" ? "dark-theme" : "light-theme"}
      style={{ position: "relative", width: "", overflow: "hidden" }}
    >
      <motion.section
        className="header"
        ref={elementRef}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Container>
          <Row>
            <div className="nav_wrapper d-flex align-items-center justify-content-between">
              <div className="logo d-flex align-items-center gap-3">
                <h1 className="subtitle">Quantum Travel</h1>

                <div
                  className="navigation d-flex pt-3 gap-3"
                  ref={menuRef}
                  onClick={toggleMenu}
                >
                  <ul className="nav_item">
                    <Link to="/home">Home</Link>
                  </ul>
                  <ul className="nav_item">
                    <Link to="/about">About</Link>
                  </ul>
                  <ul className="nav_item">
                    <Link to="/tours">Tours</Link>
                  </ul>
                </div>
              </div>

              <div className="mobile_menu d-flex align-items-center gap-2" onClick={toggleMenu}>
                <SearchBar />
                <ReactSwitch
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                  className="me-1"
                />
                {user && user ? (
                  <>
                    <h5 className=" pt-3">{user?.username}</h5>
                    <Button className="logout_btn" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <ul className="nav_item pt-3">
                    <Link to="/login">Login</Link>
                  </ul>
                )}
              </div>
            </div>
          </Row>
        </Container>
      </motion.section>
    </header>
  );
};

export default Header;
