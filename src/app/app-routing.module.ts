import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlogComponent } from './userlog/userlog.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
{path:'regist', component:RegistrationComponent},
{path:'userlog',component:UserlogComponent},
{path:'home',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
