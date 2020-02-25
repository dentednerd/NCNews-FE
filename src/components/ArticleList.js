import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard';
import Profile from './Profile';
import * as actions from '../actions/actions';


class ArticleList extends React.Component {
  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    return (
      <div className="columns">
        <div className="column is-three-quarters" id='ArticleList'>
          {!this.props.articles && <p>No articles!</p>}
          {this.props.articles.map(article => (
            <ArticleCard
              title={article.title}
              author={article.created_by}
              votes={article.votes} 
              key={article.title}
              topic={article.belongs_to} 
              article_id={article._id}
            />
          ))}
        </div>
        <Profile />
      </div>
    );
  }
}

ArticleList.propTypes = {
  fetchArticles: PropTypes.func,
  articles: PropTypes.array
};

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

export default connect(MapStateToProps, mapDispatchToProps) (ArticleList);
