import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import { listenerMiddleware } from "./middleware/authMiddleware";
import user from "./features/userSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .prepend(listenerMiddleware.middleware),
});
