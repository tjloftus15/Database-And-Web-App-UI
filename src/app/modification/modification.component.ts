import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ModificationsService, Qresult } from '../modifications.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {
  @Output() DATA = new EventEmitter<Qresult>();
  @Input() in: string;
  
  str: string;
  result: Qresult;
  res: any[];

  constructor(public modificationService: ModificationsService) {
    /*this.modificationService.Query(this.str).subscribe(
      data =>{
        console.log(this.str);
        this.result=data;
        this.DATA=data;
        console.log(this.str);
        this.result=data;
        //this.DATA=data;
        console.log(this.result);
        this.DATA.emit(data);
        this.res=data;
      }
    )*/
    
  }


  
  ngOnInit() {
  }

  sendValues(){
    this.modificationService.Query(this.str).subscribe(
      data =>{
        
        console.log(this.str);
        this.result=data;
        this.DATA=data;
        console.log(this.result);
        this.DATA.emit(data);
      }
    )
    
  }

  test = () => console.log("this is a test");
  

}
