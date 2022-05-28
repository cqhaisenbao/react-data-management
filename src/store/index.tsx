import {applyMiddleware, combineReducers, createStore} from 'redux'
import React from "react";
import {Provider} from "react-redux";
import settingReducer from "./settingReducer";

const rootReducer = combineReducers({
    settingReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export type RootState = ReturnType<typeof store.getState>

export const StoreProvider: React.FC<any> = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}
