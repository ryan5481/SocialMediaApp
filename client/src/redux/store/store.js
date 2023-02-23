import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import userSlice from "../reducers/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import logger from "redux-logger";
import notificationSlice from "../reducers/notificationSlice";
const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  user: userSlice,
  notification: notificationSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
