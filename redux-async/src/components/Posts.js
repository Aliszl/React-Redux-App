import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../state/actions";

class Posts extends Component {
  constructor(props) {
    super(props);
    
    console.log(props);
  }

  componentDidMount() {
    console.log("fetch");
  this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost)
    }
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div key="{post.id}">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired,
  newPost: PropTypes.object
}
const mapStateToProps = state => ({
  posts: state.posts.items,//state.posts is reducer.  items is piece of state to go in this property.
newPost: state.posts.item
});
export default connect(mapStateToProps, {fetchPosts} )(Posts);
