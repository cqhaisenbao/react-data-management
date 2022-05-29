import {AnyAction, Store} from "redux";

export const actionLog: any = (store: Store) => (next: any) => (action: any) => {
    // console.log('state 当前', store.getState())
    // console.log('action 当前', action)
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    next(action)
    // console.log('state 更新后', store.getState())
}

// redux调用中间件的过程
// middleware(store)(next)(action)

