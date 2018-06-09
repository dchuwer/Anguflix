import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Movie';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }
     
  ngOnInit() {
  }

}
