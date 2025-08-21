import axios, { type AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IUserSignInPayload } from "../../types/signIn/SignIn";

export const UserSignIn = createAsyncThunk<
    AxiosResponse<any> | undefined, // The type returned by the thunk (AxiosResponse or undefined if error)
    IUserSignInPayload               // The payload type (your login details)
>(
    "authentication/signIn", // Thunk name (used in Redux slice actions)

    async ({ signInDetails }) => {
        // First, get CSRF cookie (needed for Laravel Sanctum authentication)
        return axios.get("/sanctum/csrf-cookie").then(async () => {
            try {
                // Send login request to your Laravel API
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/sign-in", // API endpoint
                    signInDetails                        // Login payload (email, password, etc.)
                );

                // If login successful (HTTP 200)
                if (response.status === 200) {
                    // Return the response data (this will be stored in Redux state automatically)
                    return response.data;
                }
            } catch (error) {
                // If error happens (e.g. wrong credentials, server issue)
                console.log(error);
            }
        });
    }
);

