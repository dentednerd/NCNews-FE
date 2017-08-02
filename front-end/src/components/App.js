import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
