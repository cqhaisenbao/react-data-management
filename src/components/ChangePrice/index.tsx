import {Card, Input, Space} from "antd";
import {useDispatch, useSelector} from "../../store/hooks";
import {changePriceSlice} from "../../store/changePriceReducer/slice";
import React from "react";

const ChangePrice = () => {
    const newPrice = useSelector((state) => state.changePriceSlice.newPrice);
    const dispatch = useDispatch()
    const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch((changePriceSlice.actions.changePrice(e.target.value)))
    }
    return (
        <Card>
            <Space>
                希望价格：<Input onChange={changePrice} value={newPrice}/>
            </Space>
        </Card>
    )
}

export default ChangePrice
