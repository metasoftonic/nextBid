import { createStore, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";

import addressReducer from "./../reducers/addressReducer";

const middleware = [
  reduxThunk
];
const composedEnhancers = compose(
  applyMiddleware(...middleware)
)

export const store = createStore(addressReducer, composedEnhancers);