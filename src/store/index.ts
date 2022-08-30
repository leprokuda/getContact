import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "../api/github.api";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer
  }
})