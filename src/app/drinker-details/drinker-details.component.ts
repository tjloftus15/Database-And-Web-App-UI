import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { DrinkerServiceService, Drinker, drinkerLikes, drinkerTrans} from '../drinker-service.service';
declare const Highcharts: any;

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {

  drinkerName: string;
  drinkerDetails: Drinker;
  trans: string;
  likes: drinkerLikes[];
  transactions: drinkerTrans[];

  constructor(
    private drinkerService: DrinkerServiceService,
    private route: ActivatedRoute
  ) {
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get('drinker');

      this.drinkerService.getDrinker(this.drinkerName).subscribe(
        data=>{
          this.drinkerDetails=data;
        }
      );

      drinkerService.getLikes(this.drinkerName).subscribe(
        data =>{
          this.likes=data;
        }
      );

      drinkerService.getDrinkerTransactions(this.drinkerName).subscribe(
        data => {
          this.transactions=data;
        }
      )
      this.drinkerService.getHighSpending(this.drinkerName).subscribe(
        data => {
          console.log(data);
          
          const bars = [];
          const counts = [];

          data.forEach(bar =>{
            bars.push(bar.bar);
            counts.push(bar.total);
          });
          this.renderChart1(bars, counts);
        }
      );
      this.drinkerService.getMostOrdered(this.drinkerName).subscribe(
        data => {
          console.log(data);
          
          const beers = [];
          const counts = [];

          data.forEach(beer =>{
            beers.push(beer.item);
            counts.push(beer.total);
          });
          this.renderChart2(beers, counts);
        }
      );

      this.drinkerService.getDaysSpending(this.drinkerName).subscribe(
        data =>{
          console.log(data);

          const days = [];
          const counts = [];

          data.forEach(day => {
            days.push(day.day);
            counts.push(day.total);
          });
          this.renderChart3(days, counts);

        }
      );
      this.drinkerService.getWeeksSpending(this.drinkerName).subscribe(
        data => {
          console.log(data);

          const weeks = [];
          const counts = [];
          data.forEach(week => {
            weeks.push(week.week);
            counts.push(week.total);
          });
          this.renderChart4(weeks, counts);
        }
      );

      this.drinkerService.getMonthsSpending(this.drinkerName).subscribe(
        data => {
          console.log(data);

          const months = [];
          const counts = [];
          data.forEach(month => {
            months.push(month.month);
            counts.push(month.total);
          });
          this.renderChart5(months, counts);
        }
      )

     
      

      
    });
   }

  ngOnInit() {
  }
  renderChart1(bars: string[], counts: number[]){
    Highcharts.chart('Table1', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Top Bars in Total Spending'
      },
      xAxis:{
        categories: bars,
        title: {
          text: 'Bar Name'
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
        text:'Top Ordered Beers'
      },
      xAxis:{
        categories: beers,
        title: {
          text: 'Beer Name'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Quantity Ordered'
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
  renderChart3(days: string[], counts: number[]){
    Highcharts.chart('Table3', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Days of the Week Where the Most Money was Spent'
      },
      xAxis:{
        categories: days,
        title: {
          text: 'Number of the Day of the Week (1 = Sunday, 7 = Saturday)'
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

  renderChart4(weeks: string[], counts: number[]){
    Highcharts.chart('Table4', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Weeks of the Year Where the Most Money was Spent'
      },
      xAxis:{
        categories: weeks,
        title: {
          text: 'Number of the Week in the Year (1 = 1st Week, 52 = Last Week)'
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
  renderChart5(months: string[], counts: number[]){
    Highcharts.chart('Table5', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Number of the Month in the Year Where Most Money Spent'
      },
      xAxis:{
        categories: months,
        title: {
          text: 'Month of the Year (1 = January, 12 = December)'
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
}
