import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filters } from '../filters'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  fields: Filters = new Filters();
 // filters: Object = {};
@Input() filters : Filters = new Filters();
@Output() buttonClick: EventEmitter<Filters> = new EventEmitter();

  years: Array<any> =['All'];
  
  

  constructor() {
 
   }

   buttonOnClick(){
     this.filters = {title: this.fields.title, year: this.fields.year}
     this.buttonClick.emit(this.filters)
   }

  updateFilters(): void {
    this.filters = Object.assign({}, this.filters);
}

  ngOnInit() {

    for (let i=1980; i<2018; i++){
      let yearObj = {viewValue : i}
      this.years.push(yearObj);
    }
  }

}
