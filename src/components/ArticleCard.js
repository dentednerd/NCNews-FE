import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className="media">
        <div className="media-left">
          <span className="voteCount">{props.votes}</span>
        </div>
        <div className="media-content">
          <div className="content">
            <span className="topic">{props.topic}</span>
            <Link to={'/articles/' + props.article_id}>
              <h2 className="title is-3">{props.title}</h2>
              <span className="subtitle is-6">by {props.author}</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
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
