const namespace = 'user';
const userActionsEnum = {
    // 修改姓名
    changeName: `${namespace}/changeName`,
    // 修改年龄
    changeAge: `${namespace}/changeAge`,
    // 设置用户信息
    setUserInfo: `${namespace}/setUserInfo`,
}

export default userActionsEnum;
