import baseApi from '../api';

interface LoginPayload {
    email: string;
    senha: string;
}

export function Login(payload: LoginPayload){
    return baseApi.post('/login', payload);
}