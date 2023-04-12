import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticatonService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService:BasicAuthenticatonService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'imran'
    // let password = 'abc'
    // let basicAuthHeaderString = 'Basic ' +window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHeaderString && username){
    request = request.clone({
      setHeaders : {Authorization:basicAuthHeaderString}
    })
  }
    return next.handle(request);
  }





  
}
