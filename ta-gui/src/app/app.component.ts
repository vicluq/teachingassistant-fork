import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  aluno: Aluno = { nome: '', cpf: '', email: '', github_login: '' };
}
export class Aluno {
  constructor(nome: string, cpf: string, email: string, github_login: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.github_login = github_login;
  }

  nome: string;
  cpf: string;
  email: string;
  github_login: string;
}
