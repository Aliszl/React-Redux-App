import { NEW_POSTS, FETCH_POSTS } from "./types";//or import * as types from './Types'; () then types.FETCH_POSTS)
import axios from "axios";






  export const fetchPosts = () => (dispatch) => {
    console.log("fetching");
    dispatch({ type: 'ABOUT TO FETCH POSTS' });
    dispatch({ type: 'TURN ON THE SPINNER!!' });
    axios.get('https://jsonplaceholder.typicode.com/posts')
    // fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => dispatch({
        type: FETCH_POSTS,
        payload: posts
    }))
      .catch(err => {
        debugger
      });
  };
//   export const fetchPosts = () => (dispatch) => {
//     dispatch({ type: 'ABOUT TO FETCH TODOS' });
//     dispatch({ type: 'TURN ON THE SPINNER!!' });
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => {
//         const todos = res.data;
//         dispatch({
//           type: types.SET_TODOS,
//           payload: todos,
//         });
//         dispatch({ type: 'TURN OFF THE SPINNER!!' });
//       })
//       .catch(err => {
//         debugger
//       });
//   };
  