import React from "react";

import "./App.css";
import { Provider } from "react-redux";
import store from "./state/store"
import { combineReducers } from "redux";
import reducers from "./state/reducers"

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

export const monsterReducer = combineReducers({
  posts: reducers
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Blog</h1>
        </header>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
