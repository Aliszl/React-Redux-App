import { NEW_POSTS, FETCH_POSTS } from "./types"; //or import * as types from './Types'; () then types.FETCH_POSTS)
import axios from "axios";

export const fetchPosts = () => dispatch => {
  console.log("fetching");
//   dispatch({ type: "ABOUT TO FETCH POSTS" });
//   dispatch({ type: "TURN ON THE SPINNER!!" });
//   axios.get('https://jsonplaceholder.typicode.com/posts')
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
   
    )
    .catch(err => {
      debugger;
    });
};

export const createPost = (postData) => dispatch => {
console.log("action");
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: NEW_POSTS,
          payload: post
        })
     
      );
    //   .catch(err => {
    //     debugger;
    //   });
  };

