import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  constructor(private data: DataService){}
  ngOnInit(): void {
    
  }
  
}

