import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

class VoteButton extends React.Component {
    render () {
    console.log('VoteButton props: ', this.props);
    return (
      <div className="vote">
        <span className="voteCount">
            {this.props.voteCount}
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
  return {
    voteCount: state.voteCount
  };
}

VoteButton.proptypes = {
    voteCount: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    articleVoteUp: PropTypes.func,
    articleVoteDown: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);