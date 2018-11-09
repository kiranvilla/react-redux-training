import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux';

import { deletePost } from '../actions/PostActions';

class Post extends Component {
    /*
    state = {
        post: null
    }

    componentDidMount() {
        // console.log(this.props)
        const id = this.props.match.params.post_id;
        // this.setState({
        //     id
        // })
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data  
                })
                console.log(res)
            })
    }
    */
    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {

        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button onClick={this.handleDelete}>Delete Post</button>
            </div>
        ) : (
                <div className="center">loading post...</div>
            )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => {
            return post.id === id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);