import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-tasks',
  templateUrl: './employee-tasks.component.html',
  styleUrls: ['./employee-tasks.component.css']
})
export class EmployeeTasksComponent implements OnInit {
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
