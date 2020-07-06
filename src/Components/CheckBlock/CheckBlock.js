import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./CheckBlock.css";

function CheckBlock(props) {
  const [selectedAnswer, setAnswer] = useState("");

  return (
    <>
      <div className="checkBlock">
        {props.text}
        {props.media && (
          <Zoom style={{ cursor: "zoom-in" }}>{props.media}</Zoom>
        )}
        <div className="answers">
          <ListGroup>
            {props.answers.map((answer, i) => (
              <ListGroup.Item
                key={i}
                onClick={() => setAnswer(answer)}
                active={selectedAnswer === answer}
              >
                {answer}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="text-center">
          <Button type="submit" className="submit" variant="secondary">
            submit
          </Button>
        </div>
      </div>
    </>
  );
}

CheckBlock.propTypes = {
  text: PropTypes.element.isRequired,
  media: PropTypes.element,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswer: PropTypes.number.isRequired,
};

export default CheckBlock;
