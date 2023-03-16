export class Aluno {
  
  constructor() {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.metas = {};
    this.github_login = "";
  }

  nome: string;
  cpf: string;
  email: string;
  metas: {
    [key: string]: string;
  };
  github_login: string;


  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.nome = this.nome;
    aluno.cpf = this.cpf;
    aluno.email = this.email;
    aluno.metas = this.cloneMetas();
    return aluno;
  }

  cloneMetas(): {
    [key: string]: string;
  } {
    var metas: {
      [key: string]: string;
    } = {};
    
    for (let key in this.metas) {
      metas[key] = this.metas[key];
    }
    return metas;
  }
}
