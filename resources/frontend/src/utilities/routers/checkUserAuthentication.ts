export const CheckUserAuthentication = (isAuthenticated: boolean) => {
    return isAuthenticated;
};

export const CheckUserIsAdmin = (userRole: number) => {
    return userRole === 1;
};

export const checkUserTokenNotEmpty = (userToken: string) => {
    return userToken !== "";
};
