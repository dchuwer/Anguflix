import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';


@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {
  movie: Movie
  constructor(private movieService : MovieService,  private route: ActivatedRoute ) { 
    this.movie = new Movie();
    
  }

  buttonClick(movie){
    let findIt = this.movieService.findMovie(movie)
    if (!findIt){
     let checkBudget = this.movieService.checkBudget(movie);
     if (!checkBudget) {
       alert('You dont have enough funds to buy ths film ')
       return
     }
    }
    else 
      alert('You selected yet this film !!')
   }

  addNewComment(id, newReview){
    
    this.movieService.addNewReview(id, newReview).subscribe( (data) => {
      console.log(data)});
  }
  
   
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.getMovieById(params.id).subscribe( (movie) => {
        this.movie = movie
      })
      });
      
    
  }

}
