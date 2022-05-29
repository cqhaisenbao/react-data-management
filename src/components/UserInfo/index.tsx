import {Button, Card, Divider, Input, Space} from "antd";
import {useSelector, useDispatch} from "../../store/hooks";
import {useEffect, useState} from "react";
import {changeAgeActionAsync, changeNameAction, fetchUserInfo} from "../../store/userReducer/userActionCreator";

const UserInfo = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const user = useSelector((state) => state.userReducer.userInfo)
    const type = useSelector((state) => state.settingReducer.type)
    const dispatch = useDispatch<any>()
    const changeName = () => dispatch(changeNameAction(name))

    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [])

    const changeAge = () => dispatch(changeAgeActionAsync(age))

    return (
        <Card>
            <Space>
                <p>用户名：{user.name}</p>
                <Input value={name} onChange={(e) => setName(e.target.value)}/>
                <Button type={type} onClick={changeName}>修改姓名</Button>
            </Space>
            <Divider/>
            <Space>
                <p>手机号：{user.age}</p>
                <Input value={age} onChange={e => setAge(Number(e.target.value))}/>
                <Button type={type} onClick={changeAge}>修改年龄</Button>
            </Space>
        </Card>
    )
}

export default UserInfo;
