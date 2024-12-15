import React, { useContext, useEffect, useRef } from "react";
import "./about.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { ThemeContext } from "../shared/Theme";
import Commonsection from "../shared/Commonsection";

const About = () => {
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
      <Commonsection title={"About us"} />
      <section
        className={theme === "light" ? "dark-theme" : "light-theme"}
        ref={elementRef}
        style={{ position: "relative" }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5, delay: 0.9 }}
        >
          <p className="about_us">
            Founded in 2024 in India, Quantum Travel has grown from a small
            Indian start-up to one of the world’s leading digital travel
            companies. Quantum Travel’s mission is to make it easier for
            everyone to experience the world. By investing in technology that
            takes the friction out of travel, Quantum Travel seamlessly connects
            millions of travelers to memorable experiences, a variety of
            transportation options, and incredible places to stay – from homes
            to hotels, and much more. As one of the world’s largest travel
            marketplaces for both established brands and entrepreneurs of all
            sizes, Booking.com enables properties around the world to reach a
            global audience and grow their businesses.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default About;
