import { Inject, Injectable } from '@angular/core';
import { Movie } from './Movie';
import { UserComponent } from "./user/user.component"
import { FindMovie } from './findmovie'
import { UserService } from './user.service'
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


let years: Array<any> =['All'];
for (let i=1980; i<2018; i++){
   let yearObj = {viewValue : i}
   years.push(yearObj);
 }

 


let userComponent = new UserComponent();
let findMovie = new FindMovie();

@Injectable()
export class MovieService {
   
   Movies: Array<Movie> = [];
   

  constructor(private userService : UserService, private http : HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { 
    
    
  }

  getMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>('https://anguflix-api.herokuapp.com/api/movies');
  }

  getMoviesByFilter(filter) : Observable<any[]> {
    return this.http.get<any[]>('https://anguflix-api.herokuapp.com/api/movies?title='+filter);
  } 

  getMovieById(id) : Observable<Movie> {
    return this.http.get<Movie>('https://anguflix-api.herokuapp.com/api/movies/'+id);
  }

  addNewReview(id, reviews) : Observable<Object> {
    return this.http.post<Object>('https://anguflix-api.herokuapp.com/api/movies/'+id+'/reviews/',reviews)
  }
 
  findMovie(movie) {
    return this.userService.findMovie(movie);
  }

  getMyMovies() : Movie[] {
     return  this.storage.get("MyMovies")
  }

  

  checkBudget(movie) {
    return this.userService.buyFilm(movie);
  }
    
}

  
