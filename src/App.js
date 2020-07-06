import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CheckBlock from "./Components/CheckBlock";
import mockData from "./mock-data/mock-data";

function App() {
  return (
    <Container style={{ padding: "2rem" }}>
      <h1>Knowledge Check Block</h1>
      <Row style={{ padding: "1rem 0 1rem 0" }}>
        <Col lg={4} style={{ margin: "1rem 0" }}>
          <CheckBlock
            text={<p>{mockData[0].text}</p>}
            media={mockData[0].media}
            mediaType={mockData[0].mediaType}
            answers={mockData[0].answers}
            correctAnswer={mockData[0].correctAnswer}
            message={mockData[0].message}
          />
        </Col>

        <Col lg={4} style={{ margin: "1rem 0" }}>
          <CheckBlock
            text={<p>{mockData[1].text}</p>}
            media={mockData[1].media}
            mediaType={mockData[1].mediaType}
            answers={mockData[1].answers}
            correctAnswer={mockData[1].correctAnswer}
            message={mockData[1].message}
          />
        </Col>

        <Col lg={4} style={{ margin: "1rem 0" }}>
          <CheckBlock
            text={<p>{mockData[2].text}</p>}
            answers={mockData[2].answers}
            correctAnswer={mockData[2].correctAnswer}
            message={mockData[2].message}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
