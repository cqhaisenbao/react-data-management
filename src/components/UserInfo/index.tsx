import {Button, Card, Divider, Input, Space} from "antd";
import {useSelector, useDispatch} from "../../store/hooks";
import {useEffect, useState} from "react";
import {changeNameAction, setUserInfoAction} from "../../store/userReducer/userActionCreator";
import {getUserInfo} from "../../api";

const UserInfo = () => {
    const [name, setName] = useState('')
    const user = useSelector((state) => state.userReducer.userInfo)
    const type = useSelector((state) => state.settingReducer.type)
    const dispatch = useDispatch()
    const changeName = () => dispatch(changeNameAction(name))

    useEffect(() => {
        fetchUserInfo()
    }, [])

    const fetchUserInfo = async () => {
        const res = await getUserInfo()
        dispatch(setUserInfoAction(res))
    }

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
                <Input/>
                <Button type={type}>修改年龄</Button>
            </Space>
        </Card>
    )
}

export default UserInfo;
