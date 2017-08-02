import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ArticleCard from './ArticleCard';
import Profile from './Profile';
import * as actions from '../actions/actions';

// TODO: filter articles by topic


class TopicPage extends React.Component {
  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    return (
      <div className="columns">
        <div className="column is-three-quarters" id='TopicPage'>
          {this.props.articles.map(article => <ArticleCard 
            title={article.title}
            author={article.created_by}
            votes={article.votes} 
            key={article.title}
            topic={article.belongs_to} 
            article_id={article._id}
          />)}
        </div>
        <Profile />
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchArticles: () => {
      dispatch(actions.fetchArticles());
    }
  };
}

function MapStateToProps (state) {
  return {
    articles: state.articles,
    loading :state.loading
  };
}

TopicPage.proptypes = {
    fetchArticles:PropTypes.func.isRequired,
    articles:PropTypes.array.isRequired
};

export default connect(MapStateToProps, mapDispatchToProps) (TopicPage);