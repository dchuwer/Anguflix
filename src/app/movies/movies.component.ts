import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'
import { Movie } from '../movie'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})



export class MoviesComponent implements OnInit {

  
  movies = new Array<Movie>();
  myMovies = new Array<Movie>();
  

  constructor(private moviesService : MovieService) {

   this.moviesService.getMovies().subscribe( (movies) => { 
    this.movies = movies });
    
    
   }


  buyMovie(movie){
   let findIt = this.moviesService.findMovie(movie)
   if (!findIt){
    let checkBudget = this.moviesService.checkBudget(movie);
    if (!checkBudget) {
      alert('You dont have enough funds to buy ths film ')
      return
    }
   }
   else 
     alert('You selected yet this film !!')
  }

  getMovieFilter(filter) {
    this.moviesService.getMoviesByFilter(filter).subscribe( (movies) => {
     this.movies = movies
   })  
  }
   
   
   ngOnInit() {
    
  }

}
