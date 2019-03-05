import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: any[];
  manufacturerOptions: SelectItem[];
  originalItemList: any[];
  constructor(private itemService: ItemsService) { 
    this. itemService.getItems().subscribe(
      data=> {
        this.items=data;
        this.originalItemList=data;
      }
    );

    this.itemService.getItemManufacturer().subscribe(
      data =>{
        this.manufacturerOptions = data.map(manufacturer => {
          return {
            label: manufacturer,
            value: manufacturer,
          };
        });
      }
    )
  }

  ngOnInit() {
  }

  filterItems(manufacturer: string){
    this.items=this.originalItemList;
    if(manufacturer){
      this.items=this.originalItemList.filter(item => item.manufacturer === manufacturer);
    }
  }
}
