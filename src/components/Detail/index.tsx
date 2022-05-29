import {useEffect, useState} from "react";
import {getProduct} from "../../api";
import {Card, Spin} from "antd";

export interface Product {
    name: string
    price: number
}

const DetailPage = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        fetchProduct().then()
    }, [])
    const fetchProduct = async () => {
        setLoading(true);
        const data = await getProduct().catch(e => console.log(e))
        setLoading(false)
        if (data) {
            setProduct(data)
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
