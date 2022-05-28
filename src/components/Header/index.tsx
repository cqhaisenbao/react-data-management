import {Button, Card} from "antd";
import {useDispatch} from "react-redux";
import {useSelector} from "../../store/hooks";

const Header = () => {
    const type = useSelector((state) => state.settingReducer.type);
    const dispatch = useDispatch()
    const changeType = () => dispatch({type: 'changeType', payload: type === 'primary' ? 'danger' : 'primary'});
    return (
        <Card>
            <Button onClick={changeType} type={type}>
                改变主题
            </Button>
        </Card>
    )
}

export default Header
