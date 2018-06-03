import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../Movie';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  @Input() buttonIcon : string = '';
  @Input() showButton : boolean = true;
  @Output() buttonOnClick: EventEmitter<Movie> = new EventEmitter();
  
  
  constructor() { }

  buttonClick(movie){
    this.buttonOnClick.emit(movie);
  }

  

  ngOnInit() {
  }

}
