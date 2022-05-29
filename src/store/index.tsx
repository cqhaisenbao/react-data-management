import {combineReducers, configureStore} from "@reduxjs/toolkit";
import React from "react";
import {Provider} from "react-redux";
import settingReducer from "./settingReducer";
import userReducer from "./userReducer";
import {actionLog} from "./middleware/actionLog";
import {productDetailSlice} from "./productDetail/slice";
import {changePriceSlice} from "./changePriceReducer/slice";

const rootReducer = combineReducers({
    settingReducer,
    userReducer,
    productDetailSlice: productDetailSlice.reducer,
    changePriceSlice: changePriceSlice.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => ([...getDefaultMiddleware(), actionLog])
});

export type RootState = ReturnType<typeof store.getState>

export const StoreProvider: React.FC<any> = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}
