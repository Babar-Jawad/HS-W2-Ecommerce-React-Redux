import { createStore } from "redux";
import rootReducer from "./reducers/index";

//createStore takes couple of AbortSignal, first one is reducers, 2nd one is state and maybe middlewares
const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
