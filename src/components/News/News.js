import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NullImage from "../../components/Images/nullImage.png";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
import { header } from "../../config/config";
import { endpointPath } from "../../config/api";
import { Container, Header, card } from "./index";

// News component to fetch and display news articles
function News(props) {
  const { newscategory, country } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to capitalize the first letter of a string
  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const category = newscategory;
  const formattedCategory = capitalize(category);
  document.title = `${formattedCategory} - News`;

  // Function to fetch news data from API
  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await axios.get(endpointPath(country, category));
      const parsedData = response.data;
      setArticles(parsedData.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  // Fetch news on component mount
  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* Display news category header */}
          <Header>{header(formattedCategory)}</Header>

          <Container>
            <Row>
              {/* Loop through articles and render NewsItem component */}
              {articles.map((article) => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} style={card} key={uuidv4()}>
                    <NewsItem
                      title={article.title}
                      description={article.description}
                      published={article.publishedAt}
                      channel={article.source.name}
                      alt="News image"
                      publishedAt={article.publishedAt}
                      imageUrl={article.image === null ? NullImage : article.image}
                      urlNews={article.url}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

// Default props for the News component
News.defaultProps = {
  country: "us",
  newscategory: "general",
};

// Prop types validation
News.propTypes = {
  country: PropTypes.string,
  newscategory: PropTypes.string,
};

export default News;
