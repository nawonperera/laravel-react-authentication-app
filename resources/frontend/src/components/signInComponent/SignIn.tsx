import React, { useState } from "react";
import SignInForm from "./SignInForm.tsx";
import type { ISignInState } from "../../utilities/types/signIn/SignIn";
import axios from "axios";

const SignIn: React.FC = () => {
    const [signInDetails, setSignInDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });

    const handleInputFieldChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        const { name, value } = event.target; //name = "email" or "password", and value = value that we type in the input field.
        //console.log(name, value);

        setSignInDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent):Promise<void> => {
        event.preventDefault();
        console.log(signInDetails);

        // return await axios.get('/sanctum/csrf-cookie').then((res) => {
        //     const response = axios.post("http://127.0.0.1:8000/api/sign-in", signInDetails);
        //     console.log(response);
        // })



    };

    return (
        <SignInForm
            handleInputFieldChange={handleInputFieldChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
