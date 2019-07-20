import { createStore } from "redux";
//import rootReducer from "./reducers";

// action-types
const ADD_ARTICLE = "ADD_ARTICLE";

const initialState = {
    articles: []
  };
  
function rootReducer(state = initialState, action) {
if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
    articles: state.articles.concat(action.payload)
    });
}
return state;
}

const store = createStore(rootReducer);

export default store;