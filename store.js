import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
