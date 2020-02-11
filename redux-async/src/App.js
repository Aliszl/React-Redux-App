import React from "react";

import "./App.css";



import { } from "./state/reducers";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

// export const monsterReducer = combineReducers({
//   posts: reducers
// })

function App() {
  return (
    
      <div className="App">
        <header className="App-header">
          <h1>Blog</h1>
        </header>
        <PostForm />
        <Posts />
      </div>
    
  );
}

export default App;
