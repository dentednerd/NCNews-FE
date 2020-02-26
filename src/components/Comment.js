import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
  render () {
    const timestamp = Number(this.props.comment.created_at);
    return (
      <div className="postedComment">
        <h2>{this.props.comment.created_by} says:</h2>
        <span className="commentBody">{this.props.comment.body}</span><br />
        <span className="commentInfo">Posted at {timeConverter(timestamp)}<br />
          Votes: {this.props.comment.votes} </span>
      </div>
    );
  }
}

function timeConverter (UNIX_timestamp) {
  var a = new Date(UNIX_timestamp);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
  return time;
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
