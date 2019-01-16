import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../Employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
employees:IEmployee[];
  constructor(private employeeservice:EmployeeServiceService) { }
  ngOnInit() {
    this.employeeservice.getemployees().
   subscribe(
      employees=>this.employees=employees,
      error=>console.log('errors'),
      () => console.log('HTTP request completed.')
     );
  }

}
