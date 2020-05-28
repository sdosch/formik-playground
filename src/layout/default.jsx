import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Default = ({ headline, description, content }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>{headline}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{description}</p>
        </Col>
      </Row>
      {content}
    </Container>
  );
};

export default Default;
