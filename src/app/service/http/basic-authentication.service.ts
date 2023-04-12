import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'; 
import { API_URL } from 'src/app/app.constant';


@Injectable({
  providedIn: 'root'
})


export class BasicAuthenticatonService {

  constructor(private http:HttpClient) { }

  // executeBasicAuthenticationService(username:any,password:any){
  //   let basicAuthHeaderString = 'Basic '+window.btoa(username+':'+password)
  //   let headers = new HttpHeaders({Authorization:basicAuthHeaderString}) 
  //   return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
  //   {headers}).pipe(
  //     map(
  //       data=>{
  //         sessionStorage.setItem('authenticaterUser',username);
  //         sessionStorage.setItem('token',basicAuthHeaderString);
  //     return data;}));
  // }
 
 executeJWTAuthenticationService(username:any,password:any){
  return this.http.post<any>(`${API_URL}/authenticate`,
  {username,password}).pipe(
    map(
      data=>{
        sessionStorage.setItem('authenticaterUser',username);
        sessionStorage.setItem('token',`Bearer ${data.token}`);
    return data;}));
}




getAuthenticatedUser(){
  return sessionStorage.getItem('authenticaterUser')
}

 getAuthenticatedToken(){
  this.getAuthenticatedUser()
  return sessionStorage.getItem('token')
}

isUserLoggedIn(){
  let user = sessionStorage.getItem('authenticaterUSer')
  return!(user===null)
}

logout(){
  sessionStorage.removeItem('authenticaterUser')
  sessionStorage.removeItem('token')
}


}


export class AuthenticationBean{
  constructor(public message:string){}
}
 