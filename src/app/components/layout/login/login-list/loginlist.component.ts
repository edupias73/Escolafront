import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginlist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginlist.component.html',
  styleUrl: './loginlist.component.scss'
})
export class LoginlistComponent {

    Usuario!: string;
    Senha!: string;

  router = inject(Router);

    logar(){
      if(this.Usuario == "admin" && this.Senha == "admin"){
        this.router.navigate(['admin/alunos'])
      }else
      alert('usuario ou senha invalidos!');
    }

}
