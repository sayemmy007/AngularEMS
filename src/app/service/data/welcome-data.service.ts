import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constant';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    let headers = new HttpHeaders({Authorization:basicAuthHeaderString})
   // return this.http.get<HelloWorldBean>('http://localhost:8080/helloworldBean');
        return this.http.get<HelloWorldBean>(`${API_URL}/helloworldBean`,{headers});
  }
  


 executeHelloWorldBeanServiceWithPathVariable(name:any){
  // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
  // let headers = new HttpHeaders({Authorization:basicAuthHeaderString})
  // return this.http.get<HelloWorldBean>(`http://localhost:8080/helloworld/pathVariable/${name}`,{headers});
  return this.http.get<HelloWorldBean>(`${API_URL}/helloworld/pathVariable/${name}`);
}

createBasicAuthenticationHttpHeader(){
  let username = 'imran'
  let password = 'abc'
  let basicAuthHeaderString = 'Basic ' +window.btoa(username + ':' + password);
  return basicAuthHeaderString;
}
}
