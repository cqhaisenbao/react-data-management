import {useEffect} from "react";
import {getProduct} from "../../api";
import {useSelector, useDispatch} from "../../store/hooks";
import {Card, Spin} from "antd";
import {productDetailSlice} from "../../store/productDetail/slice";

export interface Product {
    name: string
    price: number
}

const DetailPage = () => {
    const loading = useSelector((state) => state.productDetailSlice.loading);
    const product = useSelector((state) => state.productDetailSlice.data);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProduct().then()
    }, [])
    const fetchProduct = async () => {
        dispatch(productDetailSlice.actions.fetchStart())
        const data = await getProduct().catch(e => {
            dispatch(productDetailSlice.actions.fetchError(e))
        })
        if (data) {
            dispatch(productDetailSlice.actions.fetchSuccess(data))
            console.log(data)
        }
    }
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
