import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
   firstName!:string;

  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
     this.getEmployees();
  }

  private getEmployees(){
    //debugger
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    });
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id:number){
   // debugger
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
       this.getEmployees();
  //  window.location.reload();
    })
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details',id]);
  }

  Search(){
    if(this.firstName!=""){
    this.employees=this.employees.filter(res =>{
      return res.firstName?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
    });
  }else if (this.firstName == ""){
    this.ngOnInit();
  }
}
}


  
