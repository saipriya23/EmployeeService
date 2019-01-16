import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { IEmployee } from '../Employee';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // registerForm: FormGroup;
 // submitted = false;
employees:IEmployee[]
  constructor(private employeeservice:EmployeeServiceService) { }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
  //});
  }
  // get f() { return this.registerForm.controls; }

  // onSubmit() {
  //     this.submitted = true;

  //     // stop here if form is invalid
  //     if (this.registerForm.invalid) {
  //         return;
  //     }

  //     alert('SUCCESS!! :-)')
  // }
 Register()
 {
  this.employeeservice.getemployees().
  subscribe(
     employees=>this.employees=employees);
 }
}
