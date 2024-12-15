import React, { useState, useContext } from "react";
import CommonSection from "./../shared/Commonsection";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import ToursCard from "./../shared/ToursCard";
import Newsletter from "./../shared/Newsletter";
import { ThemeContext } from "../shared/Theme";

const SearchResultList = () => {

  const { theme } = useContext(ThemeContext);

  const location = useLocation();

  const [data] = useState(location.state);
  return (
    <>
      <CommonSection title={"Tour Search Result"} />
        <section className={theme === "light" ? "dark-theme" : "light-theme"}>
          <Container>
            <Row>
              {data.length === 0 ? (
                <h4 className="text-center">No Tour Found</h4>
              ) : (
                data?.map((tour) => (
                  <Col lg="6" key={tour._id}>
                    <ToursCard tour={tour} />
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </section>
      <Newsletter />
    </>
  );
};

export default SearchResultList;
