import React from 'react';
import styled from 'styled-components';
import VoteButton from '../VoteButton';
import NewComment from '../NewComment';

const Voter = styled.div`
  margin: 1rem 0;
`;

const VoteAndComment = ({ votes, id, postComment}) => {
  return (
    <Voter>
      <div className="voteAndComment">
        <VoteButton 
          votes={votes} 
          id={id}
        />
        <NewComment 
          postComment={postComment}
          article_id={id} 
        />
      </div>
    </Voter>
  )
};

export default VoteAndComment;
