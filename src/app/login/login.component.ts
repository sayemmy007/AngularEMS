import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticatonService } from '../service/http/hardcoded-authentication.service';
import { BasicAuthenticatonService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, 
    public hardcodedAuthenticationService:HardcodedAuthenticatonService,
    public basicAuthenticationService:BasicAuthenticatonService){}
  ngOnInit(): void {
  }

  username = 'imran'
  password = ''
  errorMsg = 'Invalid Credentails'
  invalidLogin = false

  handleLogin(){
    //console.log(this.username);
   // if(this.username === 'imran' && this.password === 'abc'){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidLogin = false
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin = true
    }
  }
  // handleBasicAuthLogin(){
  //   this.basicAuthenticationService.executeBasicAuthenticationService(this.username,this.password).subscribe(
  //     data =>{console.log(data)
  //             this.router.navigate(['welcome', this.username])
  //             this.invalidLogin=false},
  //     error=>{console.log(error)
  //             this.invalidLogin=true})
  //    }

  
  handleJWTAuthLogin(){
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password).subscribe(
      data =>{console.log(data)
              this.router.navigate(['welcome', this.username])
              this.invalidLogin=false},
      error=>{console.log(error)
              this.invalidLogin=true})
     }




}
