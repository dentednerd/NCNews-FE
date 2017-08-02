import * as types from '../actions/types';

const initialState = {
  articles: [],
  selectedArticle: {},
  selectedComments: [],
  loading: false,
  error: null,
  selectedTopic: null
};

function reducer (prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.FETCH_ARTICLES_REQUESTS) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.articles = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_ERRORS) {
    const newState = Object.assign({}, prevState);
    newState.articles = [];
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_BY_ID_REQUESTS) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_BY_ID_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.selectedArticle = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_ARTICLES_BY_ID_ERRORS) {
    const newState = Object.assign({}, prevState);
    newState.articles = [];
    newState.selectedArticle = {};
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_BY_ARTICLE_ID_REQUESTS) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_BY_ARTICLE_ID_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.selectedComments = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_BY_ARTICLE_ID_ERRORS) {
    const newState = Object.assign({}, prevState);
    newState.articles = [];
    newState.selectedArticle = {};
    newState.selectedComments = {},
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

  if (action.type === types.ADD_COMMENTS_BY_ARTICLE_ID_POST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_BY_ARTICLE_ID_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.selectedComments = action.payload;
    newState.loading = false;
    return newState;
  }

  if (action.type === types.FETCH_COMMENTS_BY_ARTICLE_ID_ERRORS) {
    const newState = Object.assign({}, prevState);
    newState.articles = [];
    newState.selectedArticle = {};
    newState.selectedComments = {},
    newState.loading = false;
    newState.error = action.error;
    return newState;
  }

  return prevState;
}

export default reducer;
