import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => import('./shared/components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "employee",
    loadChildren: () => import('./shared/components/employee/employee.module').then(m => m.EmployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
