import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { VeiwComponent } from './veiw/veiw.component';

const routes: Routes = [
  {
    path:'' , component:LoginComponent
  },
  {
    path:'register' , component:RegisterComponent
  },
  {
    path:'dashboard' , component:DashboardComponent
  },
  {
    path:'todo' , component:TodoComponent
  },
  {
    path:'veiw' , component:VeiwComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
