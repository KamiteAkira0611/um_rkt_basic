import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/TaskSlice";
import counterReducer from "../features/counter/counterSlice";
import featchReducer from "../features/featch/featchSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    featch: featchReducer,
  },
});
