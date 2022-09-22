import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueillComponent } from './accueill/accueill.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorsComponent } from './errors/errors.component';
import { GuardAdminGuard } from './guards/guard-admin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : '' , component : AccueillComponent, canActivate : [GuardAdminGuard]},
  {path : 'article' , component : HomeComponent , canActivate : [GuardAdminGuard]},
  {path : 'accueil' , component : AccueillComponent , canActivate : [GuardAdminGuard]},
  {path : 'addArticle' , component : AddArticleComponent , canActivate : [GuardAdminGuard]},
  {path : 'addArticle/:id' , component : AddArticleComponent , canActivate : [GuardAdminGuard]},
  {path : 'contact' , component : ContactComponent , canActivate : [GuardAdminGuard]},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : '404' , component : ErrorsComponent , canActivate : [GuardAdminGuard]},
  {path : '**' , component : ErrorsComponent , canActivate : [GuardAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
