import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled('article')`
  background-color: #fff;
  border: solid 1px #eee;
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0.25rem 0.25rem 0.25rem #ddd;
  padding: 2rem;
  max-width: 100%;
  width: calc(100% - 6rem);
`;

const ArticleCard = ({ topic, title, author, article_id }) => {
  return (
    <Link to={'/articles/' + article_id}>
      <Card>
        <p>{topic}</p>
        <h2>{title}</h2>
        <p>by {author}</p>
      </Card>
    </Link>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  article_id: PropTypes.string.isRequired
};

export default ArticleCard;
