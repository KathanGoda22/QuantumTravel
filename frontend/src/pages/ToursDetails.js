import React, { useEffect, useRef, useContext, useState } from "react";
import { Container, Row, Col, Form, ListGroup, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import "./toursdetails.css";
import avatar from "../assets/images/avatar.jpg";
import calculateAvgRating from "../utils/avgRating";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";
import { ThemeContext } from "../shared/Theme";
import { motion, useAnimation, useInView } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "./../context/AuthContext";

const ToursDetails = () => {
  const { theme } = useContext(ThemeContext);

  const controls = useAnimation();
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const { id } = useParams();

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    title = '',
    country = '',
    address = '',
    distance = '',
    price = 0,
    maxGroupSize = 0,
    desc = '',
    reviews = [],
    photo = '',
    featured = '',
  } = tours || {};

  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const reviewsMsgRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewsMsgRef.current.value;

    try {
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tours]);

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
            {loading && <h4 className="text-center pt-5">Loading.......</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && (
              <Row>
                <Col lg="8">
                  <div className="tour_content">
                    <img src={photo} alt="" />
                    <div className="tour_info">
                      <div className="d-flex align-items-center justify-content-between ">
                        <h2>{title}</h2>
                        <span className="tour_rating d-flex align-items-center gap-1">
                          <i
                            className="ri-star-fill"
                            style={{ color: "var(--secondary-color)" }}
                          ></i>
                          {avgRating === 0 ? null : avgRating}
                          {totalRating === 0 ? (
                            "Not Rated"
                          ) : (
                            <span>({reviews?.length})</span>
                          )}
                          {featured}
                        </span>
                      </div>
                      <div className="tour_details-extra">
                        <span>
                          <i className="ri-map-pin-user-fill"></i>
                          {country}
                        </span>
                        <span>
                          <i className="ri-map-pin-user-fill"></i>
                          {address}
                        </span>
                        <span>
                          <i className="ri-money-dollar-circle-line"></i>$
                          {price}
                          /per person
                        </span>
                        <span>
                          <i className="ri-pin-distance-line"></i>
                          {distance} k/m
                        </span>
                        <span>
                          <i className="ri-group-line"></i>
                          {maxGroupSize}
                        </span>
                      </div>
                      <h5>Description</h5>
                      <p>{desc}</p>
                    </div>

                    <div className="tour_reviews mt-4">
                      <h4>Reviews({reviews?.length}reviews)</h4>
                      <Form onSubmit={submitHandler}>
                        <div className="rating_group d-flex align-items-center gap-3 mb-3">
                          <span onClick={() => setTourRating(1)}>
                            <i className="ri-star-line"></i>
                          </span>
                          <span onClick={() => setTourRating(2)}>
                            <i className="ri-star-line"></i>
                          </span>
                          <span onClick={() => setTourRating(3)}>
                            <i className="ri-star-line"></i>
                          </span>
                          <span onClick={() => setTourRating(4)}>
                            <i className="ri-star-line"></i>
                          </span>
                          <span onClick={() => setTourRating(5)}>
                            <i className="ri-star-line"></i>
                          </span>
                        </div>

                        <div className="review_input gap-3">
                          <input
                            type="text"
                            ref={reviewsMsgRef}
                            placeholder="share your thoughts"
                            required
                          />
                          <Button className="review_submit" type="submit">
                            Submit
                          </Button>
                        </div>

                        <ListGroup className="user_reviews">
                          {reviews?.map((review) => (
                            <div className="review_item">
                              <img src={avatar} alt="" />

                              <div className="w-100">
                                <div className="d-flex align-items-center justify-content-between">
                                  <div>
                                    <h5>{review.username}</h5>
                                    <p>
                                      {new Date(
                                        review.createdAt
                                      ).toLocaleDateString("en-US", options)}
                                    </p>
                                  </div>
                                  <span className="d-flex align-items-center">
                                    {review.rating}
                                    <i className="ri-star-s-fill"></i>
                                  </span>
                                </div>
                                <h6>{review.reviewText}</h6>
                              </div>
                            </div>
                          ))}
                        </ListGroup>
                      </Form>
                    </div>
                  </div>
                </Col>
                <Col lg="4">
                  <Booking tour={tours} avgRating={avgRating} />
                </Col>
              </Row>
            )}
          </Container>
        </motion.section>
        <Newsletter />
      </div>
    </>
  );
};

export default ToursDetails;
