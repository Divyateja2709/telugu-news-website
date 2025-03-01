import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Loading from "../Loading/Loading";
import NewsCard from "../NewsItem/NewsItem";
import DefaultImage from "../../components/Images/nullImage.png";
import { useDispatch, useSelector } from "react-redux";
import { searchArticle } from "../../store/action"; // ✅ FIXED
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { pageHeader, noFound as noResults, searching as searchingMsg } from "../../config/config"; // ✅ FIXED
import { Container, Header as Title, card as cardStyles } from "./index"; // ✅ FIXED

function SearchResults() {
  const [queryText, setQueryText] = useState("");
  const [articleCount, setArticleCount] = useState(0);
  const { articles, loading } = useSelector((state) => state.search);
  const { query } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchArticle(query));
  }, [query, dispatch]);

  useEffect(() => {
    setQueryText(query);
    setArticleCount(articles?.totalArticles || 0);
  }, [query, articles]);

  useEffect(() => {
    if (loading) {
      document.title = searchingMsg;
    } else if (articleCount === 0) {
      document.title = noResults;
    } else {
      document.title = `${formatTitle(queryText)} - News`;
    }
  }, [loading, articleCount, queryText]);

  const formatTitle = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>{articleCount === 0 ? noResults : `${pageHeader} - ${formatTitle(queryText)}`}</Title>
          <Container>
            <Row>
              {articles?.articles?.map((news) => (
                <Col sm={12} md={6} lg={4} xl={3} style={cardStyles} key={uuidv4()}>
                  <NewsCard
                    title={news.title}
                    description={news.description}
                    published={news.publishedAt}
                    channel={news.source.name}
                    alt="News Thumbnail"
                    imageUrl={news.image || DefaultImage}
                    urlNews={news.url}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default SearchResults;
