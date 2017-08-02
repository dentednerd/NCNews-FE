import React from 'react';
import PropTypes from 'prop-types';

class ArticleTitleBar extends React.Component {
    render () {
        return (
            <h2 className="title is-3">{this.props.title}</h2>
        );
    }
}

export default ArticleTitleBar;

ArticleTitleBar.proptypes = {
    title: PropTypes.string.isRequired
};