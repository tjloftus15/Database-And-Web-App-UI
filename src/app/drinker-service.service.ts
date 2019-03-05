import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Drinker{
  name: string;
  address: string;
  state: string;
};

export interface drinkerLikes{
  item: string;
  type: string;
};

export interface drinkerTrans{
  id: string;
  bar: string;
  item: string;
  quantity: number;
  total: number;
  date: string;
  time: string;
}



@Injectable({
  providedIn: 'root'
})
export class DrinkerServiceService {

  constructor(
    public http: HttpClient
  ) { }

  getDrinkers() {
    return this.http.get<Drinker[]>('/api/drinker');
  }

  getDrinker(drinker: string){
    return this.http.get<Drinker>('/api/drinker/'+ drinker);
  }
  //use below for acutal table one to order trans times
  getTransactions(drinker: string){
    return this.http.get<any[]>('/api/drinker/trans/time/'+drinker);
  }

  getLikes(drinker: string){
    return this.http.get<any[]>('/api/drinker/likes/'+drinker);
  }
  //use this to just get all transactions of a drinker (used to fill transaction table)
  getDrinkerTransactions(drinker: string){
    return this.http.get<any[]>('/api/drinker/trans/' +drinker);
  }

  getHighSpending(drinker: string){
    return this.http.get<any[]>('/api/drinker/spending/'+drinker);
  }

  getMostOrdered(drinker: string){
    return this.http.get<any[]>('/api/drinker/order/'+drinker);
  }

  getDaysSpending(drinker: string){
    return this.http.get<any[]>('/api/drinker/day/'+drinker);
  }

  getWeeksSpending(drinker: string){
    return this.http.get<any[]>('/api/drinker/week/'+drinker);
  }

  getMonthsSpending(drinker: string){
    return this.http.get<any[]>('/api/drinker/month/'+drinker);
  }



}
