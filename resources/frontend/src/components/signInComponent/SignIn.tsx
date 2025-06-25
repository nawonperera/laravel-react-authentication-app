import React, { useState } from "react";
import SignInForm from "./SignInForm.tsx";
import type { ISignInState } from "../../utilities/types/signIn/SignIn";
import { UserSignIn } from "../../utilities/api/auth/UserSignIn.ts";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store.tsx";

const SignIn: React.FC = () => {
    const [signInDetails, setSignInDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });

    const dispatch = useDispatch<AppDispatch>();

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

    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        // console.log(signInDetails);
        await dispatch(UserSignIn({signInDetails}))
    };

    return (
        <SignInForm
            handleInputFieldChange={handleInputFieldChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
