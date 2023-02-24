import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  //  auth: persistReducer(persistConfig, authSlice.reducer),
  //  contacts: contactsSlice.reducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware({
  //   serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
});