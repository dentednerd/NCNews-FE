import React from 'react';
import PropTypes from 'prop-types';

class VoteButton extends React.Component {
  render () {
    return (
      <div className="vote">
        <span className="voteCount">
            {this.props.voteCount}
        <div className="voteButton">
          <button>Vote Up</button>
          <button>Vote Down</button>
        </div>   
        </span>
      </div>
    );
  }
}

VoteButton.proptypes = {
    voteCount: PropTypes.number.isRequired
};

export default VoteButton;