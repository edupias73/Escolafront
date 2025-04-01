import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {

  lista:Aluno [] = [];

  constructor(){
    this.lista.push(new Aluno(1,'joao','126122','459978','2b'));
    this.lista.push(new Aluno(1,'joao','126122','459978','2b'));
    this.lista.push(new Aluno(1,'joao','126122','459978','2b'));
    this.lista.push(new Aluno(1,'joao','126122','459978','2b'));
  }
}
