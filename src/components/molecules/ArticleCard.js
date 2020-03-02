import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Byline from '../molecules/Byline';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Card = styled('article')`
  background-color: #fff;
  border: solid 1px #eee;
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0.25rem 0.25rem 0.25rem #ddd;
  padding: 2rem;
  max-width: 100%;
  width: calc(100% - 6rem);
  
  h2 {
    font-family: "Zilla Slab", serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

const ArticleCard = ({ topic, title, author, article_id }) => {
  return (
    <StyledLink to={'/articles/' + article_id}>
      <Card>
        <h2>{title}</h2>
        {/* <Byline authorUsername={author} /> */}
        <p>{author}</p>
      </Card>
    </StyledLink>
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
