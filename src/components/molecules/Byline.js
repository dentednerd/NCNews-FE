import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

const StyledByline = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  margin-right: 1rem;
`;

class Byline extends React.Component {
  componentDidMount () {
    this.props.fetchUser(this.props.authorUsername);
  }

  shouldComponentUpdate() {
    if (!this.props.author) return true;
    return this.props.author.length > 0;
  }
  componentDidUpdate () {
    this.props.fetchUser(this.props.authorUsername);
  }

  render () {
    if (!this.props.author) return null;
    return (
    <StyledByline>
      <Avatar src={this.props.author.avatar_url} alt={this.props.author.name} />
      <a href={`/users/${this.props.author.username}`}>{this.props.author.name}</a>
    </StyledByline>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchUser: (authorUsername) => {
      dispatch(actions.fetchUser(authorUsername));
    },
  };
}

function MapStateToProps (state) {
  return {
    author: state.user,
    loading: state.loading
  };
}
Byline.defaultProps = {
  authorUsername: ""
}

Byline.propTypes = {
  author: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  authorUsername: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  fetchUser: PropTypes.func.isRequired,
};

export default connect(MapStateToProps, mapDispatchToProps) (Byline);
