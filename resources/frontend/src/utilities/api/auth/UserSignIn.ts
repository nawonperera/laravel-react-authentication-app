import axios, { type AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUserSignInPayload } from "../../types/signIn/SignIn";

export const UserSignIn = createAsyncThunk<
    AxiosResponse<any> | undefined,
    IUserSignInPayload
>("authentication/signIn", async ({ signInDetails }) => {
    return axios.get("/sanctum/csrf-cookie").then(async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/sign-in",
                signInDetails,
            );
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    });
});
