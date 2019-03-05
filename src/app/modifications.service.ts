import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LocationStrategy } from '@angular/common';

export interface Qresult{
  result: any;
}

@Injectable({
  providedIn: 'root'
})
export class ModificationsService {

  constructor(public http: HttpClient) { }
  i: number;
  strs: string[];
  Query(str: string){
   
    for(this.i=0; this.i<str.length; this.i++){
      if(str.charAt(this.i) == '\\'){
        this.strs = str.split('\\', 1)
        this.strs[1] = str.substring(this.i+1)
        str=this.strs[0]+this.strs[1]
        break;
      }
    }
    return this.http.get<any>('/api/mod/'+str)
  }

 
}
