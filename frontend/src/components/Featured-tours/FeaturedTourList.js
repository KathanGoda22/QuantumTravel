import React from "react";
import ToursCard from "../../shared/ToursCard";
import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  return (
    <>
    {loading && <h4>Loading.......</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
      featuredTours?.map(tour => (
        <Col lg="4" className="mb-4" key={tour._id}>
          <ToursCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
