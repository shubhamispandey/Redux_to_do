/* [
  {
    id: 1,
    name: "Todo 1",
  },
  {},
  {},
]; */

import rootReducer from "./rootReducer";
import { createStore } from "redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
