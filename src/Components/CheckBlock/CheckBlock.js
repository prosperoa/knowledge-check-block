import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListGroup, Button, Collapse, Fade } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./CheckBlock.css";

function CheckBlock(props) {
  const [selectedAnswer, setAnswer] = useState(null);
  const [quizOver, setQuizOver] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const getClassName = (answerIndex, correctAnswerIndex) => {
    let className = "";

    if (quizOver) {
      if (answerIndex === selectedAnswer) {
        className += "selected";
      }

      if (answerIndex === correctAnswerIndex) {
        className += " correct";
      } else {
        className += " incorrect";
      }
    }

    return className;
  };

  const onTakeQuizAgain = () => {
    setQuizOver(false);
    setShowFeedback(false);
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
                className={getClassName(i, props.correctAnswer)}
                active={!quizOver && selectedAnswer === i}
                onClick={() => setAnswer(i)}
              >
                {answer}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <Collapse in={showFeedback} timeout={3000} unmountOnExit={true}>
          <div className="feedback">
            <p>
              <b>
                {selectedAnswer === props.correctAnswer
                  ? "correct"
                  : "incorrect"}
              </b>
            </p>
            {props.message && <p className="text-muted">{props.message}</p>}
          </div>
        </Collapse>
        <div className="text-center">
          <Fade
            in={!quizOver}
            unmountOnExit={true}
            timeout={3000}
            onExited={() => setShowFeedback(true)}
          >
            <Button
              variant="secondary"
              onClick={() => setQuizOver(true)}
              disabled={selectedAnswer === null}
            >
              submit
            </Button>
          </Fade>
          <Fade
            in={showFeedback}
            unmountOnExit={true}
            timeout={3000}
            onExited={onTakeQuizAgain}
          >
            <Button variant="dark" onClick={onTakeQuizAgain}>
              take again
            </Button>
          </Fade>
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
  message: PropTypes.string,
};

export default CheckBlock;
