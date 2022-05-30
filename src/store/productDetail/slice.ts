import {createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import {getProduct} from "../../api";
import {changePriceSlice} from "../changePriceReducer/slice";

interface ProductDetailState {
    loading: boolean
    error: string | null
    data: any
}

const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null
}

export const getProductDetail = createAsyncThunk<any, number>(
    'productDetail/getProductDetail',
    async () => {
        return await getProduct()
    })

export const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {},
    extraReducers: {  // 处理异步reducer
        [getProductDetail.pending.type]: (state) => {
            state.loading = true
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false
            state.error = action.payload
        },
        [changePriceSlice.actions.changePrice.type]: (state, action: PayloadAction<number>) => {
            state.data.price = action.payload
        }
    }
})
