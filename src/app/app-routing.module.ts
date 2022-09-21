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
  {path : 'article' , component : HomeComponent},
  {path : 'accueil' , component : AccueillComponent , canActivate : [GuardAdminGuard]},
  {path : 'addArticle' , component : AddArticleComponent},
  {path : 'addArticle/:id' , component : AddArticleComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : '404' , component : ErrorsComponent},
  {path : '**' , component : ErrorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
