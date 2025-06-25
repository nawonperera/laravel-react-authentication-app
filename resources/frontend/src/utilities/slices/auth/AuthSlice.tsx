import { createSlice } from "@reduxjs/toolkit";
import type { IAuthInitialState } from "../../types/slices/authSlice";
import { UserSignIn } from "../../api/auth/UserSignIn.ts";

interface IAuthPayload {
    user_id: string;
    user_token: string;
}

const initialState: IAuthInitialState = {
    token: "",
    user_id: "",
    isAuthenticated: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(UserSignIn.pending, (state) => {
                state.isLoading = true;
                state.token = '';
                state.isAuthenticated = false
            })
            .addCase(
                UserSignIn.fulfilled,
                (state,  payload) => {
                    setPayloadValuesIntoStore(state, { payload })
                },
            )
            .addCase(UserSignIn.rejected, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
            });
    },
});

const setPayloadValuesIntoStore = (state: IAuthInitialState, payload: IAuthPayload) => {
    if(!payload){
        return
    }
    state.user_id = payload.user_id;
    state.token = payload.user_token;
    state.isAuthenticated = true;
    state.isLoading = false;

}

export default authSlice.reducer;
