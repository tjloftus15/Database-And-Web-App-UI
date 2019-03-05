import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface ItemLocation{
  item: string;
  price: number;
  customers: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient ) { }

  getItems(){
    return this.http.get<any[]>('/api/items');
  }

  getBarSelling(item: string){
    return this.http.get<ItemLocation[]>('/api/bars-selling/' + item)

  }

  getItemManufacturer(item?: string):any{
    if(item){
      //return this.http.get<string>('/api/item-manufacturer/${item}');
      return this.http.get<string>('/api/item-manufacturer/'+item);
    }
      return this.http.get<string[]>('api/item-manufacturer');
  }
  getHighBars(item: string){
    return this.http.get<any[]>('/api/items/top-bar/'+item);
  }

  getHighBuyers(item: string){
    return this.http.get<any[]>('/api/items/top-buyer/'+item);
  }

  getTopMonths(item: string){
    return this.http.get<any[]>('/api/items/top-month/'+item);
  }
  

}
