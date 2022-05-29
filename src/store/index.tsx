import {applyMiddleware, combineReducers, createStore} from 'redux'
import React from "react";
// import thunk from "redux-thunk";
import {Provider} from "react-redux";
import settingReducer from "./settingReducer";
import userReducer from "./userReducer";
import {actionLog} from "./middleware/actionLog";

const rootReducer = combineReducers({
    settingReducer,
    userReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(actionLog)));

export type RootState = ReturnType<typeof store.getState>

export const StoreProvider: React.FC<any> = ({children}) => {
    return <Provider store={store}>{children}</Provider>
}
