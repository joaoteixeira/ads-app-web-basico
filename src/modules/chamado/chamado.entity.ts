export class Chamado {
    id: number;

    titulo: string;

    descricao: string;

    dataAbertura?: Date;

    dataFechamento?: Date;

    situacao?: string;

    constructor() {
        this.situacao = 'Aberto';
        this.dataAbertura = new Date();
    }
}