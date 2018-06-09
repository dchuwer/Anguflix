import { Inject, Injectable } from '@angular/core';
import { Movie } from './Movie';
import { UserComponent } from "./user/user.component"
import { MovieService } from './movie.service'
import { Subject, Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

let years: Array<any> =['All'];
for (let i=1980; i<2018; i++){
   let yearObj = {viewValue : i}
   years.push(yearObj);
 }


let userComponent = new UserComponent();

@Injectable()
  
export class UserService {
  myMovies : Array<Movie> = [];
  budget: number;
  public myMovieUpdated : Observable<Array<Movie>>;
  public myMovieSubject : Subject<Array<Movie>>;
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) 
   { 
    this.myMovieSubject = new Subject<Array<Movie>>();
    this.myMovieUpdated = this.myMovieSubject.asObservable();
    this.budget = userComponent.user.budget;
      
   }
    
    
  getMyMovies() : Array<Movie> {
    return this.storage.get("MyMovies")
  }

  getBudget() {
    return this.budget
  }

  calcBudget(value) {
    this.budget = userComponent.user.budget;
    return this.budget -= value;
  }

  addBudget(newDeposit:number) {
    this.budget += newDeposit
  }

  buyFilm(movie) {
    if (movie.price < this.budget){
      this.budget -= movie.price;
      this.myMovies.push(movie)
      this.myMovieSubject.next(this.myMovies);
      this.storage.set("MyMovies", this.myMovies);
      return true;
    }
    return false;   
  }

  findMovie(movie) {
    this.myMovies = this.storage.get("MyMovies")
     if (this.myMovies != null)
       return this.myMovies.find( x => x._id == movie._id )
     else {
       this.myMovies=[];
       return false;
     }
  }

  removeMovie(movie){
    this.myMovies = this.getMyMovies();
    let index = this.myMovies.findIndex(x => x._id == movie._id);
    this.budget += Number(this.myMovies[index].price);
    this.myMovies.splice(index,1)
    this.myMovieSubject.next(this.myMovies);
    this.storage.set("MyMovies", this.myMovies);
  }

  getYears() {
    return years;
  } 
  


}

