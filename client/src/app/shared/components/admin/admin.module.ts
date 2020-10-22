import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [AdminDashboardComponent, AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdminModule { }
