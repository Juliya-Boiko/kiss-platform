import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE,
  PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
  
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLogged', 'name', 'userId', 'avatar'],
};

export const store = configureStore({
  reducer: {
  //  auth: authSlice.reducer
    auth: persistReducer(persistConfig, authSlice.reducer),
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);