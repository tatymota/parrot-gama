import baseApi from "./api";

interface CadastroPayload {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    apartamento: string;
}

export function Cadastro(payload: CadastroPayload) {
    return baseApi.post('/cadastro', payload)
};

export function listarUsarios() {
    return baseApi.post('/cadastro');
}