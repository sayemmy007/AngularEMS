import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticatonService } from '../service/http/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  
  constructor(private hardcodedAuthenticationService:HardcodedAuthenticatonService){}
  
  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout();
    
  }

}