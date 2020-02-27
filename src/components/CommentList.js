import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends React.Component {
  shouldComponentUpdate (nextProps) {
    return (this.props !== nextProps);
  }

  render () {
    return (
      <div>
        {this.props.selectedComments.map((comment) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
      </div>
    );
  }
}

CommentList.propTypes = {
  selectedComments: PropTypes.array.isRequired
};

export default CommentList;
