import {combineReducers, configureStore} from "@reduxjs/toolkit";
import React from "react";
import {Provider} from "react-redux";
import settingReducer from "./settingReducer";
import userReducer from "./userReducer";
import {actionLog} from "./middleware/actionLog";
import {productDetailSlice} from "./productDetail/slice";
import {changePriceSlice} from "./changePriceReducer/slice";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {PersistGate} from "redux-persist/integration/react";

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['changePriceSlice']
}

const rootReducer = combineReducers({
    settingReducer,
    userReducer,
    productDetailSlice: productDetailSlice.reducer,
    changePriceSlice: changePriceSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => ([...getDefaultMiddleware({
        serializableCheck: {
            // Ignore these action types
            ignoredActions: ['persist/PERSIST'],
        },
    }), actionLog])
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export const StoreProvider: React.FC<any> = ({children}) => {
    return <Provider store={store}>
        {/* @ts-ignore*/}
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
}
