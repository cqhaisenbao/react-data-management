import {Button, Card, Divider, Input, Space} from "antd";
import {useSelector} from "../../store/hooks";

const UserInfo = () => {
    const user = useSelector((state) => state.userReducer.userInfo)
    const type = useSelector((state) => state.settingReducer.type)
    return (
        <Card>
            <Space>
                <p>用户名：{user.name}</p>
                <Input/>
                <Button type={type}>修改姓名</Button>
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
