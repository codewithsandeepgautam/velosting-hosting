import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: 0,
    prize: "INR",
    data: [],
};
export const counterSlice = createSlice({
    name: 'planPrize',
    initialState,
    reducers: {
        setPrize: (state, action) => {
            state.prize = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});
export const { setPrize, setData } = counterSlice.actions;
export default counterSlice.reducer;
