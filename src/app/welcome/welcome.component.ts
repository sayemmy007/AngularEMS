import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit  {

  message = 'some message'
  name = ''
  welcomeMsgFromService!:string

  

  constructor(private route:ActivatedRoute,private service:WelcomeDataService){}
 
 
  ngOnInit(): void {
   
  console.log(this.message)
  //console.log(this.route.snapshot.params['name'])
  this.name = this.route.snapshot.params['name'];
  }


  getWelcomeMsg(){
    //console.log(this.service.executeHelloWorldBeanService);
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error    => this.handleErrorResponse(error)   
      );
    console.log("last line getwelcomemssg");
  }
  
  getWelcomeMsgWihParameter(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error    => this.handleErrorResponse(error)   
      );
    console.log("last line getwelcomemssg");
  
  }


  handleSuccessfulResponse(response:any){
    this.welcomeMsgFromService = response.message
    console.log(response);
    console.log(response.message);
  }

  handleErrorResponse(error:any){
    this.welcomeMsgFromService = error.error.message
    console.log(error);
    console.log(error.error.message);
   
  }


}

