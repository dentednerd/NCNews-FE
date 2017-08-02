import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
    render () {
        return (
            <div className="postedComment">
                <h2>{this.props.comment.created_by} says:</h2>
                <span className="commentBody">{this.props.comment.body}</span><br />
                <span className="commentInfo">Posted at {this.props.comment.created_at}<br />
                Votes: {this.props.comment.votes}</span>
            </div>
        );
    }
}

Comment.proptypes = {
    comment: PropTypes.object.isRequired
};

export default Comment;
