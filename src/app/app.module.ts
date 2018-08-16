import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
//import { AuthenticationComponent } from './authentication/authentication.component';
const routes:Routes=[
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
  path:'auth',
  loadChildren:'./authentication/authentication.module#AuthenticationModule'
}]
@NgModule({
  declarations: [
    AppComponent,

   // AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
