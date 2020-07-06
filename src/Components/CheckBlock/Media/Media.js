import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Media(props) {
  let mediaComponent = null;

  switch (props.mediaType) {
    case "image":
      mediaComponent = (
        <Zoom>
          <Image src={props.src} alt="CheckBlock" fluid />
        </Zoom>
      );
      break;
    case "video":
      mediaComponent = (
        <iframe
          title={props.text}
          src={props.src}
          height="100%"
          width="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
      break;
    default:
      break;
  }

  return mediaComponent;
}

Media.propTypes = {
  src: PropTypes.string,
  mediaType: PropTypes.oneOf(["image", "video"]),
};

export default Media;
