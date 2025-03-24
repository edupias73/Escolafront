import { Routes } from '@angular/router';
import { LoginlistComponent } from './components/layout/login/login-list/loginlist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginlistComponent },
];
