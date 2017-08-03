import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

class VoteButton extends React.Component {
  componentDidMount () {
    this.props.hiGuys();    
  }
  render () {
    console.log('VoteButton props are...', this.props);
    return (
      <div className="vote">
        <span className="voteCount">
            {this.props.voteCount}
        <div className="voteButton">
          <button onClick={actions.incrementVotes}>+</button>
          <button onClick={actions.decrementVotes}>-</button>
        </div>   
        </span>
      </div>
    );
  }
}

function mapHiGuysToProps () {
  return {
    hiGuys: () => {
      actions.hiGuys();
    }
  };
}

VoteButton.proptypes = {
    voteCount: PropTypes.number.isRequired,
    hiGuys: PropTypes.func
};

export default connect(mapHiGuysToProps)(VoteButton);