export interface IAuthInitialState {
    token: string;
    user_id: string;
    user_role: number;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export interface IAuthPayload {
    user_id: string;
    user_token: string;
    user_role: number;
}
