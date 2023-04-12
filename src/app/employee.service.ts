import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from'@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  
  private baseUrl = "http://localhost:8080/api/employees";
  constructor(private httpClient : HttpClient) { }

  getEmployeeList() : Observable<Employee[]>{
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({Authorization:basicAuthHeaderString})
   // return this.httpClient.get<Employee[]>(`${this.baseUrl}`,{headers});
   return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee:Employee):Observable<object>{
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({Authorization:basicAuthHeaderString})
    // return this.httpClient.post(`${this.baseUrl}/save`,employee,{headers});
    return this.httpClient.post(`${this.baseUrl}/save`,employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id:number):Observable<object>{  
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({Authorization:basicAuthHeaderString})
    //return this.httpClient.delete(`${this.baseUrl}/${id}`,{headers});
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }



  // createBasicAuthenticationHttpHeader(){
  //   let username = 'imran'
  //   let password = 'abc'
  //   let basicAuthHeaderString = 'Basic ' +window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }



 
   
}
