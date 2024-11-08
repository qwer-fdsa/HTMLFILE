import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class EmployeeListComponent implements OnInit {

  employees: any[] = [];

  constructor(private employeeService: EmployeeService) { }

  
  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }
}
