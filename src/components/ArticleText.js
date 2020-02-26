import React from 'react';
import PropTypes from 'prop-types';

class ArticleText extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

ArticleText.propTypes = {
  body: PropTypes.string.isRequired
};

export default ArticleText;
