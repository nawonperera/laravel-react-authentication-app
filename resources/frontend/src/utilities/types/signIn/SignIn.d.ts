import React from "react";

export interface ISignInState{
    email: string,
    password: string,
}

export interface ISingInFormProps {
    handleInputFieldChange: (event:React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (event:React.FormEvent) => Promise<void>
}
