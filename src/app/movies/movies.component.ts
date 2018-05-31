import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../movie.service'
import { Movie } from '../movie'
import { AddFundsComponent } from '../add-funds/add-funds.component';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})



export class MoviesComponent implements OnInit {
@ViewChild(AddFundsComponent) child : AddFundsComponent

  movies = new Array<Movie>();
  myMovies = new Array<Movie>();
  budget : number;
  removeButton : boolean = false
  myList: boolean = false;
  years: Array<any>;
  filters: Object;
  fields: Object;

  constructor(private moviesService : MovieService) {

    this.movies = this.moviesService.getMovies();
    this.myMovies = this.moviesService.getMyMovies();
    this.budget = this.moviesService.getBudget()
    this.years = this.moviesService.getYears();
    this.filters = {};
    this.fields = {};
   }


  buyMovie(index){

   let findIt = this.findMovie(this.movies[index].id,this.myMovies)
   
   if (findIt == undefined){

   let enoughBudget = this.moviesService.checkBudget(this.movies[index]);
   this.budget = this.moviesService.getBudget()
   this.myList = true;
   }
   else 
     alert('You selected yet this film !!')
  }

  removeMovie(index){
    
    this.moviesService.removeMovie(index);
    this.budget = this.moviesService.getBudget()
    // if(this.myMovies.length=0)
    //   this.myList = false;
  }

  findMovie(id,arr){
     let findIt =  arr.find( x => x.id == id )
     return findIt
  }

  remove(cond) {
    this.removeButton = cond;
  }

  updateFilters(): void {
       this.filters = Object.assign({}, this.fields);
  }

  addFunds(){
    alert('Hi')
    this.child.openDialog();
  }
 

  ngOnInit() {
  }

}
