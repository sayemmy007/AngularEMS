import { Component } from '@angular/core';
import { DownloadFileService } from '../download-file.service';

@Component({
  selector: 'app-jasper',
  templateUrl: './jasper.component.html',
  styleUrls: ['./jasper.component.css']
})
export class JasperComponent {

  constructor(private downloadFileService:DownloadFileService){}

  downloadFile(){
    
  }

}
