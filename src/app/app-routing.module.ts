import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { JasperComponent } from './jasper/jasper.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './route-guard.service';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'employees', component: EmployeeListComponent, canActivate:[RouteGuardService]},
  {path:'', redirectTo:'employees', pathMatch:'full'},
  {path:'create-employee', component: CreateEmployeeComponent, canActivate:[RouteGuardService]},
  {path:'update-employee/:id', component: UpdateEmployeeComponent},
  {path:'employee-details/:id', component: EmployeeDetailsComponent, canActivate:[RouteGuardService]},
  {path:'jasper', component: JasperComponent, canActivate:[RouteGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
