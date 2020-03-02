import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import * as actions from '../../actions/actions';

const StyledComment = styled.section`
  margin-bottom: 1rem;
  border-radius: 1rem;
  border: solid 1px #ddd;
  box-shadow: 1px 1px 3px #eee;
  background-color: #fff;
  padding: 1rem;
  overflow: hidden;
  word-wrap: break-word;

  h3 {
    margin: 0;
  }

  p {
    margin: 0 0 1rem 0;
  }
`;

const Commenter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-family: "Zilla Slab", serif;
  }
`;

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  margin-right: 1rem;
`;

const CommentBody = styled.p`
  margin-bottom: 1rem;
`;

class Comment extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.comment.created_by);
  }

  render () {
    const time = dayjs(this.props.comment.created_at).format('HH:mm, DD MMMM YYYY');
    return (
      <StyledComment>
        <Commenter>
          <Avatar src={this.props.user.avatar_url} alt={this.props.user.name} />
          <p><strong>{this.props.user.name} says:</strong></p>
        </Commenter>
        <CommentBody>{this.props.comment.body}</CommentBody>
        <p>{time}</p>
      </StyledComment>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchUser: (username) => {
      dispatch(actions.fetchUser(username));
    },
  };
}

function MapStateToProps (state) {
  return {
    user: state.user,
    loading: state.loading
  };
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  user: PropTypes.object
};

export default connect(MapStateToProps, mapDispatchToProps) (Comment);
