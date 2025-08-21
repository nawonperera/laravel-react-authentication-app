import React, { useEffect, useState } from "react";
import SignInForm from "./SignInForm.tsx";
import type { ISignInState } from "../../utilities/types/signIn/SignIn";
import { UserSignIn } from "../../utilities/api/auth/UserSignIn.ts";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store.tsx";
import { useNavigate } from "react-router";

const SignIn: React.FC = () => {
    const navigate = useNavigate();

    const [signInDetails, setSignInDetails] = useState<ISignInState>({
        email: "",
        password: "",
    });

    const { user_role, isAuthenticated } = useSelector(
        (state: RootState) => state.authentication,
    );

    useEffect(() => {
        if (isAuthenticated && user_role === 1) {
            navigate("/dashboard");
        }
    }, [user_role, isAuthenticated]);

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
        event.preventDefault(); // Prevent the default form submission behavior. Not reloading the page.
        // console.log(signInDetails);
        await dispatch(UserSignIn({ signInDetails }));
    };

    return (
        <SignInForm
            handleInputFieldChange={handleInputFieldChange}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
