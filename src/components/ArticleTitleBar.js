import React from 'react';
import PropTypes from 'prop-types';

class ArticleTitleBar extends React.Component {
  render () {
    return (
      <div className="articleTitle">
        <h2 className="title is-3">
          {this.props.title}
        </h2>
        <h3 className="subtitle is-5">
          {this.props.author}
        </h3>
      </div>
    );
  }
}

ArticleTitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default ArticleTitleBar;
