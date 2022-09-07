import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ForgetPwdComponent } from './components/forget-pwd/forget-pwd.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'forgetPwd',component:ForgetPwdComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'admin',canActivate:[AuthGuard], loadChildren: ()=> import('./modules/admin/admin.module').then((admin)=>admin.AdminModule)},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
