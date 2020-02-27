import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticleCard from '../molecules/ArticleCard';
import * as actions from '../../actions/actions';

class Home extends React.Component {
  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    if (!this.props.articles) return <p>No articles!</p>;
    return (
      <React.Fragment>
        {this.props.articles.filter(article => article.belongs_to === "football")
          .map((article, index) => {
            if (index > 0) return null;
            return (
              <ArticleCard
                title={article.title}
                author={article.created_by}
                votes={article.votes} 
                key={article.title}
                topic={article.belongs_to} 
                article_id={article._id}
              />
          )})
        }
        {this.props.articles.filter(article => article.belongs_to === "cooking")
          .map((article, index) => {
            if (index > 0) return null;
            return (
              <ArticleCard
                title={article.title}
                author={article.created_by}
                votes={article.votes} 
                key={article.title}
                topic={article.belongs_to} 
                article_id={article._id}
              />
          )})
        }
        {this.props.articles.filter(article => article.belongs_to === "coding")
          .map((article, index) => {
            if (index > 0) return null;
            return (
              <ArticleCard
                title={article.title}
                author={article.created_by}
                votes={article.votes} 
                key={article.title}
                topic={article.belongs_to} 
                article_id={article._id}
              />
          )})
        }
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
      </React.Fragment>
    )
  }
}

Home.propTypes = {
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

export default connect(MapStateToProps, mapDispatchToProps) (Home);
