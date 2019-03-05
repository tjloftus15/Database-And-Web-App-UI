import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {BarService, Bar, BarMenuItem} from '../bar.service';
import { HttpResponse } from '@angular/common/http';
declare const Highcharts: any;

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})



export class BarDetailsComponent implements OnInit {

  barName: string;
  barDetails: Bar;
  menu: BarMenuItem[];
  

  constructor(
    private barService: BarService,
    private route: ActivatedRoute,
    
  ) { 
    route.paramMap.subscribe((paramMap)=>{
      this.barName = paramMap.get('bar');

      barService.getBar(this.barName).subscribe(
        data =>{
          this.barDetails=data;
        },
        (error: HttpResponse<any>) => {
          if(error.status === 404){
            alert('bar not found');
          }else{
            console.error(error.status + ' - ' + error.body);
            alert('An error occured on the server. Please check the browser console.')
          }
        }
      );
      barService.getMenu(this.barName).subscribe(
        data =>{
          this.menu = data
        }
        
      );
      this.barService.getHighSpenders(this.barName).subscribe(
        data =>{
          console.log(data);
  
          const drinkers = [];
          const counts = [];
  
          data.forEach(drinker => {
            drinkers.push(drinker.drinker);
            counts.push(drinker.total);
          });
          this.renderChart1(drinkers, counts);
        }
      );
      this.barService.getPopularBeers(this.barName).subscribe(
        data =>{
          console.log(data);
  
          const beers = [];
          const counts = [];
  
          data.forEach(beer => {
            beers.push(beer.name);
            counts.push(beer.total);
          });
          this.renderChart2(beers, counts);
        }
      );
      this.barService.getPopularManufacturers(this.barName).subscribe(
        data =>{
          console.log(data);
  
          const manfs = [];
          const counts = [];
  
          data.forEach(manf => {
            manfs.push(manf.manufacturer);
            counts.push(manf.total);
          });
          this.renderChart3(manfs, counts);
        }
      );
      this.barService.getBusyHours(this.barName).subscribe(
        data => {
          console.log(data);

          const hours = [];
          const counts= [];

          data.forEach(hour => {
            hours.push(hour.hour);
            counts.push(hour.total);
          });
          this.renderChart4(hours,counts);
        }
      );
      this.barService.getBusyDays(this.barName).subscribe(
        data => {
          console.log(data);

          const days = [];
          const counts = [];

          data.forEach(day =>{
            days.push(day.day);
            counts.push(day.total);
          });
          this.renderChart5(days, counts);
        }
      )
    });
  }

  ngOnInit() {
  }

  renderChart1(drinkers: string[], counts: number[]){
    Highcharts.chart('Table1', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Top 10 Largest Spenders'
      },
      xAxis:{
        categories: drinkers,
        title: {
          text: 'Drinker'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Money Spent ($)'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels:{
            enabled: true
          }
        }
      },
      legend: {
        enabled:false
      },
      credits:{
        enabled: false
      },
      series: [{
        data: counts
      }]
    });

    
  }
  renderChart2(beers: string[], counts: number[]){
    Highcharts.chart('Table2', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Top 10 Best Selling Beers'
      },
      xAxis:{
        categories: beers,
        title: {
          text: 'Items'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Beers Sold'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels:{
            enabled: true
          }
        }
      },
      legend: {
        enabled:false
      },
      credits:{
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
  }
  renderChart3(manfs: string[], counts: number[]){
    Highcharts.chart('Table3', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Top 5 Best Selling Beer Manufacturers'
      },
      xAxis:{
        categories: manfs,
        title: {
          text: 'Manufacturer'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Beers Sold'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels:{
            enabled: true
          }
        }
      },
      legend: {
        enabled:false
      },
      credits:{
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
    
  }
  renderChart4(hours: string[], counts: number[]){
    Highcharts.chart('Table4', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Busiest Hours of the Day'
      },
      xAxis:{
        categories: hours,
        title: {
          text: 'Hour of the Day (0=12am, 23=11:00pm)'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels:{
            enabled: true
          }
        }
      },
      legend: {
        enabled:false
      },
      credits:{
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
  }

  renderChart5(days: string[], counts: number[]){
    Highcharts.chart('Table5', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Busiest Days of the Week'
      },
      xAxis:{
        categories: days,
        title: {
          text: 'Day of the Week (1=Sunday, 7=Saturday)'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Transactions'
        },
        labels: {
          overflow: 'justify'
        }
      },
      plotOptions: {
        bar: {
          dataLabels:{
            enabled: true
          }
        }
      },
      legend: {
        enabled:false
      },
      credits:{
        enabled: false
      },
      series: [{
        data: counts
      }]
    });
  }
}
