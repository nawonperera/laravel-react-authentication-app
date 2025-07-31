import { createSlice } from "@reduxjs/toolkit";
import type { IAuthInitialState } from "../../types/slices/authSlice";
import { UserSignIn } from "../../api/auth/UserSignIn.ts";

interface IAuthPayload {
    userId: string;
    token: string;
    userRole: string;
}

const initialState: IAuthInitialState = {
    token: "",
    user_id: "",
    user_role: "",
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
                state.token = "";
                state.isAuthenticated = false;
            })
            .addCase(UserSignIn.fulfilled, (state, action) => {
                setPayloadValuesIntoStore(
                    state,
                    action.payload?.data as IAuthPayload,
                );
            })
            .addCase(UserSignIn.rejected, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
            });
    },
});

const setPayloadValuesIntoStore = (
    state: IAuthInitialState,
    payload: IAuthPayload,
) => {
    if (!payload) {
        return;
    }
    state.user_id = payload.userId;
    state.token = payload.token;
    state.user_role = payload.userRole;
    state.isAuthenticated = true;
    state.isLoading = false;
};

export default authSlice.reducer;
