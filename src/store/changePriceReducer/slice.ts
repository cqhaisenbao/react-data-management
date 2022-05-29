import {createSlice} from "@reduxjs/toolkit";

interface ChangePriceState {
    newPrice: number
}

const initialState: ChangePriceState = {
    newPrice: 0
}

export const changePriceSlice = createSlice({
    name: 'changePrice',
    initialState,
    reducers: {
        changePrice(state, action) {
            state.newPrice = action.payload
        }
    },
})
