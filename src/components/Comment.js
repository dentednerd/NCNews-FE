import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import * as actions from '../actions/actions';

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
    this.props.fetchAllUsers();
  }

  render () {
    const time = dayjs(this.props.comment.created_at).format('HH:mm, DD MMMM YYYY');
    const thisUser = this.props.users.filter(user => user.username === this.props.comment.created_by)[0]
    return (
      <StyledComment>
        <Commenter>
          <Avatar src={thisUser.avatar_url} alt={thisUser.name} />
          <p><strong>{thisUser.name} says:</strong></p>
        </Commenter>
        <CommentBody>{this.props.comment.body}</CommentBody>
        <p>{time}</p>
      </StyledComment>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchAllUsers: () => {
      dispatch(actions.fetchAllUsers());
    },
  };
}

function MapStateToProps (state) {
  return {
    users: state.allUsers,
    loading: state.loading
  };
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  users: PropTypes.array
};

export default connect(MapStateToProps, mapDispatchToProps) (Comment);
