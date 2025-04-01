export class Aluno {
    
    id!: number;
    nome!: string;
    cpf!: string;
    telefone!: string;
    turma!: string;

    constructor (id:number,nome:string,cpf:string,telefone:string,turma:string){

    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.turma = turma;
    
    }
}