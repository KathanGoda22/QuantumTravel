import React, { useEffect, useContext, useRef, useState } from "react";
import Commonsection from "../shared/Commonsection";
import TourCard from "./../shared/ToursCard";
import Newsletter from "./../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";
import { ThemeContext } from "../shared/Theme";
import { useAnimation, useInView } from "framer-motion";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const { theme } = useContext(ThemeContext);

  const controls = useAnimation();
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 6);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <>
      <Commonsection title={"All tours"} />
      <div
        className={theme === "light" ? "dark-theme" : "light-theme"}
        ref={elementRef}
        style={{ position: "relative" }}
      >
        <section
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1.5, delay: 0.9 }}
        ></section>
        <section>
          <Container>
            {loading && <h4 className="text-center pt-5">Loading.......</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && (
              <Row>
                {tours?.map((tour) => (
                  <Col lg="5" key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}

                <Col lg="12">
                  <div className="pagination d-flex align-items-center justify-content-center mt-5 gap-4">
                    {[...Array(pageCount).keys()].map((number) => (
                      <span
                        key={number}
                        onClick={() => setPage(number)}
                        className={page === number ? "active_page" : ""}
                      >
                        {number + 1}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
            )}
          </Container>
        </section>
        <Newsletter />
      </div>
    </>
  );
};

export default Tours;
