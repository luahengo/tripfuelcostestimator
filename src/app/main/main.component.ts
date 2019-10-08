import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  
  title:string = "Trip Fuel Estimator";
  distance:any;
  cartype:any;
  results:any;
  fuelCost:any = 12.35;
  sedan_fe:any = 11;
  bakkie_fe:any = 7;
  
  constructor() { 
  }

  ngOnInit() {
 
  }


  calculateCost(dist:any,type:any):any{
    if (type == 'Sedan'){
      return Math.round((dist/this.sedan_fe)*this.fuelCost).toFixed(2); 
      
    }
    if (type == 'Bakkie'){
      return Math.round((dist/this.bakkie_fe)*this.fuelCost).toFixed(2); 
    }
  }

  calculateResults(dist:any,type:any): void {
    this.results = this.calculateCost(dist,type);
  }

 
  

}
