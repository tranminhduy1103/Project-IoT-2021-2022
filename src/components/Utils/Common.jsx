export const getUser = () => {
    const userStr = sessionStorage.getItem("user");
    if(userStr) return JSON.parse(userStr);
    else return null;
}

export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}


export const setUserSession = (token, user) => {  
    setUserSession.setItem("token", token);
    setUserSession.setItem("user", JSON.stringify(user));

}

export const removerUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}