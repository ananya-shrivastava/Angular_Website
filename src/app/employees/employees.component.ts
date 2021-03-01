import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { FormsModule } from '@angular/forms'; 
import { EMPLOYEES } from '../mock-employees';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
        .subscribe(employees => this.employees = employees);
  }

}
