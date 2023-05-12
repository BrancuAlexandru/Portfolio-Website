import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/theme";
import projectMenuReducer from "./reducers/projectMenu";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projectMenu: projectMenuReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;