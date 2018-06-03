import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { Movie } from '../movie'
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-mymovies',
  templateUrl: './mymovies.component.html',
  styleUrls: ['./mymovies.component.css']
})

export class MymoviesComponent implements OnInit {

  myMovies = new Array<Movie>();
  showButton : boolean = false;
  buttonIcon : string 
  iconText: string = 'remove_shopping_cart'
  constructor(private moviesService : MovieService) { 
  this.myMovies = this.moviesService.getMyMovies();
  
  }
  removeMovie(movie){
    this.moviesService.removeMovie(movie);
    
  }

  
  remove() {
    
    if(!this.showButton){
       this.iconText = 'done_outline';
       this.showButton = true;
      
    }
    
    else {
       
       this.iconText = 'remove_shopping_cart';
       this.showButton = false;
    }
    
    
  }
  
  ngOnInit() {
  }

}
