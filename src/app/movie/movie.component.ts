import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../Movie';
import { ActivatedRoute, Router } from '@angular/router';

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
  @Output() buttonExpandClick: EventEmitter<String> = new EventEmitter();
  
  
  constructor(private route : ActivatedRoute, private router : Router) { }

  expandClick(movieId) {
    console.log("navigation" + movieId)
    this.router.navigate(['showMovie',movieId]);
    //this.buttonExpandClick.emit(movieId);
  }

  buttonClick(movie){
    this.buttonOnClick.emit(movie);
  }

  

  ngOnInit() {
  }

}
