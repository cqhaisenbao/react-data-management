import userActionsEnum from "./userActionsEnum";
import {UserInfo} from "./index";

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

export type UserActionTypes = ChangeNameAction | ChangeAgeAction;

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
