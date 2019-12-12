import { FETCH_POSTS, NEW_POSTS } from "./types";

const initialState={
    items:[],
    item:{}
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case FETCH_POSTS:
          return {
              ...state, 
              items: action.payload
          };
        //   case FETCH_POSTS:

        //   return state;
        default:
          return state;
      }  

}