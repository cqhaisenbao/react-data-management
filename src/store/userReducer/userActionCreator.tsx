import userActionsEnum from "./userActionsEnum";

interface ChangeNameAction {
    type: typeof userActionsEnum.changeName,
    payload: string
}

interface ChangeAgeAction {
    type: typeof userActionsEnum.changeAge,
    payload: number
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
