import { type } from 'os';

type tipo = 'GERENTE' | 'VENDEDOR';
export interface Funcionario {
    id: number;
    nome: string;
    email: string;
    cpfCnpj: string;
    dataCadastro: number;
    ativo: boolean;
    tipoFuncionario: tipo;
}
