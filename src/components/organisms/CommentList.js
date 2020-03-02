import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../molecules/Comment';

class CommentList extends React.Component {
  shouldComponentUpdate (nextProps) {
    return (this.props !== nextProps);
  }

  render () {
    if (!this.props.selectedComments.length) return null;
    return this.props.selectedComments.map((comment) => {
      return <Comment key={comment._id} comment={comment} />;
    });
  }
}

CommentList.propTypes = {
  selectedComments: PropTypes.array.isRequired
};

export default CommentList;
