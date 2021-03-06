import { Component, OnInit, Input  } from '@angular/core';
import { Employee } from '../Employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee!: Employee ;
 /*employee: Employee = {
  id: 1,
  name: 'Windstorm'
};*/

  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id')!.valueOf;
    this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee);
  }
  goBack(): void {
    this.location.back();
  }
}
