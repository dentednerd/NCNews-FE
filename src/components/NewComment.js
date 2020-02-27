import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

class NewComment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      comment: {
        value: '',
        touched: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="comment-input" className="input" type="text" placeholder="Leave your comment" onChange={this.handleChange.bind(null, 'comment')} />
        <button type="submit">
          Submit
        </button>
      </form>
    );
  }
  
  handleChange (field, e) {
    e.preventDefault();
    const newState = Object.assign({}, this.state, {
      [field]: {
        value: e.target.value,
        touched: true
      }
    });
    this.setState(Object.assign(newState));
  }

  handleSubmit (event) {
    event.preventDefault();
    let data = {comment: this.state.comment.value};
    this.props.postComment(this.props.article_id, data);
  }
}

function mapDispatchToProps (dispatch) {
  return {
    postComment: function (id, newComment) {
      dispatch(actions.addCommentsByArticleID(id, newComment));
    }
  };
}

function mapStateToProps (state) {
  return {
    comment: state.comment
  };
}

NewComment.propTypes = {
  article_id: PropTypes.string.isRequired,
  postComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
