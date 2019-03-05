import { Component, OnInit } from '@angular/core';
import {DrinkerServiceService, Drinker} from '../drinker-service.service';

@Component({
  
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {

  drinker: Drinker[];

  constructor(public drinkerService: DrinkerServiceService) {  this.getDrinkers()}

  ngOnInit() {
    this.getDrinkers();
  }

  getDrinkers(){
    this.drinkerService.getDrinkers().subscribe(
      data =>{
        this.drinker=data;
      }
    );
    
  }


}
