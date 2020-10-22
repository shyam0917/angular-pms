import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeLayoutComponent } from './employee-layout/employee-layout.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeCalendarComponent } from './employee-calendar/employee-calendar.component';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [EmployeeLayoutComponent, EmployeeDashboardComponent, EmployeeTasksComponent, EmployeeCalendarComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlatpickrModule.forRoot(),
    LayoutModule,
    FormsModule,
    NgbModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class EmployeeModule { }
