import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./tourscard.css";
import { ThemeContext } from "../shared/Theme";
import calculateAvgRating from "../utils/avgRating";

const ToursCard = ({ tour }) => {
  const { _id, title, country, photo, price, reviews } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "dark-theme" : "light-theme"}>
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
      >
        <motion.img layout="position" src={photo} alt="" />
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            className="expand"
          >
            <div className="d-flex justify-content-between">
              <div className="tour_city">
                <i className="ri-map-pin-line city"></i> {country}
              </div>
              <div className="tour_rating">
                <i className="ri-star-fill"></i>
                {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                  "not rated"
                ) : (
                  <span>({reviews?.length})</span>
                )}
              </div>
            </div>
            <div className="tour_price">
              <Link to={`/tours/${_id}`}>{title}</Link>
              <br />
              <span>${price}/per person</span>
              <br />
              <Button className="booking_btn">
                <Link to={`/tours/${_id}`}>Book Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ToursCard;
