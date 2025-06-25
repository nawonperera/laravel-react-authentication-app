import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import AuthReducer from "../src/utilities/slices/auth/AuthSlice.tsx";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authentication"],
};

const rootReducer = combineReducers({
    authentication: AuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch

export { store, persistor };
