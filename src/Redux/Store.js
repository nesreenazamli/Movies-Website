import { createStore, combineReducers, applyMiddleware } from "redux";
import { movieReducers } from "./movieReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  movieData: movieReducers,
});
const middlewares = [thunk];
const store = createStore(
  reducers,

  applyMiddleware(...middlewares)
);
export default store;
