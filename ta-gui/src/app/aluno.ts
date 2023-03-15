export class Aluno {
  constructor(nome: string, CPF: string, email: string, github_login: string) {
    this.nome = nome;
    this.cpf = CPF;
    this.email = email;
    this.github_login = github_login;
  }
  nome: string;
  cpf: string;
  email: string;
  github_login: string;
}
