import { Component, OnInit } from '@angular/core';


import { BarService, Bar } from '../bar.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  bar: Bar[];
  constructor(
    public barService: BarService
  ) { 
    this.getBars();
  }

  ngOnInit() {
    
  }
  getBars(){
    this.barService.getBars().subscribe(
      data=>{
        this.bar=data;
      },
      error => {
        alert("could not retrieve a list of bars")
      }
    )
  }
}
