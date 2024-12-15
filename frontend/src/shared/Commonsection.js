import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./commonsection.css";

const Commonsection = ({title}) => {
  return (
    <section className="common_section">
      <Container>
        <Row>
          <Col lang="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Commonsection;
