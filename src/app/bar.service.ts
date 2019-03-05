import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

export interface Bar {
  name: string;
  address: string;
  openHour: string;
  closeHour: string;
  state: string;
}

export interface BarMenuItem{
  type: string;
  name: string;
  manf: string;
  price: number;
  likes: number;
}



@Injectable({
  providedIn: 'root'
})



export class BarService {

  constructor(  
    public http: HttpClient
  ){ }
  getBars(){
    return this.http.get<Bar[]>('/api/bar');
  }

  getBar(bar: string){
    return this.http.get<Bar>('api/bar/' + bar);
  }

  getMenu(bar: string){
    return this.http.get<BarMenuItem[]>('/api/menu/' + bar);
  }

  getFrequentCounts(){
    return this.http.get<any[]>('/api/frequents-data');
  }

  getHighSpenders(bar: string){
    return this.http.get<any[]>('/api/menu/spenders/' + bar);
  }

  getPopularBeers(bar: string){
    return this.http.get<any[]>('/api/menu/popular/'+ bar);
  }

  getPopularManufacturers(bar: string){
    return this.http.get<any[]>('/api/menu/manf/' + bar);
  }

  getBusyHours(bar: string){
    return this.http.get<any[]>('/api/bar/hour/'+bar);
  }

  getBusyDays(bar: string){
    return this.http.get<any[]>('/api/bar/day/'+bar);
  }
}
