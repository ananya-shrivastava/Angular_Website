import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messageService: MessageService) { }

  getEmployee(id: number): Observable<Employee> {
    this.messageService.add(`EmployeeService: fetched employee id=${id}`);
    return of(EMPLOYEES.find(employee => employee.id === id)!);
  }

  getEmployees(): Observable<Employee[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('EmployeeService: fetched employees');
    return of(EMPLOYEES);
  }

 

}
