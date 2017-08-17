import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends React.Component {
    shouldComponentUpdate (nextProps) {
        if (this.props !== nextProps) return true;
        else return false;
    }

    render () {
        return (
            <div>
                {this.props.selectedComments.map((comment) => {
                    return <Comment key={comment._id} comment={comment}/>;
                })}
            </div>
        );
    }
}

export default CommentList;

CommentList.proptypes = {
    selectedComments: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};