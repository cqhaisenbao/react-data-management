import userActionsEnum from "./userActionsEnum";
import {UserInfo} from "./index";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../index";
import {getUserInfo, setAge} from "../../api";
import {message} from "antd";

export type UserThunkAction = ThunkAction<void, RootState, unknown, SetUserInfoAction>
export type ChangeAgeThunkAction = ThunkAction<void, RootState, unknown, ChangeAgeAction>

interface ChangeNameAction {
    type: typeof userActionsEnum.changeName,
    payload: string
}

interface ChangeAgeAction {
    type: typeof userActionsEnum.changeAge,
    payload: number
}

interface SetUserInfoAction {
    type: typeof userActionsEnum.setUserInfo,
    payload: UserInfo
}

export const changeNameAction = (name: string): ChangeNameAction => ({
    type: userActionsEnum.changeName,
    payload: name
})

export const changeAgeAction = (age: number): ChangeAgeAction => ({
    type: userActionsEnum.changeAge,
    payload: age
})

export const setUserInfoAction = (payload: UserInfo): SetUserInfoAction => ({
    type: userActionsEnum.setUserInfo,
    payload
})

export const fetchUserInfo = (): UserThunkAction =>
    async (dispatch) => {
        const res = await getUserInfo()
        dispatch(setUserInfoAction(res))
    }

export const changeAgeActionAsync = (age: number): ChangeAgeThunkAction => {
    return async (dispatch) => {
        const res = await setAge(age).catch((err) => {
            message.error(`修改年龄失败：${err}`)
        })
        if (res) {
            dispatch(changeAgeAction(age))
        }
    }
}
