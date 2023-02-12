import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./features/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import borderSlice from "./features/borderSlice";
import day_night from "./features/day_night_Slice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, countrySlice);

const store = configureStore({
  reducer: {
    countrySlice: persistedReducer,
    borderSlice: borderSlice,
    day_night: day_night,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export let persistor = persistStore(store);

export default store;
