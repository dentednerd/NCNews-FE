import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import Profile from '../organisms/Profile';
import CommentList from '../organisms/CommentList';
import ArticleCard from '../molecules/ArticleCard';

class UserPage extends React.Component {
  componentDidMount () {
    this.props.fetchUser(this.props.match.params.user_id);
    this.props.fetchArticlesByUser(this.props.match.params.user_id);
    this.props.fetchCommentsByUser(this.props.match.params.user_id);
  }

  render () {
    return (
      <div>
        <Profile user={this.props.user} />
        <h2>Articles</h2>
        {this.props.articles.map(article => <ArticleCard topic={article.belongs_to} title={article.title} author={this.props.user.name} article_id={article._id} />)}
        <h2>Comments</h2>
        <CommentList selectedComments={this.props.selectedComments} />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchUser: (id) => {
      dispatch(actions.fetchUser(id));
    },
    fetchArticlesByUser: (id) => {
      dispatch(actions.fetchArticlesByUser(id));
    },
    fetchCommentsByUser: (id) => {
      dispatch(actions.fetchCommentsByUser(id));
    }
  };
}

function MapStateToProps (state) {
  return {
    user: state.user,
    articles: state.articles,
    selectedComments: state.selectedComments
  };
}

UserPage.defaultProps = {
  user: {},
  articles: [],
  selectedComments: []
}

UserPage.propTypes = {
    user: PropTypes.object,
    articles: PropTypes.array,
    selectedComments: PropTypes.array,
    fetchUser: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
};

export default connect(MapStateToProps, mapDispatchToProps) (UserPage);
