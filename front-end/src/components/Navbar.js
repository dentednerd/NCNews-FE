import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import * as actions from '../actions/actions';

// TODO: map topics to navbar links

class Navbar extends React.Component {
  // componentDidMount () {
  //   this.props.fetchTopics ();
  // }
  render () {
    return (
        <nav>
          <h1>Northcoders News</h1>
          {/* {this.props.topics.map(topic => <Link key={topic.slug} className="topicLink" to={`/topics/${topic.slug}/articles`}>{topic.slug}</Link>)} */}
          <Link className="topicLink" to="/">Home</Link>
          <Link className="topicLink" to="/topics/football/articles">Football</Link>
          <Link className="topicLink" to="/topics/cooking/articles">Cooking</Link>
          <Link className="topicLink" to="/topics/coding/articles">Coding</Link>
        </nav>
    );
  }
}

// function mapDispatchedToProps (dispatch) {
//   return {
//     fetchTopics: () => {
//       dispatch(actions.fetchTopics());
//     }
//   };
// }

// function mapStateToProps (state) {
//   return {
//     topics: this.state.topics
//   };
// }

// Navbar.propTypes = {
//   fetchTopics: PropTypes.func.isRequired
// };

// export default connect(mapStateToProps, mapDispatchedToProps)(Navbar);
export default Navbar;