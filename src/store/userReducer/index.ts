export interface UserState {
    userInfo: UserInfo
}

export interface UserInfo {
    name: string;
    age: number;
    city: string;
}

const defaultState: UserState = {
    userInfo: {
        name: 'luff',
        age: 20,
        city: '重庆',
    }
}

const userReducer = (state: UserState = defaultState, action: ActionType): UserState => {
    switch (action.type) {
        case 'changeName':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    name: action.payload
                }
            }
        case 'changeAge':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    age: action.payload
                }
            }
        default:
            return state
    }
}

export default userReducer
