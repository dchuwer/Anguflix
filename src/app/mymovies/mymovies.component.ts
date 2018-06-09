import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { MovieService } from '../movie.service'
import { Movie } from '../movie'
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-mymovies',
  templateUrl: './mymovies.component.html',
  styleUrls: ['./mymovies.component.css']
})

export class MymoviesComponent implements OnInit {

  filter: Object = {};
  myMovies: Array<Movie> = [];
  showButton : boolean = false;
  buttonIcon : string 
  iconText: string = 'remove_shopping_cart'
  constructor(private userService : UserService, private movieService : MovieService ) { 
     this.myMovies = this.userService.getMyMovies()
     
     this.userService.myMovieUpdated.subscribe( (data) => {
        this.myMovies = data
      })
         this.calcBudget();
  }
  removeMovie(movie){
    console.log(movie) 
    this.userService.removeMovie(movie);
    
  }

  buildFilters(filter){
    this.filter = filter;
  }

  calcBudget(){
    
    let sumMovies = 0;
    for ( let i of this.myMovies){
      sumMovies += i.price
    }
    this.userService.calcBudget(sumMovies); 
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
    // this.userService.myMovieUpdated.subscribe( (data) => {
    //     this.myMovies = data;
    //     this.calcBudget() })

    
   
    
  }

}
