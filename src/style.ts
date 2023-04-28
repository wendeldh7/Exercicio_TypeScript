class pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string{
        return `${this.nome} diz oi`;
    }
}