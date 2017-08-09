import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

class VoteButton extends React.Component {
  // componentWillReceiveProps (nextProps) {
  //   console.log('VoteButton has received props: ', this.props.votes);
  //   console.log('VoteButton NEXT PROPS: ', nextProps.votes);
  // }
  render () {
    return (
      <div className="vote">
        <span className="voteCount">
            {this.props.votes}
        <div className="voteButton">
          {}
          <button onClick={this.props.articleVoteUp.bind(this)}>+</button>
          <button onClick={this.props.articleVoteDown.bind(this)}>-</button>
        </div>   
        </span>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    articleVoteUp: function () {
      dispatch(actions.articleVoteUp(this.props.id));
    },
    articleVoteDown: function () {
      dispatch(actions.articleVoteDown(this.props.id));
    }
  };
}

function mapStateToProps (state) {
  return state;
  // state.selectedArticle.votes = this.props.votes;
  // console.log('VoteButton NEWSTATE: ', state.selectedArticle.votes);
}

VoteButton.propTypes = {
    votes: PropTypes.number,
    id: PropTypes.string.isRequired,
    articleVoteUp: PropTypes.func,
    articleVoteDown: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);