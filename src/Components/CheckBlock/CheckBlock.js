import React, { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./CheckBlock.css";

function CheckBlock(props) {
  const [selectedAnswer, setAnswer] = useState("");
  const [quizOver, setQuizState] = useState(false);

  const onSubmit = () => {
    setQuizState(true);
  };

  const setAnswerStyles = (answerIndex, correctAnswerIndex) => {
    const styles = {
      backgroundColor: "#fff",
      border: "none",
    };

    if (answerIndex === selectedAnswer) {
      styles.border = "2px solid #000";
    }

    if (quizOver) {
      if (answerIndex === correctAnswerIndex) {
        styles.backgroundColor = "#b1ffb1";
      } else {
        styles.backgroundColor = "#ffc4c4";
      }
    }

    return styles;
  };

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
                onClick={() => setAnswer(i)}
                active={!quizOver && selectedAnswer === i}
                style={quizOver ? setAnswerStyles(i, props.correctAnswer) : {}}
              >
                {answer}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="text-center">
          <Button className="submit" variant="secondary" onClick={onSubmit}>
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
