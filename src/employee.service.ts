import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Define employee data
  private employees = [
    { id: 1, fname: 'Mukesh', lname: 'Kumar', email: 'mukesh.@example.com' },
    { id: 2, fname: 'Nikhil', lname: 'Kumar', email: 'hello.smith@example.com' },
    { id: 3, fname: 'Michael', lname: 'Johnson', email: 'michael.johnson@example.com' }
  ];

  constructor() { }

  // Method to return employee data
  getEmployees() {
    return this.employees;
  }
}
