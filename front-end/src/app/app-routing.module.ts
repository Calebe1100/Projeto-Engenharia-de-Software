import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { DisciplinesRegisterComponent } from './pages/disciplines-register/list/disciplines-register.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: AccountComponent},
  {path: 'account', component: AccountComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'disciplines-register', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
