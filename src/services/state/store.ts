import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";
import booksReducer from "./book/bookSlice";
import drawerReducer from "./drawer/drawerSlice";

export const store: Store = configureStore({
  reducer: {
    data: booksReducer,
    drawer: drawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
