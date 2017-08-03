import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    console.log(this.props);
    return (
        <nav>
          <h1>Northcoders News</h1>
          <Link className="topicLink" to="/">Home</Link>
          <Link className="topicLink" to="/topics/football/articles">Football</Link>
          <Link className="topicLink" to="/topics/cooking/articles">Cooking</Link>
          <Link className="topicLink" to="/topics/coding/articles">Coding</Link> 
        </nav>
    );
  }
}

export default Navbar;