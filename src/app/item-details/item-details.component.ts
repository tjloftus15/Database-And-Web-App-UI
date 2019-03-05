import { Component, OnInit } from '@angular/core';
import { ItemsService, ItemLocation } from '../items.service';
import { ActivatedRoute } from '@angular/router';
import {SelectItem} from 'primeng/components/common/selectitem';
declare const Highcharts: any;


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  itemName: string;
  itemLocations: ItemLocation[];
  manufacturer: string;

  filterOptions: SelectItem[];
  sortField: string;
  sortorder: number;

  constructor(private itemService: ItemsService,
    private route: ActivatedRoute
    ) {
      this.route.paramMap.subscribe((paramMap) => {
        this.itemName = paramMap.get('item');
        this.itemService.getBarSelling(this.itemName).subscribe(
          data => {
            this.itemLocations = data;
          }
        );
        this.itemService.getItemManufacturer(this.itemName).subscribe(
          data => {
            this.manufacturer = data;
          }
        );
        this.filterOptions = [
          {
            'label': 'Low price first',
            'value': 'low price'
          },
          {
            'label': 'High price first',
            'value': 'high price'
          },
          {
            'label': 'Most frequented first',
            'value': 'high customer'
          },
          {
            'label': 'Least frequented first',
            'value': 'low customer'
          }
        ];
        this.itemService.getHighBars(this.itemName).subscribe(
          data =>{
            console.log(data);
    
            const bars = [];
            const counts = [];
    
            data.forEach(bar => {
              bars.push(bar.bar);
              counts.push(bar.total);
            });
            this.renderChart1(bars, counts);
          }
        );
        this.itemService.getHighBuyers(this.itemName).subscribe(
          data =>{
            console.log(data);
    
            const drinkers = [];
            const counts = [];
    
            data.forEach(drinker => {
              drinkers.push(drinker.drinker);
              counts.push(drinker.total);
            });
            this.renderChart2(drinkers, counts);
          }
        );
        this.itemService.getTopMonths(this.itemName).subscribe(
          data =>{
            console.log(data);
    
            const months = [];
            const counts = [];
    
            data.forEach(month => {
              months.push(month.date - 48);
              counts.push(month.total);
            });
            this.renderChart3(months, counts);
          }
        );


      });



     }

  ngOnInit() {
  }

  sortBy(selectedOption: string){
    if(selectedOption === 'low price'){
      this.itemLocations.sort((a,b)=>{
        return a.price-b.price;
      })
    } else if(selectedOption ==='high price'){
      this.itemLocations.sort((a,b) => {
        return b.price - a.price;
      })
    } else if(selectedOption === 'low customer'){
      this.itemLocations.sort((a,b) => {
        return a.customers - b.customers;
      })
    } else if(selectedOption === 'high customer'){
      this.itemLocations.sort((a,b) => {
        return b.customers - a.customers;
      })
    }
  }

  renderChart1(bars: string[], counts: number[]){
    Highcharts.chart('Table1', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Top 10 Bars Where This Item Sells Most'
      },
      xAxis:{
        categories: bars,
        title: {
          text: 'Drinker'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Items Sold'
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
  renderChart2(drinkers: string[], counts: number[]){
    Highcharts.chart('Table2', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Top 10 Drinkers Who Buy This Item Most'
      },
      xAxis:{
        categories: drinkers,
        title: {
          text: 'Drinkers'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Items Bought'
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
  renderChart3(sales: string[], counts: number[]){
    Highcharts.chart('Table3', {
      chart: {
        type: 'column'
      },
      title: {
        text:'Item Sales By Month (Highest Selling to Lowest Selling)'
      },
      xAxis:{
        categories: sales,
        title: {
          text: 'Month'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Items Sold'
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
