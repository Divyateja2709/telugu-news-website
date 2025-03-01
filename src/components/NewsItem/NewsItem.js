import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import Details from "./Details/Details";
import { ReactComponent as ArrowIcon } from "../Images/ArrowIcon.svg"; 
import "./NewsItem.css"; 

function NewsCard({ imageUrl, alt, description, title, channel, published, urlNews }) {
  return (
    <Card className="news-card">
      <Card.Img className="news-img" variant="top" src={imageUrl} alt={alt} />
      <Card.Body>
        <Card.Title className="news-title">{title}</Card.Title>
        <Card.Text className="news-description">{description}</Card.Text>
        <Details channel={channel} published={published} />
        <Button className="news-btn" href={urlNews} target="_blank">
          Read more <ArrowIcon className="news-arrow" />
        </Button>
      </Card.Body>
    </Card>
  );
}

NewsCard.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  published: PropTypes.string,
  urlNews: PropTypes.string,
};

export default NewsCard;
