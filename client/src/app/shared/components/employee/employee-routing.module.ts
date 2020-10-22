import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';


const routes: Routes = [{
  path: "", component: EmployeeLayoutComponent, children: [
    { path: "", component: EmployeeDashboardComponent },
    { path: "myTasks", component: EmployeeTasksComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
