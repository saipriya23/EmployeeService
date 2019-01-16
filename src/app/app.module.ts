import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    RegisterComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'Employees',
        component:EmployeesComponent
      },
      { path: '',
       redirectTo: 'Employees',
        pathMatch: 'full' },
        {
          path:'Register',
          component:RegisterComponent
        },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
