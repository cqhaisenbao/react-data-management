import {ButtonType} from "antd/es/button";

export interface SettingState {
    type: ButtonType
}

const defaultState: SettingState = {
    type: 'primary'  // 按钮类型
}

const settingReducer = (state: SettingState = defaultState, action: ActionType): SettingState => {
    switch (action.type) {
        case 'changeType':
            return {
                ...state,
                type: action.payload
            }
        default:
            return state
    }
}

export default settingReducer
