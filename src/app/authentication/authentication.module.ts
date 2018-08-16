import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule} from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes:Routes=[
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegistrationComponent
},
{
  path:'forgotpassword',
  component:ForgotpasswordComponent
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotpasswordComponent]
})
export class AuthenticationModule { }
