import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticatonService } from '../service/http/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  isUserLoggedIn:boolean=false;
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticatonService){}
  ngOnInit() {
    this.isUserLoggedIn=this.hardcodedAuthenticationService.isUserLoggedIn(); 
  }

}
