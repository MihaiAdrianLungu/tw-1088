import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orders: []
}

export const ordersSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.orders = [...action.payload]
        },
        deleteOrder: (state, action) => {
            state.orders = state.orders.filter(order => order.id !== action.payload);
        }
    }
});

export const { setOrders, deleteOrder } = ordersSlice.actions;

export default ordersSlice.reducer;