import React from 'react';
import PropTypes from 'prop-types';
import ArticleTitleBar from './ArticleTitleBar';
import ArticleText from './ArticleText';
import VoteButton from './VoteButton';
import NewComment from './NewComment';
import CommentList from './CommentList';
import Profile from './Profile';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import '../../public/style.css';

class ArticlePage extends React.Component {

    componentDidMount () {
        this.props.fetchArticlesByID(this.props.match.params.article_id);
        this.props.fetchCommentsByArticleID(this.props.match.params.article_id);
    }

    render () {
        return (
            <div className="articlePage columns">
                <div className="column is-three-quarters">
                <ArticleTitleBar title={this.props.selectedArticle.title} />
                <ArticleText body={this.props.selectedArticle.body} />
                <VoteButton voteCount={this.props.selectedArticle.votes} />
                <NewComment postComment={this.props.addCommentsByArticleID}
                                article_id={this.props.match.params.article_id} />
                <CommentList selectedComments={this.props.selectedComments} />               
                </div>
                <Profile />
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticlesByID: (id) => {
      dispatch(actions.fetchArticlesByID(id));
    },
    fetchCommentsByArticleID: (id) => {
      dispatch(actions.fetchCommentsByArticleID(id));  
    },
    addCommentsByArticleID: (id, data) => {
        dispatch(actions.addCommentsByArticleID(id, data));
    }
  };
}

function MapStateToProps (state) {
  return {
    selectedArticle: state.selectedArticle,
    selectedComments: state.selectedComments,
    loading :state.loading
  };
}

export default connect(MapStateToProps, mapDispatchToProps) (ArticlePage);

ArticlePage.proptypes = {
    selectedArticle: PropTypes.object.isRequired,
    selectedComments: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};