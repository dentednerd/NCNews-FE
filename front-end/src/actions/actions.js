import * as types from './types';
import axios from  'axios';
import {ROOT} from '../../config';

// tester!
export function hiGuys () {
    console.log('Hello');
}

// fetchArticles
export function fetchArticles () {
    return function (dispatch) {
        dispatch(fetchArticlesRequest());
        axios.get(`${ROOT}/articles`)
        .then(res => {
            console.log(res.data);
            dispatch(fetchArticlesSuccess(res.data.articles));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchArticlesError(err));
        });
    };
}

export function fetchArticlesRequest () {
    return {
        type: types.FETCH_ARTICLES_REQUESTS
    };
}

export function fetchArticlesSuccess (articles) {
    return {
        type: types.FETCH_ARTICLES_SUCCESS,
        payload: articles
    };
}

export function fetchArticlesError (error) {
    return {
        type: types.FETCH_ARTICLES_ERROR,
        payload: error
    };
}

// fetchArticlesByID
export function fetchArticlesByID (id) {
    return function (dispatch) {
        dispatch(fetchArticlesByIDRequest(id));
        axios.get(`${ROOT}/articles/${id}`)
        .then(res => {
            console.log('res', res.data)
            dispatch(fetchArticlesByIDSuccess(res.data.article));
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchArticlesByIDError(err));
        });
    };
}

export function fetchArticlesByIDRequest (id) {
    return {
        type: types.FETCH_ARTICLES_BY_ID_REQUESTS,
        id: id
    };
}

export function fetchArticlesByIDSuccess (article) {
    return {
        type: types.FETCH_ARTICLES_BY_ID_SUCCESS,
        payload: article
    };
}

export function fetchArticlesByIDError (error) {
    return {
        type: types.FETCH_ARTICLES_BY_ID_ERROR,
        payload: error
    };
}

//fetchCommentsByArticleID
export function fetchCommentsByArticleID (id) {
    return function (dispatch) {
        dispatch(fetchCommentsByArticleIDRequest(id));
        axios.get(`${ROOT}/articles/${id}/comments`)
        .then(res => {
            console.log('cooment res', res.data);
            dispatch(fetchCommentsByArticleIDSuccess(res.data.comments));
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchCommentsByArticleIDError(err));
        });
    };
}

export function fetchCommentsByArticleIDRequest (id) {
    return {
        type: types.FETCH_COMMENTS_BY_ARTICLE_ID_REQUESTS,
        id: id
    };
}

export function fetchCommentsByArticleIDSuccess (comments) {
    return {
        type: types.FETCH_COMMENTS_BY_ARTICLE_ID_SUCCESS,
        payload: comments 
    };
}

export function fetchCommentsByArticleIDError (error) {
    return {
        type: types.FETCH_COMMENTS_BY_ARTICLE_ID_ERROR,
        payload: error
    };
}

// addCommentsByArticleID
export function addCommentsByArticleID (id, data) {
    return function (dispatch) {
        dispatch(addCommentsByArticleIDPost(id, data));
        axios.post(`${ROOT}/articles/${id}/comments`, data)
        .then(res => {
            console.log('post res', res.data);
            dispatch(addCommentsByArticleIDSuccess(res.data.comments));
        })
        .catch(err => {
            console.log(err);
            dispatch(addCommentsByArticleIDError(err));
        });
    };
}

export function addCommentsByArticleIDPost (id, comment) {
    return {
        type: types.ADD_COMMENTS_BY_ARTICLE_ID_POST,
        id: id,
        comment: comment
    };
}

export function addCommentsByArticleIDSuccess (comments) {
    return {
        type: types.ADD_COMMENTS_BY_ARTICLE_ID_SUCCESS,
        payload: comments 
    };
}

export function addCommentsByArticleIDError (error) {
    return {
        type: types.ADD_COMMENTS_BY_ARTICLE_ID_ERROR,
        payload: error
    };
}

// fetchTopics
export function fetchTopics () {
  return function (dispatch) {
    dispatch(fetchTopicsRequest());
    axios.get(`${ROOT}/topics`)
      .then(res => {
        dispatch(fetchTopicsSuccess(res.data.topics));
      })
      .catch(err => {
        dispatch(fetchTopicsError(err));
      });

  };
}
export function fetchTopicsRequest () {
  return {
    type: types.FETCH_TOPICS_REQUEST
  };
}

export function fetchTopicsSuccess (topics) {
  return {
    type: types.FETCH_TOPICS_SUCCESS,
    payload: topics
  };
}

export function fetchTopicsError (error) {
  return {
    type: types.FETCH_TOPICS_ERROR,
    payload: error
  };
}

// incrementArticleVotes
export function articleVoteUp (id) {
    console.log('voted up!');
// add 1 to voteCount
return function (dispatch) {
    dispatch(articleVoteUpRequest());
    axios.put(`${ROOT}/articles/${id}?vote=up`)
      .then(res => {
        dispatch(articleVoteUpSuccess(res.data.voteCount));
      })
      .catch(err => {
        dispatch(articleVoteUpError(err));
      });
  };
}

export function articleVoteUpRequest (id) {
  return {
    type: types.ARTICLE_VOTE_UP_REQUEST,
    payload: id
  };
}

export function articleVoteUpSuccess (upvote) {
  return {
    type: types.ARTICLE_VOTE_UP_SUCCESS,
    payload: upvote
  };
}

export function articleVoteUpError (error) {
  return {
    type: types.ARTICLE_VOTE_UP_ERROR,
    payload: error
  };
}

// decrementVotes
export function articleVoteDown (id) {
    console.log('voted down!');
// take 1 from voteCount
return function (dispatch) {
    dispatch(articleVoteDownRequest());
    axios.put(`${ROOT}/articles/${id}?vote=down`)
      .then(res => {
        dispatch(articleVoteDownSuccess(res.data.voteCount));
      })
      .catch(err => {
        dispatch(articleVoteDownError(err));
      });
  };
}

export function articleVoteDownRequest (id) {
  return {
    type: types.ARTICLE_VOTE_DOWN_REQUEST,
    payload: id
  };
}

export function articleVoteDownSuccess (downvote) {
  return {
    type: types.ARTICLE_VOTE_DOWN_SUCCESS,
    payload: downvote
  };
}

export function articleVoteDownError (error) {
  return {
    type: types.ARTICLE_VOTE_DOWN_ERROR,
    payload: error
  };
}