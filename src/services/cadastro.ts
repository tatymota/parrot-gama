import baseApi from "./api";

interface CadastroPayload {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    apartamento: string;
}

export function cadastro(payload: CadastroPayload) {
    return baseApi.post('/cadastro', payload)
};