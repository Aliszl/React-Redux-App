import { FETCH_POSTS, NEW_POSTS } from "./types";

const initialState={
    items:[],
    item:{}
}

export function postReducer(state=initialState, action){
    switch (action.type) {
        case FETCH_POSTS:
            console.log("reducer");
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
