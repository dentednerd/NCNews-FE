import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ArticleCard from '../molecules/ArticleCard';
import * as actions from '../../actions/actions';

class TopicPage extends React.Component {
  componentDidMount () {
    this.props.fetchArticles();
  }

  
  render () {
    const images = {
      football: "https://ugc.futurelearn.com/uploads/images/90/2d/902d0c48-095e-4919-81aa-4b8f4d3f198c.jpg",
      cooking: "https://www.yesmagazine.org/wp-content/uploads/imports/36a0edc6dcbf4466ae71d0548f94ff43.jpg",
      coding: "https://miro.medium.com/max/3200/0*QUqE4WGF8_cC9bIl.jpg"
    }

    const HeaderImage = styled.div`
      background-image: url(${images[this.props.match.params.topic_id]});
      background-position: center;
      width: calc(100% - 2rem);
      height: 15rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 1rem;
      border-radius: 1rem;
      color: #fff;
      font-size: 3rem;
      text-shadow: 2px 2px 0px #000, -2px -2px 0px #000;
    `;

    if (!this.props.articles) return <p>No articles!</p>;
    return (
      <div>
        <HeaderImage>
          <h2>{this.props.match.params.topic_id}</h2>
        </HeaderImage>
        {this.props.articles.filter(article => {
          return article.belongs_to === this.props.match.params.topic_id;
        })       
        .map(article => (
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

TopicPage.propTypes = {
  fetchArticles:PropTypes.func.isRequired,
  articles:PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(MapStateToProps, mapDispatchToProps) (TopicPage);
