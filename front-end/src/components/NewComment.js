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
      },
    name: {
      value: '',
      touched: false
      }
    };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  render () {
    return (
      <div className="newComment">
        <form onSubmit={this.handleSubmit}>
          <div className="field name">
            <div className="control">
              <input id="name-input" className="input" type="text" placeholder="Name" onChange={this.handleChange.bind(null, 'name')} />
            </div>
          </div>

          <div className="field comment">
            <div className="control">
              <input id="comment-input" className="input" type="text" placeholder="Comment" onChange={this.handleChange.bind(null, 'comment')} />
            </div>
          </div>

          <button className="submitButton" type="submit">
          Submit
          </button>
        </form>
      </div>
    );
  }
  
  handleChange (field, e) {
    const newState = Object.assign({}, this.state, {
      [field]: {
        value: e.target.value,
        touched: true
      }
    });
    this.setState(Object.assign(newState));
    console.log(this.state);
  }

  handleSubmit (newComment) {
    this.props.postComment(this.props.article_id, newComment);
    // push newComment object onto this.props.selectedComments
  }

}

  function mapDispatchToProps (dispatch) {
  return {
    postComment: function (newComment) {
      dispatch(actions.addCommentsByArticleID(this.props.article_id, newComment));
    }
  };
}

  function mapStateToProps (state) {
    return state;
  }


NewComment.propTypes = {
  article_id: PropTypes.string.isRequired,
  postComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);