export const setStorage = (token) => {
   
    localStorage.setItem("idToken", token);
}

export const getStorage = () => {
    return localStorage.getItem("idToken");
}

export const deleteStorage = () => {
    localStorage.removeItem("idToken");
}

export const getUserData = () => {
    return localStorage.getItem('idToken');
}