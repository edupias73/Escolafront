import { Routes } from '@angular/router';
import { LoginlistComponent } from './components/layout/login/login-list/loginlist.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AlunoListComponent } from './components/aluno/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './components/aluno/aluno-form/aluno-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginlistComponent },
  { path: 'admin', component: PrincipalComponent, children:[
    {path: 'alunos', component: AlunoListComponent}
   
   
  ]}
  
];
