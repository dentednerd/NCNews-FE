import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Byline from '../molecules/Byline';

const MostRecentContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: calc(100% - 2rem);
  margin-bottom: 1rem;
`;

const Card = styled.article`
  width: calc(33% - 5rem);
  padding: 2rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0.25rem 0.25rem 0.25rem #ddd;
  position: relative;

  p {
    margin: 0;
  }

  section {
    position: absolute;
    top: -0.75rem;
    right: -0.5rem;
    background-color: #354262;
    color: #fff;
    padding: 0.25rem;
    border-radius: 0.25rem;
  }
`;

const MostRecentCard = ({ article }) => (
  <Card>
    <section>{article.belongs_to}</section>
    <h2>{article.title}</h2>
    {/* <Byline authorUsername={article.created_by} /> */}
    <p>{article.created_by}</p>
  </Card>
)

const MostRecent = ({ articles }) => (
  <MostRecentContainer>
    {articles.filter(article => article.belongs_to === "football")
      .map((article, index) => {
        if (index > 0) return null;
        return <MostRecentCard article={article} />
      })
    }
    {articles.filter(article => article.belongs_to === "cooking")
      .map((article, index) => {
        if (index > 0) return null;
        return <MostRecentCard article={article} />
      })
    }

    {articles.filter(article => article.belongs_to === "coding")
      .map((article, index) => {
        if (index > 0) return null;
        return <MostRecentCard article={article} />
      })
    }
  </MostRecentContainer>
);


MostRecent.defaultProps = {
  articles: []
}

MostRecent.propTypes = {
  fetchArticles: PropTypes.func,
  articles: PropTypes.array
};

export default MostRecent;
