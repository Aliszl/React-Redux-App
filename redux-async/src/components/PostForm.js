import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../state/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);

    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json"
    //   },
    //   body: JSON.stringify(post)
    // })
    //   .then(res => res.json())
    //   .then(data => console.log({ data }));

  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="">Title:</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="">Post:</label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
              id=""
              cols="90"
              rows="10"
            ></textarea>
            <br />
            <button type="submit">Submit post</button>
          </div>
        </form>
      </div>
    );
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  // posts:PropTypes.array.isRequired
}
// export default PostForm;
export default connect(null, {createPost})(PostForm);
