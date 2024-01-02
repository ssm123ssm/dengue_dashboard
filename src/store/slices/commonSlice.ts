import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatEnabled: false,
    temp: undefined
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        enableChat: (state, { payload }) => {
            state.chatEnabled = payload;
        },
        setTemp: (state, { payload }) => {
            state.temp = payload;
        }
    }
});

export const chatEnabled = (state: any) => state.chatEnabled;

export const { enableChat, setTemp } = commonSlice.actions;

export default commonSlice.reducer;