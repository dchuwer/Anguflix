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
  //budget : number;
  //showButton : boolean = true;
  years: Array<any>;
  filters: Object;
  fields: Object;

  constructor(private moviesService : MovieService) {

    this.movies = this.moviesService.getMovies();
    this.myMovies = this.moviesService.getMyMovies();
    //this.budget = this.moviesService.getBudget()
    this.years = this.moviesService.getYears();
    this.filters = {};
    this.fields = {};
   }


  buyMovie(movie){
   
   let findIt = this.findMovie.findIt(movie,this.myMovies)
   console.log(findIt)
   if (findIt == undefined){

   let enoughBudget = this.moviesService.checkBudget(movie);
   //this.showButton = false;
   //this.budget = this.moviesService.getBudget()
 ;
   }
   else 
     alert('You selected yet this film !!')
  }

  // removeMovie(index){
    
  //   this.moviesService.removeMovie(index);
  //   this.budget = this.moviesService.getBudget()
  //   // if(this.myMovies.length=0)
  //   //   this.myList = false;
  // }

  

  updateFilters(): void {
       this.filters = Object.assign({}, this.fields);
  }

  
 

  ngOnInit() {
  }

}
