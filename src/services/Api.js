import axios from 'axios';
import { getUserData } from './Storage';
axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyDnF5nQ2LLwpirFB8Vikoofef4PpjZLmUY";
const signup = `/accounts:signUp?key=${API_KEY}`;
const login = `/accounts:signInWithPassword?key=${API_KEY}`;
const Userdetail = `/accounts:lookup?key=${API_KEY}`;

export const signupApi =async (input) => {
    const data = { displayName: input.name, email: input.email, password: input.password };
    return await axios.post(signup,data);
}

export const loginApi = async (input) => {
    const data = {email: input.email, password: input.password };
    return await axios.post(login, data);
}

export const userDetailApi = () => {
    const data = { idToken: getUserData() }
    return axios.post(Userdetail, data);

}