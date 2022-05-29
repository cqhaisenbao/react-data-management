import {useEffect} from "react";
import {useSelector, useDispatch} from "../../store/hooks";
import {Card, Spin} from "antd";
import {getProductDetail} from "../../store/productDetail/slice";

export interface Product {
    name: string
    price: number
}

const DetailPage = () => {
    const loading = useSelector((state) => state.productDetailSlice.loading);
    const product = useSelector((state) => state.productDetailSlice.data);
    const dispatch = useDispatch<any>();

    useEffect(() => dispatch(getProductDetail(1)), [])

    return (
        <Spin spinning={loading}>
            <Card>
                <p>产品：{product?.name}</p>
                <p>价格：{product?.price}</p>
            </Card>

        </Spin>
    )
}

export default DetailPage
