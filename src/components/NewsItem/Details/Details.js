import React from "react";
import PropTypes from "prop-types";
import { summary, newsChannel, lastUpdate } from "../../../config/config";
import "./Details.css";

function NewsDetails({ channel, published }) {
  return (
    <details className="details">
      <summary className="summary">{summary}</summary>
      <div className="info">
        <p className="channel">
          <strong>Source: </strong>
          {newsChannel(channel)}
        </p>
        <p className="published">
          <strong>Updated: </strong>
          {lastUpdate(published)}
        </p>
      </div>
    </details>
  );
}

NewsDetails.propTypes = {
  channel: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
};

export default NewsDetails;
