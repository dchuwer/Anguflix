import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service'
import { Movie } from '../movie'
import { FindMovie } from '../findmovie'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})



export class MoviesComponent implements OnInit {

  findMovie = new FindMovie();
  movies = new Array<Movie>();
  myMovies = new Array<Movie>();
  

  constructor(private moviesService : MovieService) {

    this.movies = this.moviesService.getMovies();
    this.myMovies = this.moviesService.getMyMovies();
    
   }


  buyMovie(movie){
   
   let findIt = this.findMovie.findIt(movie,this.myMovies)
   if (findIt == undefined){
   let enoughBudget = this.moviesService.checkBudget(movie);
   
 ;
   }
   else 
     alert('You selected yet this film !!')
  }

  
  ngOnInit() {
  }

}
