import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { taskReducer } from "./taskReducer";
import taskMiddleware from "./taskMiddleware";

export const logger = (store) => (next) => (action) => {
  next(action);
  console.log("logger", action);
};
const sagaMiddleware = createSagaMiddleware();
export const appStore = createStore(
  taskReducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(taskMiddleware);
