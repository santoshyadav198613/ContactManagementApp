import { Component, OnInit, Inject } from '@angular/core';

import { Employee } from './employee';
import { LoginService } from '../service/login/login.service';

import { ProductService } from '../service/product/product.service';
import { IValueProvider } from '../service/valueProvider/IvalueProvider';
import { APPCONFIG } from '../service/valueProvider/valueProvider';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  // template: '<h1>Employee from template tag</h1>',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empName: string = 'Deepak';
  lastName: string = 'Test';
  empId: number = 1;
  visible: boolean = false;
  employeeList: Employee[] = [
    { id: 1, name: 'Jay', address: 'Mumbai', dob: new Date('12-Nov-1986'), salary: 45000 },
    { id: 2, name: 'Deepak', address: 'Mumbai', dob: new Date('12-Nov-1988'), salary: 55000 },
    { id: 3, name: 'pushplatha', address: 'Mumbai', dob: new Date('12-Nov-1989'), salary: 65000 },
    { id: 4, name: 'Shawn', address: 'Mumbai', dob: new Date('12-Nov-1987'), salary: 75000 },
    { id: 5, name: 'Vijay', address: 'Mumbai', dob: new Date('12-Nov-1985'), salary: 85000 },
  ];
  empRole: string = 'Super Admin';
  // employeeList : Array<Employee> = 
  empFromChild: Employee = new Employee();
  constructor(private productService: ProductService,
    public loginService: LoginService,
    @Inject(APPCONFIG) private value: IValueProvider) { }

  ngOnInit(): void {
      console.log(this.value.pageSize);
      console.log(this.value);
  }


  toggle() {
    this.productService.addProduct();
    this.visible = !this.visible;
  }


  employeefromChild(emp: Employee) {
    this.empFromChild = emp;
  }
}





